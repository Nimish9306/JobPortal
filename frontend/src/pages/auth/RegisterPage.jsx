import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import API from "../../api/axios";

// Add these fonts to your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

const styles = {
  root: {
    fontFamily: "'DM Sans', sans-serif",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f5f7",
    padding: "24px",
  },

  card: {
    width: "100%",
    maxWidth: "980px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 24px 80px rgba(0,0,0,0.12)",
  },

  left: {
    background: "#0a0a0f",
    padding: "48px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden",
  },

  orb1: {
    position: "absolute",
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    background: "#185FA5",
    opacity: 0.35,
    filter: "blur(70px)",
    top: "-60px",
    right: "-40px",
  },

  orb2: {
    position: "absolute",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background: "#0F6E56",
    opacity: 0.25,
    filter: "blur(70px)",
    bottom: "30px",
    left: "-40px",
  },

  orb3: {
    position: "absolute",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "#3C3489",
    opacity: 0.3,
    filter: "blur(60px)",
    bottom: "180px",
    right: "30px",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    zIndex: 1,
  },

  logoIcon: {
    width: "34px",
    height: "34px",
    background: "#185FA5",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logoName: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "16px",
    fontWeight: 700,
    color: "#fff",
  },

  hero: {
    zIndex: 1,
  },

  tagline: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.12em",
    color: "#5DCAA5",
    textTransform: "uppercase",
    marginBottom: "16px",
  },

  headline: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "36px",
    fontWeight: 800,
    lineHeight: 1.15,
    color: "#fff",
    marginBottom: "18px",
  },

  headlineAccent: {
    color: "#378ADD",
  },

  sub: {
    fontSize: "14px",
    color: "#888780",
    lineHeight: 1.7,
  },

  stats: {
    display: "flex",
    gap: "24px",
    zIndex: 1,
  },

  statVal: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "20px",
    fontWeight: 700,
    color: "#fff",
  },

  statLbl: {
    fontSize: "11px",
    color: "#5F5E5A",
  },

  right: {
    width: "40%",
    padding: "42px 44px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#fff",
  },

  formHeader: {
    marginBottom: "24px",
  },

  welcome: {
    fontSize: "12px",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#888780",
    marginBottom: "8px",
  },

  formTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "34px",
    fontWeight: 700,
    color: "#0a0a0f",
  },

  field: {
    marginBottom: "16px",
  },

  label: {
    fontSize: "12px",
    fontWeight: 500,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "#888780",
    display: "block",
    marginBottom: "8px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    background: "#f9f9f9",
    border: "1px solid #e5e5e5",
    borderRadius: "8px",
    color: "#0a0a0f",
    outline: "none",
  },

  select: {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "16px",
    background: "#f9f9f9",
    border: "1px solid #e5e5e5",
    borderRadius: "8px",
    color: "#0a0a0f",
    outline: "none",
  },

  submitBtn: {
    width: "100%",
    marginTop: "20px",
    padding: "14px",
    background: "#0a0a0f",
    color: "#fff",
    fontFamily: "'Syne', sans-serif",
    fontSize: "16px",
    fontWeight: 600,
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  loginText: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "15px",
    color: "#888780",
  },

  loginLink: {
    color: "#185FA5",
    textDecoration: "none",
    fontWeight: 500,
  },
};

export default function RegisterPage() {

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState({

      name: "",

      email: "",

      password: "",

      role: "student",

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      setError("");

      await API.post(

        "/auth/register",

        formData

      );

      navigate("/login");

    } catch (error) {

      console.log(error);

      setError(

        error.response?.data
          ?.message ||

        "Registration failed"

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div style={styles.root}>

     

        

        <div style={styles.right}>

          <div style={styles.formHeader}>

            <p style={styles.welcome}>
              Join JobPortal
            </p>

            <h2 style={styles.formTitle}>
              Create your account
            </h2>

          </div>

          {
            error && (

              <div
                style={{
                  background:
                    "#fee2e2",

                  color:
                    "#dc2626",

                  padding:
                    "12px",

                  borderRadius:
                    "8px",

                  marginBottom:
                    "18px",

                  fontSize:
                    "13px",
                }}
              >
                {error}
              </div>

            )
          }

          <form onSubmit={handleSubmit}>

            <div style={styles.field}>

              <label style={styles.label}>
                Full Name
              </label>

              <input
                style={styles.input}
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />

            </div>

            <div style={styles.field}>

              <label style={styles.label}>
                Email
              </label>

              <input
                style={styles.input}
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

            <div style={styles.field}>

              <label style={styles.label}>
                Password
              </label>

              <input
                style={styles.input}
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
              />

            </div>

            <div style={styles.field}>

              <label style={styles.label}>
                Role
              </label>

              <select
                style={styles.select}
                name="role"
                value={formData.role}
                onChange={handleChange}
              >

                <option value="student">
                  Student
                </option>

                <option value="recruiter">
                  Recruiter
                </option>

              </select>

            </div>

            <button
              type="submit"
              style={styles.submitBtn}
            >

              {
                loading
                  ? "Creating Account..."
                  : "Create Account"
              }

            </button>

          </form>

          <p style={styles.loginText}>

            Already have an account?{" "}

            <Link
              to="/login"
              style={styles.loginLink}
            >
              Login here
            </Link>

          </p>

        </div>


    </div>

  );
}