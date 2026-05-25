import express from "express";

import protect from "../middlewares/auth.middleware.js";

import allowRoles from "../middlewares/role.middleware.js";

import {
  createJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
  getRecruiterJobs
} from "../controllers/job.controller.js";

const router = express.Router();

router.post(
  "/create",
  protect,
  allowRoles("recruiter"),
  createJob
);
router.get("/", getAllJobs);
router.get("/:id", getSingleJob);
router.put(
  "/:id",
  protect,
  allowRoles("recruiter"),
  updateJob
);
router.delete(
  "/:id",
  protect,
  allowRoles("recruiter"),
  deleteJob
);
router.get(
  "/recruiter/jobs",
  protect,
  allowRoles("recruiter"),
  getRecruiterJobs
);
export default router;