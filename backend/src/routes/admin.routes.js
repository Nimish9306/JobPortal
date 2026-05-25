import express from "express";

import protect from "../middlewares/auth.middleware.js";

import allowRoles
from "../middlewares/role.middleware.js";

import {
  getDashboardStats,
    getAllUsers,
    getRecruiters,
    getStudents,
    adminDeleteJob,
    banUser,
    unbanUser,
    getRecentJobs,
    getRecentApplications
} from "../controllers/admin.controller.js";

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  allowRoles("admin"),
  getDashboardStats
);
router.get(
  "/users",
  protect,
  allowRoles("admin"),
  getAllUsers
);
router.get(
  "/recruiters",
  protect,
  allowRoles("admin"),
  getRecruiters
);
router.get(
  "/students",
  protect,
  allowRoles("admin"),
  getStudents
);
router.delete(
  "/jobs/:id",
  protect,
  allowRoles("admin"),
  adminDeleteJob
);
router.put(
  "/users/:id/ban",
  protect,
    allowRoles("admin"),
    banUser
);
router.put(
  "/users/:id/unban",
  protect,
  allowRoles("admin"),
  unbanUser
);
router.get(
  "/recent-jobs",
  protect,
    allowRoles("admin"),
    getRecentJobs
);
router.get(
    "/recent-applications",
    protect,
    allowRoles("admin"),
    getRecentApplications
);

export default router;