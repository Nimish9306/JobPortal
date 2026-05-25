import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import protect from "./middlewares/auth.middleware.js";
import companyRoutes from "./routes/company.routes.js";
import jobRoutes from "./routes/job.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import notificationRoutes from "./routes/notification.routes.js";

const app = express();
app.get("/", (req, res) => {
  res.send("API is running");
});
app.use(cors({

  origin: "http://localhost:5173",

  credentials: true,

}));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/notifications", notificationRoutes);


app.use(cookieParser());
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "This is a protected route",
    user: req.user
  });
});

export default app;