import Navbar
from "../../components/layout/Navbar";

import {
  useSelector
} from "react-redux";

import {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import API
from "../../api/axios";

export default function
StudentDashboard() {

  const [jobs, setJobs] =
  useState([]);

  const navigate =
  useNavigate();
const [applications,
setApplications] =
  useState([]);

const [resumeLoading,
setResumeLoading] =
  useState(false);
  

  const { user } =
    useSelector(
      (state) => state.auth
    );

    useEffect(() => {

  fetchJobs();

  fetchApplications();

}, []);

const fetchJobs =
async () => {

  try {

    const { data } =
      await API.get("/jobs");

    setJobs(data.jobs);

  } catch (error) {

    console.log(error);

  }

};

const fetchApplications =
async () => {

  try {

    const token =
      localStorage.getItem(
        "token"
      );

    const { data } =
      await API.get(

        "/applications/my-applications",

        {

          headers: {

            Authorization:
              `Bearer ${token}`,

          },

        }

      );
      console.log(data);

    setApplications(
      data.applications
    );

  } catch (error) {

    console.log(error);

  }

};

const handleResumeUpload =
async (e) => {

  try {

    setResumeLoading(true);

    const file =
      e.target.files[0];

    const formData =
      new FormData();

    formData.append(
      "resume",
      file
    );

    const token =
      localStorage.getItem(
        "token"
      );

    const { data } =
      await API.post(

        "/user/upload-resume",

        formData,

        {

          headers: {

            Authorization:
              `Bearer ${token}`,

            "Content-Type":
              "multipart/form-data",

          },

        }

      );

    alert(
      "Resume uploaded successfully"
    );

    console.log(data);

  } catch (error) {

    console.log(error);

    alert(
      "Resume upload failed"
    );

  } finally {

    setResumeLoading(false);

  }

};

  return (

    <div
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >

      <Navbar />

      <div
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          padding: "40px 30px",
        }}
      >

        {/* TOP */}

        <div
          style={{
            marginBottom: "35px",
          }}
        >

          <h1
            style={{
              fontSize: "52px",
              fontWeight: "800",
              marginBottom: "12px",
              color: "#0f172a",
            }}
          >

            Welcome back,{" "}

            <span
              style={{
                color: "#2563eb",
              }}
            >
              {user?.name}
            </span>

          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px",
            }}
          >

            Track applications,
            explore jobs and
            grow your career.

          </p>

        </div>

        {/* GRID */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "320px 1fr",
            gap: "28px",
          }}
        >

          {/* LEFT SIDEBAR */}

          <div
            style={{
              display: "flex",
              flexDirection:
                "column",
              gap: "24px",
            }}
          >

            {/* PROFILE CARD */}

            <div
              style={{
                background: "white",
                borderRadius: "28px",
                padding: "28px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >

              <div
                style={{
                  display: "flex",
                  flexDirection:
                    "column",
                  alignItems:
                    "center",
                }}
              >

                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius:
                      "50%",
                    background:
                      "#2563eb",
                    color: "white",
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    fontSize: "34px",
                    fontWeight: "700",
                    marginBottom:
                      "18px",
                  }}
                >

                  {
                    user?.name
                      ?.charAt(0)
                      ?.toUpperCase()
                  }

                </div>

                <h2
                  style={{
                    margin: 0,
                    fontSize: "26px",
                    color: "#0f172a",
                  }}
                >
                  {user?.name}
                </h2>

                <p
                  style={{
                    color: "#64748b",
                    marginTop: "8px",
                  }}
                >
                  {user?.email}
                </p>

                <label
  style={{

    marginTop: "20px",

    border: "none",

    background:
      "#2563eb",

    color: "white",

    padding:
      "12px 22px",

    borderRadius:
      "14px",

    fontWeight:
      "600",

    cursor:
      "pointer",

    display:
      "inline-block",

  }}
>

  {
    resumeLoading

      ? "Uploading..."

      : user?.resume

      ? "Update Resume"

      : "Upload Resume"
  }

  <input
    type="file"

    accept=".pdf"

    hidden

    onChange={
      handleResumeUpload
    }
  />

