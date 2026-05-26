import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage
from "./pages/auth/LoginPage";

import RegisterPage
from "./pages/auth/RegisterPage";

import HomePage
from "./pages/HomePage";

import StudentDashboard
from "./pages/student/StudentDashboard";

import ProtectedRoute
from "./routes/ProtectedRoute";
import JobDetailsPage
from "./pages/jobs/JobDetailsPage";

import ApplyJobPage from "./pages/jobs/ApplyJobPage";
import RecruiterDashboard
from "./pages/recruiter/RecruiterDashboard";

import CreateJobPage
from "./pages/recruiter/CreateJobPage";

import ApplicantsPage
from "./pages/recruiter/ApplicantsPage";
import ResetPasswordOTP
from "./pages/auth/ResetPasswordOTP";

import JobsPage
from "./pages/jobs/JobsPage";

import AdminDashboard
from "./pages/admin/AdminDashboard";

function App() {

  return (

    <HashRouter>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/jobs"
          element={<JobsPage />}
        />

        <Route
          path="/student"
          element={

            <ProtectedRoute>

              <StudentDashboard />

            </ProtectedRoute>

          }
        />

        <Route
          path="/jobs/:id"
          element={<JobDetailsPage />}
        />

        <Route
          path="/jobs/:id/apply"
          element={<ApplyJobPage />}
        />

        <Route
  path="/recruiter"
  element={<RecruiterDashboard />}
/>
          <Route
            path="/recruiter/create-job"
            element={<CreateJobPage />}
          />
          <Route
            path="/recruiter/jobs/:id/applicants"
            element={<ApplicantsPage />}
          />

        <Route
          path="/forgot-password"
          element={
            <ResetPasswordOTP />
          }
        />
        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

      </Routes>

    </HashRouter>

  );
}

export default App;