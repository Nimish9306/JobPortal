import express from 'express';
import User from '../models/User.js';
import { registerUser, loginUser, logoutUser, getMe,testEmail,forgotPassword,resetPassword,sendOTP,
verifyOTP,resetPasswordWithOTP} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/me', getMe);
router.get('/test-email', testEmail);
router.post(
  "/forgot-password",
  forgotPassword
);

router.put(
  "/reset-password/:token",
  resetPassword
);
router.post(
  "/send-otp",
  sendOTP
);
router.post(
  "/verify-otp",
  verifyOTP
);
router.post(
  "/reset-password-otp",
  resetPasswordWithOTP
);
export default router;