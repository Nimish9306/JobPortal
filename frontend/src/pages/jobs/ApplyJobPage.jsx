import {
  useEffect,
  useState
} from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import {
  useSelector
} from "react-redux";

import Navbar
from "../../components/layout/Navbar";

import Footer
from "../../components/layout/Footer";

import API
from "../../api/axios";

export default function
ApplyJobPage() {

  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const { user } =
    useSelector(
      (state) => state.auth
    );

  const [job, setJob] =
    useState(null);

  const [loading,
  setLoading] =
    useState(true);

  const [submitting,
  setSubmitting] =
    useState(false);

  const [formData,
  setFormData] =
    useState({

      firstName:
        user?.name
        ?.split(" ")[0] || "",

      lastName:
        user?.name
        ?.split(" ")[1] || "",

      email:
        user?.email || "",

      phone: "",

      github: "",

      linkedin: "",

      portfolio: "",

      coverLetter: "",

    });

  useEffect(() => {

    fetchJob();

  }, []);

  const fetchJob =
  async () => {

    try {

      const { data } =
        await API.get(
          `/jobs/${id}`
        );

      setJob(data.job);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const handleChange =
  (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      setSubmitting(true);

      const token =
        localStorage.getItem(
          "token"
        );

      await API.post(

        `/applications/apply/${id}`,

        formData,

        {

          headers: {

            Authorization:
              `Bearer ${token}`,

          },

        }

      );

      alert(
        "Application submitted successfully"
      );

      navigate(
        "/student"
      );

    } catch (error) {

      console.log(error);

      alert(

        error.response
        ?.data
        ?.message ||

        "Application failed"

      );

    } finally {

      setSubmitting(false);

    }

  };

  if (loading) {

    return (

      <div
        style={{

          minHeight:
            "100vh",

          display:
            "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          fontSize:
            "22px",

          fontWeight:
            "600",

        }}
      >

        Loading...

      </div>

    );

  }

  return (

    <div
      style={{

        background:
          "#f8fafc",

        minHeight:
          "100vh",

      }}
    >

      <Navbar />

      <section
        style={{

          maxWidth:
            "1200px",

          margin:
            "0 auto",

          padding:
            "40px 25px",

        }}
      >

        {/* TOP */}

        <div
          style={{

            background:
              "white",

            borderRadius:
              "28px",

            padding:
              "32px",

            marginBottom:
              "30px",

            boxShadow:
              "0 10px 30px rgba(0,0,0,0.05)",

          }}
        >

          <h1
            style={{

              margin: 0,

              fontSize:
                "42px",

              color:
                "#0f172a",

              marginBottom:
                "14px",

            }}
          >

            Apply For Job

          </h1>

          <p
            style={{

              color:
                "#64748b",

              fontSize:
                "18px",

            }}
          >

            {
              job?.title
            }

            {" "}at{" "}

            {
              job?.company
              ?.name
            }

          </p>

        </div>

        <form
          onSubmit={
            handleSubmit
          }
        >

          {/* RESUME */}

          <div
            style={{

              background:
                "white",

              borderRadius:
                "28px",

              padding:
                "32px",

              marginBottom:
                "30px",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.05)",

            }}
          >

            <h2
              style={{

                marginTop: 0,

                marginBottom:
                  "24px",

                color:
                  "#0f172a",

              }}
            >

              Resume

            </h2>

            <div
              style={{

                border:
                  "2px dashed #93c5fd",

                background:
                  "#eff6ff",

                borderRadius:
                  "22px",

                padding:
                  "28px",

              }}
            >

              <p
                style={{

                  margin: 0,

                  color:
                    "#1e40af",

                  fontWeight:
                    "600",

                  fontSize:
                    "18px",

                }}
              >

                {
                  user?.resume

                  ? "Resume uploaded successfully"

                  : "No resume uploaded"
                }

              </p>

              <p
                style={{

                  marginTop:
                    "10px",

                  color:
                    "#64748b",

                }}
              >

                PDF Resume

              </p>

            </div>

          </div>

          {/* BASIC DETAILS */}

          <div
            style={{

              background:
                "white",

              borderRadius:
                "28px",

              padding:
                "32px",

              marginBottom:
                "30px",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.05)",

            }}
          >

            <h2
              style={{

                marginTop: 0,

                marginBottom:
                  "30px",

                color:
                  "#0f172a",

              }}
            >

              Basic Details

            </h2>

            <div
              style={{

                display:
                  "grid",

                gridTemplateColumns:
                  "1fr 1fr",

                gap:
                  "22px",

              }}
            >

              <input

                type="text"

                name="firstName"

                value={
                  formData.firstName
                }

                onChange={
                  handleChange
                }

                placeholder="First Name"

                style={inputStyle}

              />

              <input

                type="text"

                name="lastName"

                value={
                  formData.lastName
                }

                onChange={
                  handleChange
                }

                placeholder="Last Name"

                style={inputStyle}

              />

              <input

                type="email"

                name="email"

                value={
                  formData.email
                }

                onChange={
                  handleChange
                }

                placeholder="Email"

                style={inputStyle}

              />

              <input

                type="text"

                name="phone"

                value={
                  formData.phone
                }

                onChange={
                  handleChange
                }

                placeholder="Phone Number"

                style={inputStyle}

              />

            </div>

          </div>

          {/* LINKS */}

          <div
            style={{

              background:
                "white",

              borderRadius:
                "28px",

              padding:
                "32px",

              marginBottom:
                "30px",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.05)",

            }}
          >

            <h2
              style={{

                marginTop: 0,

                marginBottom:
                  "30px",

                color:
                  "#0f172a",

              }}
            >

              Professional Links

            </h2>

            <div
              style={{

                display:
                  "grid",

                gap:
                  "22px",

              }}
            >

              <input

                type="text"

                name="github"

                value={
                  formData.github
                }

                onChange={
                  handleChange
                }

                placeholder="GitHub Profile"

                style={inputStyle}

              />

              <input

                type="text"

                name="linkedin"

                value={
                  formData.linkedin
                }

                onChange={
                  handleChange
                }

                placeholder="LinkedIn Profile"

                style={inputStyle}

              />

              <input

                type="text"

                name="portfolio"

                value={
                  formData.portfolio
                }

                onChange={
                  handleChange
                }

                placeholder="Portfolio Website"

                style={inputStyle}

              />

            </div>

          </div>

          {/* COVER LETTER */}

          <div
            style={{

              background:
                "white",

              borderRadius:
                "28px",

              padding:
                "32px",

              marginBottom:
                "30px",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.05)",

            }}
          >

            <h2
              style={{

                marginTop: 0,

                marginBottom:
                  "30px",

                color:
                  "#0f172a",

              }}
            >

              Cover Letter

            </h2>

            <textarea

              name="coverLetter"

              value={
                formData.coverLetter
              }

              onChange={
                handleChange
              }

              placeholder="Tell recruiter why you're a good fit..."

              rows="8"

              style={{

                width:
                  "100%",

                border:
                  "1px solid #cbd5e1",

                borderRadius:
                  "18px",

                padding:
                  "18px",

                outline:
                  "none",

                resize:
                  "none",

                fontSize:
                  "16px",

                fontFamily:
                  "inherit",

              }}

            />

          </div>

          {/* SUBMIT */}

          <div
            style={{

              display:
                "flex",

              justifyContent:
                "flex-end",

            }}
          >

            <button
              type="submit"

              disabled={
                submitting
              }

              style={{

                border:
                  "none",

                background:
                  "#2563eb",

                color:
                  "white",

                padding:
                  "18px 42px",

                borderRadius:
                  "18px",

                fontWeight:
                  "700",

                fontSize:
                  "18px",

                cursor:
                  "pointer",

                boxShadow:
                  "0 10px 25px rgba(37,99,235,0.3)",

              }}
            >

              {
                submitting

                ? "Submitting..."

                : "Submit Application"
              }

            </button>

          </div>

        </form>

      </section>

      <Footer />

    </div>

  );

}

const inputStyle = {

  width:
    "100%",

  border:
    "1px solid #cbd5e1",

  borderRadius:
    "18px",

  padding:
    "16px",

  outline:
    "none",

  fontSize:
    "16px",

};