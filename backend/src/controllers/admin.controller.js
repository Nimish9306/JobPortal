import User from "../models/User.js";
import Job from "../models/Job.js";
import Application from "../models/Application.js";

export const getDashboardStats =
async (req, res) => {

  try {

    const totalUsers =
      await User.countDocuments();

    const totalRecruiters =
      await User.countDocuments({
        role: "recruiter"
      });

    const totalStudents =
      await User.countDocuments({
        role: "student"
      });

    const totalJobs =
      await Job.countDocuments();

    const totalApplications =
      await Application.countDocuments();

    res.status(200).json({
      success: true,

      stats: {
        totalUsers,
        totalRecruiters,
        totalStudents,
        totalJobs,
        totalApplications
      }
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
export const getAllUsers =
async (req, res) => {

  const users = await User.find()
    .select("-password");

  res.status(200).json({
    success: true,
    users
  });
};

export const getRecruiters =
async (req, res) => {

  const recruiters =
    await User.find({
      role: "recruiter"
    }).select("-password");

  res.status(200).json({
    success: true,
    recruiters
  });
};

export const getStudents =
async (req, res) => {

  const students =
    await User.find({
      role: "student"
    }).select("-password");

  res.status(200).json({
    success: true,
    students
  });
};

export const adminDeleteJob =
async (req, res) => {

  const job = await Job.findById(
    req.params.id
  );

  if (!job) {
    return res.status(404).json({
      message: "Job not found"
    });
  }

  await job.deleteOne();

  res.status(200).json({
    success: true,
    message: "Job deleted"
  });
};

export const banUser = async (
  req,
  res
) => {

  try {

    const user =
      await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    user.isBanned = true;

    await user.save();

    res.status(200).json({
      success: true,
      message: "User banned successfully",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const unbanUser = async (
  req,
  res
) => {

  try {

    const user =
      await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    user.isBanned = false;

    await user.save();

    res.status(200).json({
      success: true,
      message: "User unbanned successfully",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const getRecentJobs =
async (req, res) => {

  try {

    const jobs = await Job.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("company")
      .populate("createdBy", "name email");

    res.status(200).json({
      success: true,
      jobs
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const getRecentApplications =
async (req, res) => {

  try {

    const applications =
      await Application.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .populate(
          "applicant",
          "name email"
        )
        .populate(
          "job",
          "title"
        );

    res.status(200).json({
      success: true,
      applications
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};