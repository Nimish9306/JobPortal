import {
  useEffect,
  useState
} from "react";

import API
from "../../api/axios";

export default function
AdminDashboard() {

  const [stats,
  setStats] =
    useState({});

  const [users,
  setUsers] =
    useState([]);

  const [recruiters,
  setRecruiters] =
    useState([]);

  const [students,
  setStudents] =
    useState([]);

  const [jobs,
  setJobs] =
    useState([]);

  const [applications,
  setApplications] =
    useState([]);

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData =
  async () => {

    try {

      const dashboardRes =
        await API.get(
          "/admin/dashboard"
        );

      const usersRes =
        await API.get(
          "/admin/users"
        );

      const recruitersRes =
        await API.get(
          "/admin/recruiters"
        );

      const studentsRes =
        await API.get(
          "/admin/students"
        );

      const jobsRes =
        await API.get(
          "/admin/recent-jobs"
        );

      const applicationsRes =
        await API.get(
          "/admin/recent-applications"
        );

      
        setStats(
  dashboardRes.data.stats
);
      

      setUsers(
        usersRes.data.users
      );

      setRecruiters(
        recruitersRes.data.recruiters
      );

      setStudents(
        studentsRes.data.students
      );

      setJobs(
        jobsRes.data.jobs
      );

      setApplications(
        applicationsRes.data.applications
      );

    } catch (error) {

      console.log(error);

    }

  };

  const banUser =
  async (id) => {

    try {

      await API.put(
        `/admin/users/${id}/ban`
      );

      fetchData();

    } catch (error) {

      console.log(error);

    }

  };

  const unbanUser =
  async (id) => {

    try {

      await API.put(
        `/admin/users/${id}/unban`
      );

      fetchData();

    } catch (error) {

      console.log(error);

    }

  };

  const deleteJob =
  async (id) => {

    try {

      await API.delete(
        `/admin/jobs/${id}`
      );

      fetchData();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div
      style={{

        minHeight:
          "100vh",

        background:
          "#f8fafc",

        padding:
          "40px",

      }}
    >

      {/* HEADER */}
<div
  style={{

    display: "flex",

    justifyContent:
      "space-between",

    alignItems:
      "center",

    marginBottom:
      "40px",

    flexWrap:
      "wrap",

    gap: "20px",

  }}
>

  <div>

    <h1
      style={{

        fontSize:
          "42px",

        fontWeight:
          "800",

        marginBottom:
          "8px",

      }}
    >

      Admin Dashboard

    </h1>

    <p
      style={{

        color:
          "#64748b",

      }}
    >

      Manage users,
      jobs and platform
      activity

    </p>

  </div>

  <button

    onClick={() => {

      localStorage.clear();

      window.location.href =
        "/login";

    }}

    style={{

      padding:
        "14px 26px",

      border: "none",

      borderRadius:
        "14px",

      background:
        "#ef4444",

      color:
        "white",

      fontWeight:
        "700",

      cursor:
        "pointer",

    }}
  >

    Logout

  </button>

</div>

      {/* STATS */}

      <div
  style={{

    display: "grid",

    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",

    gap: "24px",

    marginBottom:
      "50px",

  }}
>

  {

    [

      ["Users",
      stats.totalUsers],

      ["Recruiters",
      stats.totalRecruiters],

      ["Students",
      stats.totalStudents],

      ["Jobs",
      stats.totalJobs],

      ["Applications",
      stats.totalApplications],

    ].map((item) => (

      <div
        key={item[0]}
        style={{

          background:
            "white",

          padding:
            "28px",

          borderRadius:
            "22px",

          boxShadow:
            "0 8px 24px rgba(0,0,0,0.06)",

          display:
            "flex",

          flexDirection:
            "column",

          gap: "12px",

        }}
      >

        <p
          style={{

            color:
              "#64748b",

            fontWeight:
              "600",

          }}
        >

          {item[0]}

        </p>

        <h1
          style={{

            fontSize:
              "42px",

            fontWeight:
              "800",

          }}
        >

          {item[1] || 0}

        </h1>

      </div>

    ))

  }

</div>

      {/* USERS */}

      <SectionTitle
        title="All Users"
      />

      <div
        style={tableStyle}
      >

        {

          users.map((user) => (

            <div
              key={user._id}
              style={rowStyle}
            >

              <div>

                <h3>
                  {user.name}
                </h3>

                <p>
                  {user.email}
                </p>

              </div>

              <div>

                <p>
                  {user.role}
                </p>

              </div>

              {

                user.isBanned

                ?

                (

                  <button

                    onClick={() =>
                      unbanUser(
                        user._id
                      )
                    }

                    style={unbanBtn}
                  >

                    Unban

                  </button>

                )

                :

                (

                  <button

                    onClick={() =>
                      banUser(
                        user._id
                      )
                    }

                    style={banBtn}
                  >

                    Ban

                  </button>

                )

              }

            </div>

          ))

        }

      </div>

      {/* RECENT JOBS */}

      <SectionTitle
        title="Recent Jobs"
      />

      <div
        style={tableStyle}
      >

        {

          jobs.map((job) => (

            <div
              key={job._id}
              style={rowStyle}
            >

              <div>

                <h3>
                  {job.title}
                </h3>

                <p>

                  {

                    job.company
                    ?.name

                  }

                </p>

              </div>

              <button

                onClick={() =>
                  deleteJob(
                    job._id
                  )
                }

                style={deleteBtn}
              >

                Delete

              </button>

            </div>

          ))

        }

      </div>

      {/* RECENT APPLICATIONS */}

      <SectionTitle
        title="Recent Applications"
      />

      <div
        style={tableStyle}
      >

        {

          applications.map(
            (app) => (

              <div
                key={app._id}
                style={rowStyle}
              >

                <div>

                  <h3>

                    {

                      app.applicant
                      ?.name

                    }

                  </h3>

                  <p>

                    Applied for

                    {" "}

                    {

                      app.job
                      ?.title

                    }

                  </p>

                </div>

                <span
                  style={statusStyle}
                >

                  {
                    app.status
                  }

                </span>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}

function SectionTitle({
  title
}) {

  return (

    <h2
      style={{

        marginTop:
          "50px",

        marginBottom:
          "20px",

        fontSize:
          "30px",

      }}
    >

      {title}

    </h2>

  );

}

const cardStyle = {

  background:
    "white",

  padding:
    "28px",

  borderRadius:
    "22px",

  boxShadow:
    "0 8px 24px rgba(0,0,0,0.06)",

};

const tableStyle = {

  background:
    "white",

  borderRadius:
    "24px",

  padding:
    "24px",

  boxShadow:
    "0 8px 24px rgba(0,0,0,0.05)",

  overflowX:
    "auto",

};

const rowStyle = {

  display:
    "flex",

  justifyContent:
    "space-between",

  alignItems:
    "center",

  gap: "20px",

  padding:
    "22px 0",

  borderBottom:
    "1px solid #e2e8f0",

  flexWrap:
    "wrap",

};

const banBtn = {

  padding:
    "10px 18px",

  border: "none",

  borderRadius:
    "12px",

  background:
    "#facc15",

  fontWeight:
    "700",

  cursor:
    "pointer",

};

const unbanBtn = {

  padding:
    "10px 18px",

  border: "none",

  borderRadius:
    "12px",

  background:
    "#22c55e",

  color:
    "white",

  fontWeight:
    "700",

  cursor:
    "pointer",

};

const deleteBtn = {

  padding:
    "12px 22px",

  border: "none",

  borderRadius:
    "12px",

  background:
    "#ef4444",

  color:
    "white",

  fontWeight:
    "700",

  cursor:
    "pointer",

  width:
    "fit-content",

  minWidth:
    "120px",

};

const statusStyle = {

  padding:
    "10px 18px",

  borderRadius:
    "999px",

  background:
    "#dbeafe",

  color:
    "#2563eb",

  fontWeight:
    "700",

  width:
    "fit-content",

  textTransform:
    "capitalize",

};