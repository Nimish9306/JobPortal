import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import generateToken from "../utils/generateToken.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";
// Register a new user
export const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // Check if user already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        const token = generateToken(user._id);

    res.status(201).json({
        message: 'User registered successfully',
      success: true,
      token,
      user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
}
};

export const loginUser = async (req, res) => {
    try {
    const { email, password } = req.body; 
    const user = await User.findOne({ email });
    if (user.isBanned) {

  return res.status(403).json({
    message: "Account banned"
  });

}

    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }  
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = generateToken(user._id);

    res.status(200).json({
        message: 'Login successful',
        success: true,
        token,
        user
    });
} catch (error) {
    res.status(500).json({
        message: error.message
    });
}}; 

export const logoutUser = async (req, res) => {

  res.status(200).json({
    success: true,
    message: "Logged out"
  });

};
export const getMe = async (req, res) => {
  res.status(200).json(req.user);
};

export const testEmail = async (
  req,
  res
) => {

  try {

    await sendEmail(
      "YOUR_EMAIL@gmail.com",
      "Test Email",
      "Email system working successfully"
    );

    res.status(200).json({
      success: true,
      message: "Email sent successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const forgotPassword =
async (req, res) => {

  try {

    const user =
      await User.findOne({
        email: req.body.email
      });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const resetToken =
      crypto.randomBytes(20)
        .toString("hex");

    user.resetPasswordToken =
      resetToken;

    user.resetPasswordExpire =
      Date.now() + 10 * 60 * 1000;

    await user.save();

    const resetUrl =
      `http://localhost:3000/reset-password/${resetToken}`;

    await sendEmail(
      user.email,
      "Password Reset",
      `Reset your password: ${resetUrl}`
    );

    res.status(200).json({
      success: true,
      message: "Reset email sent"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
export const resetPassword =
async (req, res) => {

  try {

    const user =
      await User.findOne({
        resetPasswordToken:
          req.params.token,

        resetPasswordExpire:
          { $gt: Date.now() }
      });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired token"
      });
    }

    const hashedPassword =
      await bcrypt.hash(
        req.body.password,
        10
      );

    user.password = hashedPassword;

    user.resetPasswordToken =
      undefined;

    user.resetPasswordExpire =
      undefined;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Password reset successful"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const sendOTP = async (
  req,
  res
) => {

  try {

    const { email } = req.body;

    const user =
      await User.findOne({ email });

    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });

    }

    // generate 6 digit OTP

    const otp =
      Math.floor(
        100000 +
        Math.random() * 900000
      ).toString();

    // save otp in database

    user.otp = otp;

    // expires in 5 mins

    user.otpExpire =
      Date.now() + 5 * 60 * 1000;

    await user.save();

    // send email

    await sendEmail(

      user.email,

      "OTP Verification",

      `Your OTP is ${otp}`

    );
    res.status(200).json({

      success: true,

      message: "OTP sent successfully"

    });

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};

export const verifyOTP = async (
  req,
  res
) => {

  try {

    const { email, otp } = req.body;

    const user =
      await User.findOne({ email });

    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });

    }

    // check OTP

    if (user.otp !== otp) {

      return res.status(400).json({
        message: "Invalid OTP"
      });

    }

    // check expiry

    if (
      user.otpExpire < Date.now()
    ) {

      return res.status(400).json({
        message: "OTP expired"
      });

    }

    // clear otp after verification

    user.otp = undefined;

    user.otpExpire = undefined;

    await user.save();

    res.status(200).json({

      success: true,

      message:
        "OTP verified successfully"

    });

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};

export const
resetPasswordWithOTP =
async (req, res) => {

  try {

    const {

      email,

      otp,

      password

    } = req.body;

    const user =
      await User.findOne({

        email

      });

    if (!user) {

      return res
      .status(404)
      .json({

        message:
          "User not found"

      });

    }

    // CHECK OTP

    if (
      user.otp !== otp
    ) {

      return res
      .status(400)
      .json({

        message:
          "Invalid OTP"

      });

    }

    // CHECK EXPIRY

    if (
      user.otpExpire < Date.now()
    ) {

      return res
      .status(400)
      .json({

        message:
          "OTP expired"

      });

    }

    // HASH PASSWORD

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    user.password =
      hashedPassword;

    // CLEAR OTP

    user.otp = undefined;

    user.otpExpire =
      undefined;

    await user.save();

    res.status(200).json({

      success: true,

      message:
        "Password reset successful"

    });

  } catch (error) {

    res.status(500).json({

      message:
        error.message

    });

  }

};