</label>

              </div>

            </div>

            {/* QUICK STATS */}

            <div
              style={{
                background: "white",
                borderRadius: "28px",
                padding: "28px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >

              <h3
                style={{
                  marginTop: 0,
                  marginBottom:
                    "22px",
                  fontSize: "24px",
                  color: "#0f172a",
                }}
              >
                Stats
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection:
                    "column",
                  gap: "20px",
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
                    Applied Jobs
                  </p>

                  <h2
                    style={{
                      margin:
                        "6px 0 0",
                      fontSize:
                        "34px",
                      color:
                        "#2563eb",
                    }}
                  >
                    {applications.length}
                  </h2>

                </div>

                <div>

                  <p
                    style={{
                      margin: 0,
                      color:
                        "#64748b",
                    }}
                  >
                    Saved Jobs
                  </p>

                  <h2
                    style={{
                      margin:
                        "6px 0 0",
                      fontSize:
                        "34px",
                      color:
                        "#2563eb",
                    }}
                  >
                    {jobs.length}
                  </h2>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div
            style={{
              display: "flex",
              flexDirection:
                "column",
              gap: "28px",
            }}
          >

            {/* RECENT APPLICATIONS */}

            <div
  style={{

    marginTop: "40px",

  }}
>

  <div
    style={{

      display: "flex",

      justifyContent:
        "space-between",

      alignItems:
        "center",

      marginBottom:
        "24px",

    }}
  >

    <h2
      style={{

        fontSize: "32px",

        color: "#0f172a",

      }}
    >

      Applied Jobs

    </h2>

  </div>

  {

    applications.length > 0

    ? (

      <div
        style={{

          display: "grid",

          gap: "22px",

        }}
      >

        {

          applications.filter(
  (app) => app.job
).map(
            (app) => (

              <div

                key={app._id}

                style={{

                  background:
                    "white",

                  borderRadius:
                    "24px",

                  padding:
                    "28px",

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

                  <h3
                    style={{

                      margin: 0,

                      color:
                        "#0f172a",

                      fontSize:
                        "24px",

                    }}
                  >

                    {
                      app?.job
                      ?.title
                    }

                  </h3>

                  <p
                    style={{

                      color:
                        "#64748b",

                      marginTop:
                        "10px",

                    }}
                  >

                    {
                      app?.job
                      ?.company
                      ?.name
                    }

                    {" • "}

                    {
                      app?.job
                      ?.location
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

                      {
                        app?.job
                        ?.jobType
                      }

                    </span>

                    <span
                      style={{

                        background:
                          "#ecfeff",

                        color:
                          "#0891b2",

                        padding:
                          "8px 14px",

                        borderRadius:
                          "999px",

                        fontWeight:
                          "600",

                      }}
                    >

                      ₹ {
                        app?.job
                        ?.salary
                      }

                    </span>

                  </div>

                </div>

                <div
                  style={{

                    textAlign:
                      "right",

                  }}
                >

                  <span
                    style={{

                      background:

                        app?.status ===
                        "accepted"

                        ? "#dcfce7"

                        : app?.status ===
                          "rejected"

                        ? "#fee2e2"

                        : "#fef9c3",

                      color:

                        app?.status ===
                        "accepted"

                        ? "#15803d"

                        : app?.status ===
                          "rejected"

                        ? "#dc2626"

                        : "#ca8a04",

                      padding:
                        "10px 16px",

                      borderRadius:
                        "999px",

                      fontWeight:
                        "700",

                      textTransform:
                        "capitalize",

                    }}
                  >

                    {
                      app?.status
                    }

                  </span>

                  <p
                    style={{

                      marginTop:
                        "16px",

                      color:
                        "#64748b",

                    }}
                  >

                    Applied on

                  </p>

                  <p
                    style={{

                      color:
                        "#0f172a",

                      fontWeight:
                        "600",

                    }}
                  >

                    {

                      new Date(
                        app.createdAt
                      )
                      .toLocaleDateString()

                    }

                  </p>

                </div>

              </div>

            )
          )

        }

      </div>

    ) : (

      <div
        style={{

          background:
            "white",

          padding:
            "60px",

          borderRadius:
            "24px",

          textAlign:
            "center",

        }}
      >

        <h3
          style={{
            color: "#0f172a",
          }}
        >

          No applications yet

        </h3>

        <p
          style={{
            color: "#64748b",
          }}
        >

          Start applying to jobs

        </p>

      </div>

    )

  }

</div>

            {/* RECOMMENDED */}

            <div
              style={{
                background: "white",
                borderRadius: "28px",
                padding: "28px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >

              <h2
                style={{
                  marginTop: 0,
                  marginBottom:
                    "24px",
                  fontSize: "30px",
                  color: "#0f172a",
                }}
              >
                Recommended Jobs
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(260px,1fr))",
                  gap: "22px",
                }}
              >
                {

                jobs.slice(0,4).map(
  (job) => (

    <div
      key={job._id}

      style={{

        border:
          "1px solid #e2e8f0",

        borderRadius:
          "22px",

        padding:
          "22px",

      }}
    >

      <div
        style={{
          fontSize:
            "42px",
          marginBottom:
            "14px",
        }}
      >
        🚀
      </div>

      <h3
        style={{
          margin:
            "0 0 10px",
          color:
            "#0f172a",
        }}
      >

        {job.title}

      </h3>

      <p
        style={{
          color:
            "#64748b",
          lineHeight:
            "1.7",
        }}
      >

        {
          job.description
          ?.slice(0,80)
        }...

      </p>

      <button
        style={{

          marginTop:
            "18px",

          width: "100%",

          border:
            "none",

          background:
            "#2563eb",

          color:
            "white",

          padding:
            "12px",

          borderRadius:
            "14px",

          fontWeight:
            "600",

          cursor:
            "pointer",

        }}
         onClick={() =>
      navigate(
        `/jobs/${job._id}`
      )
    }
      >
        Apply Now
      </button>

    </div>

  )
)
}
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}