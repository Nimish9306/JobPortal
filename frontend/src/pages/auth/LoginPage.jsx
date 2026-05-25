import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useDispatch } from "react-redux";

import API from "../../api/axios";

import {
  setCredentials,
} from "../../features/auth/authSlice";

// Add these fonts to your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

const styles = {
  root: {

  fontFamily:
    "'DM Sans', sans-serif",

  minHeight: "100vh",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  background: "#f8fafc",

  padding: "24px",

  position: "relative",

  overflow: "hidden",

  backgroundImage:
  `
  radial-gradient(circle at 20% 20%, rgba(37,99,235,0.08) 0, transparent 220px),

  radial-gradient(circle at 80% 30%, rgba(168,85,247,0.08) 0, transparent 220px),

  radial-gradient(circle at 40% 80%, rgba(16,185,129,0.08) 0, transparent 220px)
  `,

},

  card: {
    width: "100%",
    maxWidth: "900px",
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
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "#185FA5",
    opacity: 0.35,
    filter: "blur(60px)",
    top: "-60px",
    right: "-40px",
  },

  orb2: {
    position: "absolute",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "#0F6E56",
    opacity: 0.25,
    filter: "blur(60px)",
    bottom: "40px",
    left: "-30px",
  },

  orb3: {
    position: "absolute",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#3C3489",
    opacity: 0.3,
    filter: "blur(60px)",
    bottom: "160px",
    right: "20px",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    zIndex: 1,
  },

  logoIcon: {
    width: "32px",
    height: "32px",
    background: "#185FA5",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logoName: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "18px",
    fontWeight: 700,
    color: "#fff",
  },

  hero: {
    zIndex: 1,
  },

  tagline: {
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "0.12em",
    color: "#5DCAA5",
    textTransform: "uppercase",
    marginBottom: "16px",
  },

  headline: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "34px",
    fontWeight: 800,
    lineHeight: 1.15,
    color: "#fff",
    marginBottom: "16px",
  },

  headlineAccent: {
    color: "#378ADD",
  },

  sub: {
    fontSize: "16px",
    color: "#888780",
    lineHeight: 1.6,
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
    padding: "48px 44px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#fff",
  },

  formHeader: {
    marginBottom: "28px",
  },

  welcome: {
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#888780",
    marginBottom: "8px",
  },

  formTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "28px",
    fontWeight: 700,
    color: "#0a0a0f",
  },

  divider: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px",
  },

  dividerLine: {
    flex: 1,
    height: "1px",
    background: "#e5e5e5",
  },

  dividerText: {
    fontSize: "13px",
    color: "#888780",
    whiteSpace: "nowrap",
  },

  field: {
    marginBottom: "18px",
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

  inputWrap: {
    position: "relative",
  },

  inputIcon: {
    position: "absolute",
    left: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#888780",
    fontSize: "16px",
    pointerEvents: "none",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "13px 14px 13px 40px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    background: "#f9f9f9",
    border: "1px solid #e5e5e5",
    borderRadius: "8px",
    color: "#0a0a0f",
    outline: "none",
  },

  forgot: {
    fontSize: "13px",
    color: "#185FA5",
    textAlign: "right",
    display: "block",
    marginTop: "6px",
    textDecoration: "none",
  },

  submitBtn: {
    width: "100%",
    marginTop: "24px",
    padding: "14px",
    background: "#0a0a0f",
    color: "#fff",
    fontFamily: "'Syne', sans-serif",
    fontSize: "17px",
    fontWeight: 600,
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  registerText: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "15px",
    color: "#888780",
  },

  registerLink: {
    color: "#185FA5",
    textDecoration: "none",
    fontWeight: 500,
  },
  floating1: {

  position: "absolute",

  top: "12%",

  left: "8%",

  width: "72px",

  height: "72px",

  borderRadius: "50%",

  background:
    "url('https://i.pravatar.cc/100?img=12') center/cover",

  border: "4px solid white",

  boxShadow:
    "0 10px 30px rgba(0,0,0,0.08)",

},

floating2: {

  position: "absolute",

  bottom: "12%",

  left: "14%",

  width: "58px",

  height: "58px",

  borderRadius: "50%",

  background:
    "url('https://i.pravatar.cc/100?img=33') center/cover",

  border: "4px solid white",

},

floating3: {

  position: "absolute",

  top: "20%",

  right: "10%",

  width: "64px",

  height: "64px",

  borderRadius: "50%",

  background:
    "url('https://i.pravatar.cc/100?img=41') center/cover",

  border: "4px solid white",

},

floating4: {

  position: "absolute",

  bottom: "18%",

  right: "14%",

  width: "52px",

  height: "52px",

  borderRadius: "50%",

  background:
    "url('https://i.pravatar.cc/100?img=18') center/cover",

  border: "4px solid white",

},
};

