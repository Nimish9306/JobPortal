import User
from "../models/User.js";
import Application from "../models/Application.js";
import Job from "../models/Job.js";
import { getIO }
from "../socket.js";
import Notification
from "../models/notification.js";
import sendEmail
from "../utils/sendEmail.js";
export const applyToJob = async (
  req,
  res
) => {
  try {

    const { jobId } = req.params;

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }

    // prevent duplicate applications

    const alreadyApplied =
      await Application.findOne({
        applicant: req.user._id,
        job: jobId
      });

    if (alreadyApplied) {
      return res.status(400).json({
        message: "Already applied"
      });
    }

    const application =
      await Application.create({
        applicant: req.user._id,
        job: jobId,
        recruiter: job.createdBy
      });

    res.status(201).json({
      success: true,
      application
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
export const getMyApplications = async (
  req,
  res
) => {

  const applications =
    await Application.find({
      applicant: req.user._id
    })
    .populate("job")
    .populate("recruiter", "name email");

  res.status(200).json({
    success: true,
    applications
  });
};
export const
getApplicantsForJob =
async (req, res) => {

  try {

    // // console.log(
    //   req.params.jobId
    // );

    const applications =
      await Application.find({

        job:
          req.params.jobId

      })

      .populate({
  path: "applicant",

        select:
          "name email resume skills"

      });

    // console.log(
    //   applications
    // );

    res.status(200).json({

      success: true,

      applications

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        error.message

    });

  }

};

export const updateApplicationStatus =
async (req, res) => {

  const { status } = req.body;

  const application =
  await Application.findById(
    req.params.id
  )

  .populate({

    path: "job",

    select:
      "createdBy"

  });

  if (!application) {
    return res.status(404).json({
      message: "Application not found"
    });
  }

  // recruiter ownership check

  if (
    application.job.createdBy.toString() !==
    req.user._id.toString()
  ) {
    return res.status(403).json({
      message: "Unauthorized"
    });
  }

  application.status = status;

  await application.save();
  await application.populate(
  "applicant"
);

const applicant =
  application.applicant;

if (status === "accepted") {

  await sendEmail(

      applicant.email,

      "Application Accepted",

`
Congratulations ${applicant.name},

Your application has been accepted.

Please login to the portal for further updates.
`

  );

}

if (status === "rejected") {

  await sendEmail(

 
      applicant.email,

  
      "Application Update",

`
Hello ${applicant.name},

We appreciate your interest.

Unfortunately your application was not selected for this role.

Thank you for applying.

jobPortal Team
`

  );

}
  await Notification.create({

  user: application.applicant,

  message:
    `Your application status changed to ${status}`

});
const io = getIO();
const socketId =
  onlineUsers[
    application.applicant
  ];

if (socketId) {

  io.to(socketId).emit(
    "notification",
    {

      message:
        `Your application was ${status}`

    }
  );

}

  res.status(200).json({
    success: true,
    application
  });
};