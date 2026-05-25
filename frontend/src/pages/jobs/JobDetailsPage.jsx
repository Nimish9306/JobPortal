import {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  useParams
} from "react-router-dom";

import Navbar
from "../../components/layout/Navbar";

import Footer
from "../../components/layout/Footer";

import API
from "../../api/axios";



export default function
JobDetailsPage() {

  const { id } =
    useParams();

  const [job, setJob] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [applying,
  setApplying] =
    useState(false);

  const [applied,
  setApplied] =
    useState(false);

    const navigate =
  useNavigate();

  const skillStyle = {

  background:
    "#dbeafe",

  color:
    "#1d4ed8",

  padding:
    "12px 18px",

  borderRadius:
    "999px",

  fontWeight:
    "600",

};

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



  if (loading) {

    return (

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "600",
        }}
      >

        Loading...

      </div>

    );

  }

  return (

    <div
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >

      <Navbar />

      <section
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          padding: "40px 30px",
        }}
      >

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 360px",
            gap: "30px",
            alignItems: "start",
          }}
        >

          {/* LEFT */}

          <div
            style={{
              display: "flex",
              flexDirection:
                "column",
              gap: "28px",
            }}
          >

            {/* HERO CARD */}

            <div
              style={{
                background:
"linear-gradient(135deg,#0f172a,#1e3a8a)",
                borderRadius: "30px",
                padding: "36px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginBottom: "24px",
                }}
              >

                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "22px",
                    background:
                      "#dbeafe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent:
                      "center",
                    fontSize: "38px",
                  }}
                >
                  🚀
                </div>

                <div>

                  <h1
                    style={{
                      margin: 0,
                      fontSize: "42px",
                      color: "#cbd5e1",
                    }}
                  >
                    {job?.title}
                  </h1>

                  <p
                    style={{
                      marginTop: "10px",
                      color: "#64748b",
                      fontSize: "18px",
                    }}
                  >

                    {
                      job?.name
                    } • {

                      job?.location

                    }

                  </p>

                </div>

              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                }}
              >

                <span
                  style={{
                    background:
                      "#eff6ff",
                    color: "#2563eb",
                    padding:
                      "10px 16px",
                    borderRadius:
                      "999px",
                    fontWeight:
                      "600",
                  }}
                >
                  {job?.jobType}
                </span>

                <span
                  style={{
                    background:
                      "#ecfeff",
                    color: "#0891b2",
                    padding:
                      "10px 16px",
                    borderRadius:
                      "999px",
                    fontWeight:
                      "600",
                  }}
                >
                  ₹ {job?.salary}
                </span>

              </div>

            </div>

            {/* DESCRIPTION */}

            <div
              style={{
                background: "white",
                borderRadius: "30px",
                padding: "36px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >

              <h2
                style={{
                  marginTop: 0,
                  marginBottom:
                    "24px",
                  color: "#0f172a",
                }}
              >
                Job Description
              </h2>

              <p
                style={{
                  lineHeight: "2",
                  color: "#475569",
                  fontSize: "16px",
                }}
              >

                {job?.description}

              </p>

            </div>
            <div
  style={{

    background: "white",

    borderRadius: "30px",

    padding: "36px",

    boxShadow:
      "0 10px 30px rgba(0,0,0,0.05)",

  }}
>

  <h2
    style={{

      marginTop: 0,

      marginBottom: "24px",

      color: "#0f172a",

    }}
  >

    About Company

  </h2>

  <p
    style={{

      color: "#475569",

      lineHeight: "2",

    }}
  >

    {
      job?.company?.description ||

      "No company description available."
    }

  </p>

</div>

            {/* REQUIREMENTS */}

            <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
  }}
>

