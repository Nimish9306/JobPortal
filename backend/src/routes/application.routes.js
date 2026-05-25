import express from "express";

import protect from "../middlewares/auth.middleware.js";

import allowRoles from "../middlewares/role.middleware.js";

import {
  applyToJob,
  getMyApplications,
  getApplicantsForJob,
    updateApplicationStatus
} from "../controllers/application.controller.js";

const router = express.Router();

router.post(
  "/apply/:jobId",
  protect,
  allowRoles("student"),
  applyToJob
);
router.get(
  "/my-applications",
  protect,
  allowRoles("student"),
  getMyApplications
);
router.get(
  "/jobs/:jobId/applicants",
  protect,
  allowRoles("recruiter"),
  getApplicantsForJob
);
router.put(
  "/:id/status",
  protect,
    allowRoles("recruiter"),
    updateApplicationStatus
);
export default router;