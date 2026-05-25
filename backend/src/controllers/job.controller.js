import Job from "../models/Job.js";
import Application
from "../models/Application.js";
// Create a new job
export const createJob = async (req, res) => {
  try {
    const { title, description, location, salary,jobType,
      experienceLevel,
      skillsRequired,
      company } = req.body;
    const job = await Job.create({
      title,
        description,
        location,
        salary,
        jobType,
      experienceLevel,
      skillsRequired,
      company:
req.user.company,

createdBy:
req.user._id
    });
    res.status(201).json({
      message: "Job created successfully",
        success: true,
        job
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
export const getAllJobs = async (
  req,
  res
) => {

  try {

    const {
      keyword,
      location,
      jobType,
      page = 1,
      limit = 10,
      sort
    } = req.query;

    // dynamic query object

    let query = {};

    // keyword search

    if (keyword) {
      query.title = {
        $regex: keyword,
        $options: "i"
      };
    }

    // location filter

    if (location) {
      query.location = location;
    }

    // job type filter

    if (jobType) {
      query.jobType = jobType;
    }

    if (req.query.skills) {

      query.skillsRequired = {
        $in: req.query.skills.split(",")
      };

    }

    if (req.query.minSalary) {

      query.salary = {
        $gte: Number(req.query.minSalary)
      };

    }

    // sorting logic

    let sortOption = {};

    if (sort === "salary") {
      sortOption.salary = -1;
    }

    if (sort === "latest") {
      sortOption.createdAt = -1;
    }

    // pagination logic

    const skip =
      (page - 1) * limit;

    const jobs = await Job.find(query)
      .populate("company")
      .sort(sortOption)
      .skip(skip)
      .limit(Number(limit));

    const totalJobs =
      await Job.countDocuments(query);

    res.status(200).json({
      success: true,
      totalJobs,
      currentPage: Number(page),
      totalPages:
        Math.ceil(totalJobs / limit),
      jobs
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
export const getSingleJob = async (
  req,
  res
) => {

  const job = await Job.findById(
    req.params.id
  ).populate("company");

  res.status(200).json({
    success: true,
    job
  });
};

export const updateJob = async (
  req,
  res
) => {

  const job = await Job.findById(
    req.params.id
  ).populate("company");

  if (!job) {
    return res.status(404).json({
      message: "Job not found"
    });
  }

  if (
    job.createdBy.toString() !==
    req.user._id.toString()
  ) {
    return res.status(403).json({
      message: "Unauthorized"
    });
  }

  const updatedJob = await Job.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  ).populate("company");

  res.status(200).json({
    success: true,
    updatedJob
  });
};

export const
deleteJob =
async (req, res) => {

  try {

    const job =
      await Job.findById(
        req.params.id
      );

    if (!job) {

      return res
      .status(404)
      .json({

        message:
          "Job not found"

      });

    }

    // DELETE ALL APPLICATIONS

    await Application.deleteMany({

      job:
        req.params.id

    });

    // DELETE JOB

    await Job.findByIdAndDelete(

      req.params.id

    );

    res.status(200).json({

      message:
        "Job deleted successfully"

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        error.message

    });

  }

};
export const
getRecruiterJobs =
async (req, res) => {

  try {

    const jobs =
      await Job.find({

        company:
          req.user.company

      })

      .populate("company")

      .lean();

    // ADD APPLICANTS COUNT

    const jobsWithCounts =
      await Promise.all(

        jobs.map(
          async (job) => {

            const applicantsCount =
              await Application.countDocuments({

                job:
                  job._id

              });

            return {

              ...job,

              applicantsCount

            };

          }
        )

      );

    res.status(200).json({

      success: true,

      jobs:
        jobsWithCounts

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        error.message

    });

  }

};

export default {
  createJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
  getRecruiterJobs
};
  