{
  job?.requirements?.length > 0

  ? (

    job.requirements.map(
      (skill, index) => (

        <span
          key={index}

          style={{

            background:
              "#dbeafe",

            color:
              "#1d4ed8",

            padding:
              "12px 18px",

            borderRadius:
              "999px",

            fontWeight:
              "600",

          }}
        >

          {skill}

        </span>

      )
    )

  ) : (

    <>
      <span style={skillStyle}>
        React
      </span>

      <span style={skillStyle}>
        JavaScript
      </span>

      <span style={skillStyle}>
        Tailwind CSS
      </span>

      <span style={skillStyle}>
        REST API
      </span>

      <span style={skillStyle}>
        Git
      </span>
    </>

  )

}

</div>

        <div
  style={{

    background:
      "linear-gradient(135deg,#2563eb,#1d4ed8)",

    borderRadius:
      "30px",

    padding:
      "40px",

    color:
      "white",

    textAlign:
      "center",

  }}
>

  <h2
    style={{
      marginTop: 0,
      fontSize: "36px",
    }}
  >

    Ready to apply?

  </h2>

  <p
    style={{
      color: "#dbeafe",
      marginBottom: "30px",
    }}
  >

    Join thousands of candidates
    applying daily.

  </p>

  <button

    onClick={() =>
      navigate(
        `/jobs/${id}/apply`
      )
    }

    style={{

      border: "none",

      background: "white",

      color: "#2563eb",

      padding:
        "16px 32px",

      borderRadius:
        "16px",

      fontWeight:
        "700",

      fontSize:
        "16px",

      cursor:
        "pointer",

    }}
  >

    Apply Now

  </button>

</div>

          </div>

          {/* RIGHT SIDEBAR */}

          <div
            style={{
              position: "sticky",
              top: "100px",
            }}
          >

            <div
              style={{
                background: "white",
                borderRadius: "30px",
                padding: "32px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >

              <button
                              onClick={() =>
                                  navigate(
                                      `/jobs/${id}/apply`
                                  )
                              }

                disabled={
                  applying ||
                  applied
                }

                style={{

                  width: "100%",

                  border: "none",

                  background:
                    applied

                    ? "#16a34a"

                    : "#2563eb",

                  color: "white",

                  padding:
                    "16px",

                  borderRadius:
                    "16px",

                  fontWeight:
                    "700",

                  fontSize:
                    "16px",

                  cursor:
                    "pointer",

                  marginBottom:
                    "26px",

                }}
              >

                {
                  applying

                  ? "Applying..."

                  : applied

                  ? "Applied"

                  : "Apply Now"
                }

              </button>

              <div
                style={{
                  display: "flex",
                  flexDirection:
                    "column",
                  gap: "18px",
                }}
              >

                <div>

                  <p
                    style={{
                      margin: 0,
                      color:
                        "#64748b",
                    }}
                  >
                    Location
                  </p>

                  <h3
                    style={{
                      marginTop: "8px",
                      color:
                        "#0f172a",
                    }}
                  >
                    {job?.location}
                  </h3>

                </div>

                <div>

                  <p
                    style={{
                      margin: 0,
                      color:
                        "#64748b",
                    }}
                  >
                    Job Type
                  </p>

                  <h3
                    style={{
                      marginTop: "8px",
                      color:
                        "#0f172a",
                    }}
                  >
                    {job?.jobType}
                  </h3>

                </div>

                <div>

                  <p
                    style={{
                      margin: 0,
                      color:
                        "#64748b",
                    }}
                  >
                    Salary
                  </p>

                  <h3
                    style={{
                      marginTop: "8px",
                      color:
                        "#0f172a",
                    }}
                  >
                    ₹ {job?.salary}
                  </h3>

                </div>

                <div>

  <p
    style={{
      margin: 0,
      color: "#64748b",
    }}
  >
    Experience
  </p>

  <h3
    style={{
      marginTop: "8px",
      color: "#0f172a",
    }}
  >
    Fresher Friendly
  </h3>

</div>

<div>

  <p
    style={{
      margin: 0,
      color: "#64748b",
    }}
  >
    Applicants
  </p>

  <h3
    style={{
      marginTop: "8px",
      color: "#0f172a",
    }}
  >
    120+
  </h3>

</div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>

  );

}