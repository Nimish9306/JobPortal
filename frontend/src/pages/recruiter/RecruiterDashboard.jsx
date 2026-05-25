import {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import Navbar
from "../../components/layout/Navbar";

import Footer
from "../../components/layout/Footer";

import API
from "../../api/axios";

export default function
RecruiterDashboard() {

  const navigate =
    useNavigate();

  const [jobs, setJobs] =
    useState([]);

  const [loading,
  setLoading] =
    useState(true);

  useEffect(() => {

    fetchJobs();

  }, []);

  const fetchJobs =
  async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const { data } =
        await API.get(

          "/jobs/recruiter/jobs",

          {

            headers: {

              Authorization:
                `Bearer ${token}`,

            },

          }

        );

      setJobs(data.jobs);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const deleteJob =
  async (id) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await API.delete(

        `/jobs/${id}`,

        {

          headers: {

            Authorization:
              `Bearer ${token}`,

          },

        }

      );

      setJobs(

        jobs.filter(
          (job) =>
            job._id !== id
        )

      );

    } catch (error) {

      console.log(error);

      alert(
        "Delete failed"
      );

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
            "24px",

          fontWeight:
            "700",

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
            "1400px",

          margin:
            "0 auto",

          padding:
            "40px 30px",

        }}
      >

        {/* TOP */}

        <div
          style={{

            display:
              "flex",

            justifyContent:
              "space-between",

            alignItems:
              "center",

            marginBottom:
              "40px",

          }}
        >

          <div>

            <h1
              style={{

                margin: 0,

                fontSize:
                  "46px",

                color:
                  "#0f172a",

              }}
            >

              Recruiter Dashboard

            </h1>

            <p
              style={{

                color:
                  "#64748b",

                marginTop:
                  "10px",

                fontSize:
                  "18px",

              }}
            >

              Manage jobs and applicants

            </p>

          </div>

          <button

            onClick={() =>
              navigate(
                "/recruiter/create-job"
              )
            }

            style={{

              border:
                "none",

              background:
                "#2563eb",

              color:
                "white",

              padding:
                "16px 28px",

              borderRadius:
                "18px",

              fontWeight:
                "700",

              fontSize:
                "16px",

              cursor:
                "pointer",

              boxShadow:
                "0 10px 25px rgba(37,99,235,0.3)",

            }}
          >

            + Create Job

          </button>

        </div>

        {/* STATS */}

        <div
          style={{

            display:
              "grid",

            gridTemplateColumns:
              "repeat(4,1fr)",

            gap:
              "24px",

            marginBottom:
              "40px",

          }}
        >

          <StatCard
            title="Total Jobs"
            value={jobs.length}
            color="#2563eb"
          />

          <StatCard
            title="Active Jobs"
            value={jobs.length}
            color="#16a34a"
          />

          <StatCard
            title="Applications"
            value={
              jobs.reduce(

                (acc, job) =>

                  acc +
                  (
                    job?.applicantsCount || 0
                  ),

                0

              )
            }
            color="#ea580c"
          />

          <StatCard
            title="Companies"
            value="1"
            color="#7c3aed"
          />

        </div>

        {/* JOBS */}

        <div
          style={{

            display:
              "grid",

            gap:
              "24px",

          }}
        >

          {

            jobs.length > 0

            ? (

              jobs.map(
                (job) => (

                  <div

                    key={job._id}

                    style={{

                      background:
                        "white",

                      borderRadius:
                        "30px",

                      padding:
                        "32px",

                      display:
                        "flex",

                      justifyContent:
                        "space-between",

                      alignItems:
                        "center",

                      boxShadow:
                        "0 10px 30px rgba(0,0,0,0.05)",

                    }}
                  >

                    <div>

                      <h2
                        style={{

                          margin: 0,

                          color:
                            "#0f172a",

                          fontSize:
                            "30px",

                        }}
                      >

                        {job.title}

                      </h2>

                      <p
                        style={{

                          color:
                            "#64748b",

                          marginTop:
                            "12px",

                        }}
                      >

                        {
                          job?.location
                        }

                        {" • "}

                        {
                          job?.jobType
                        }

                      </p>

                      <div
                        style={{

                          display:
                            "flex",

                          gap:
                            "14px",

                          marginTop:
                            "18px",

                        }}
                      >

                        <span
                          style={{

                            background:
                              "#dbeafe",

                            color:
                              "#2563eb",

                            padding:
                              "8px 14px",

                            borderRadius:
                              "999px",

                            fontWeight:
                              "600",

                          }}
                        >

                          ₹ {
                            job.salary
                          }

                        </span>

                        <span
                          style={{

                            background:
                              "#dcfce7",

                            color:
                              "#16a34a",

                            padding:
                              "8px 14px",

                            borderRadius:
                              "999px",

                            fontWeight:
                              "600",

                          }}
                        >

                          {

                            job?.applicantsCount|| 0

                          }

                          {" "}Applicants

                        </span>

                      </div>

                    </div>

                    {/* ACTIONS */}

                    <div
                      style={{

                        display:
                          "flex",

                        gap:
                          "14px",

                      }}
                    >

                      <button

                        onClick={() =>
                          navigate(

                            `/recruiter/jobs/${job._id}/applicants`

                          )
                        }

                        style={actionBtn}
                      >

                        Applicants

                      </button>

                      <button

                        onClick={() =>
                          navigate(

                            `/jobs/${job._id}`

                          )
                        }

                        style={actionBtn}
                      >

                        View

                      </button>

                      <button

                        onClick={() =>
                          deleteJob(
                            job._id
                          )
                        }

                        style={{

                          ...actionBtn,

                          background:
                            "#fee2e2",

                          color:
                            "#dc2626",

                        }}
                      >

                        Delete

                      </button>

                    </div>

                  </div>

                )
              )

            ) : (

              <div
                style={{

                  background:
                    "white",

                  borderRadius:
                    "30px",

                  padding:
                    "80px",

                  textAlign:
                    "center",

                }}
              >

                <h2
                  style={{
                    color: "#0f172a",
                  }}
                >

                  No jobs posted yet

                </h2>

              </div>

            )

          }

        </div>

      </section>

      <Footer />

    </div>

  );

}

function StatCard({

  title,

  value,

  color,

}) {

  return (

    <div
      style={{

        background:
          "white",

        borderRadius:
          "28px",

        padding:
          "30px",

        boxShadow:
          "0 10px 30px rgba(0,0,0,0.05)",

      }}
    >

      <p
        style={{

          margin: 0,

          color:
            "#64748b",

          fontWeight:
            "600",

        }}
      >

        {title}

      </p>

      <h2
        style={{

          marginTop:
            "18px",

          marginBottom: 0,

          fontSize:
            "42px",

          color,

        }}
      >

        {value}

      </h2>

    </div>

  );

}

const actionBtn = {

  border: "none",

  background:
    "#eff6ff",

  color:
    "#2563eb",

  padding:
    "12px 18px",

  borderRadius:
    "14px",

  fontWeight:
    "700",

  cursor:
    "pointer",

};