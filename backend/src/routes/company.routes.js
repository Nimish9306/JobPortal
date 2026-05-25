import express from 'express';
import protect from "../middlewares/auth.middleware.js";

import allowRoles from "../middlewares/role.middleware.js";

import {
  createCompany
} from "../controllers/company.controller.js";

const router = express.Router();

router.post(
  "/create",
  protect,
  allowRoles("recruiter"),
  createCompany
);

export default router;