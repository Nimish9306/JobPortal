import express from "express";

import protect from "../middlewares/auth.middleware.js";    
import { uploadResume } from "../controllers/user.controller.js";

import multer from "multer";
import upload from "../middlewares/upload.middleware.js";
const router = express.Router();

router.post(
  "/upload-resume",
  protect,
  upload.single("resume"),
  uploadResume
);

export default router;