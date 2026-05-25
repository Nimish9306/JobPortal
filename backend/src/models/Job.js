import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    location: {
      type: String
    },

    salary: {
      type: Number
    },

    jobType: {
      type: String,
      enum: [
        "full-time",
        "part-time",
        "internship",
        "remote"
      ]
    },

    experienceLevel: {
      type: String
    },

    skillsRequired: [
      {
        type: String
      }
    ],

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company"
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;