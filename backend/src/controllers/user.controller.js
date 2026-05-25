import User from "../models/User.js";

import cloudinary
from "../config/cloudinary.js";

export const uploadResume = async (
  req,
  res
) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded"
      });
    }

    const result =
      await cloudinary.uploader.upload(
        req.file.path,
        {
          resource_type: "auto",
          folder: "resumes"
        }
      );

    const user =
      await User.findByIdAndUpdate(
        req.user._id,
        {
          resume: result.secure_url
        },
        { new: true }
      );

    res.status(200).json({
      success: true,
      resume: user.resume
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};