export default function Login() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState({

      email: "",

      password: ""

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      setError("");

      const { data } =
        await API.post(

          "/auth/login",

          formData

        );

      dispatch(

        setCredentials({

          user: data.user,

          token: data.token,

        })

      );

      if (
        data.user.role ===
        "student"
      ) {

        navigate("/student");

      }

      else if (
        data.user.role ===
        "recruiter"
      ) {

        navigate("/recruiter");

      }

      else if (
        data.user.role ===
        "admin"
      ) {

        navigate("/admin");

      }


    } catch (error) {

      console.log(error);

      setError(

        error.response?.data
          ?.message ||

        "Login failed"

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div style={styles.root}>
      <div style={styles.floating1}></div>

      <div style={styles.floating2}></div>

      <div style={styles.floating3}></div>

      <div style={styles.floating4}></div>

      <svg
  style={{

    position: "absolute",

    inset: 0,

    width: "100%",

    height: "100%",

    pointerEvents: "none",

    zIndex: 0,

  }}
>

  <line
    x1="180"
    y1="140"
    x2="420"
    y2="240"
    stroke="rgba(37,99,235,0.18)"
    strokeWidth="2"
  />

  <line
    x1="170"
    y1="240"
    x2="250"
    y2="750"
    stroke="rgba(37,99,235,0.18)"
    strokeWidth="2"
  />

  <line
    x1="2100"
    y1="180"
    x2="1500"
    y2="420"
    stroke="rgba(37,99,235,0.18)"
    strokeWidth="2"
  />

  <line
    x1="1500"
    y1="420"
    x2="1900"
    y2="1000"
    stroke="rgba(37,99,235,0.18)"
    strokeWidth="2"
  />

</svg>

      <div style={styles.card}>

        <div style={styles.left}>

          <div style={styles.orb1} />

          <div style={styles.orb2} />

          <div style={styles.orb3} />

          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              </svg>
            </div>
            <span style={styles.logoName}>JobPortal</span>
          </div>

          <div style={styles.hero}>

            <p style={styles.tagline}>
              AI-Powered Recruiting
            </p>

            <h1 style={styles.headline}>

              Find your{" "}

              <span
                style={
                  styles.headlineAccent
                }
              >
                dream
              </span>{" "}

              job, faster.

            </h1>

            <p style={styles.sub}>

              Connect with top employers using intelligent matching that understands your skills, not just keywords.

            </p>

          </div>

          <div style={styles.stats}>

            <div>
              <div style={styles.statVal}>
                48K+
              </div>

              <div style={styles.statLbl}>
                Live roles
              </div>
            </div>

            <div>
              <div style={styles.statVal}>
                12K
              </div>

              <div style={styles.statLbl}>
                Companies
              </div>
            </div>

            <div>
              <div style={styles.statVal}>
                94%
              </div>

              <div style={styles.statLbl}>
                Match rate
              </div>
            </div>

          </div>

        </div>

        <div style={styles.right}>

          <div style={styles.formHeader}>

            <p style={styles.welcome}>
              Welcome back
            </p>

            <h2 style={styles.formTitle}>
              Sign in to continue
            </h2>

          </div>

          <div style={styles.divider}>

            <div style={styles.dividerLine} />

            <span
              style={styles.dividerText}
            >
              Login with Email
            </span>

            <div style={styles.dividerLine} />

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

              <label
                htmlFor="email"
                style={styles.label}
              >
                Email
              </label>

              <div style={styles.inputWrap}>

                <input
                  style={styles.input}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div style={styles.field}>

              <label
                htmlFor="password"
                style={styles.label}
              >
                Password
              </label>

              <div style={styles.inputWrap}>

                <input
                  style={styles.input}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                />

              </div>

              <Link
                to="/forgot-password"
                style={styles.forgot}
              >
                Forgot password?
              </Link>

            </div>

            <button
              type="submit"
              style={styles.submitBtn}
            >

              {
                loading
                  ? "Signing In..."
                  : "Sign In"
              }

            </button>

          </form>

          <p style={styles.registerText}>

            No account yet?{" "}

            <Link
              to="/register"
              style={styles.registerLink}
            >
              Register here
            </Link>

          </p>

        </div>

      </div>

    </div>

  );
}