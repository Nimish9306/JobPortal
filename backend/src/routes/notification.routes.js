import express from "express";

import protect
from "../middlewares/auth.middleware.js";

import {
  getNotifications,
    markNotificationRead
} from "../controllers/notification.controller.js";

const router = express.Router();

router.get(
  "/",
  protect,
  getNotifications
);
router.put(
  "/:id/read",
  protect,
  markNotificationRead
);
export default router;