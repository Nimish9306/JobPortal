import {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import API
from "../../api/axios";

import Navbar
from "../../components/layout/Navbar";

export default function
JobsPage() {

  const navigate =
    useNavigate();

  const [jobs,
  setJobs] =
    useState([]);

  const [loading,
  setLoading] =
    useState(true);

  const [search,
  setSearch] =
    useState("");

  const [filter,
  setFilter] =
    useState("all");

  useEffect(() => {

    fetchJobs();

  }, []);

  const fetchJobs =
  async () => {

    try {

      const { data } =
        await API.get(
          "/jobs"
        );

      setJobs(
        data.jobs
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const filteredJobs =
    jobs.filter((job) => {

      const matchesSearch =

        job.title
        .toLowerCase()

        .includes(

          search
          .toLowerCase()

        );

      const matchesFilter =

        filter === "all"

        ||

        job.jobType ===
        filter;

      return (
        matchesSearch &&
        matchesFilter
      );

    });

  return (
<div>   
    <Navbar />
    <div
      style={{

        minHeight:
          "100vh",

        background:
          "#f8fafc",

        padding:
          "40px 6%",

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

          gap: "16px",

        }}
      >

        <h1
          style={{

            fontSize:
              "42px",

            fontWeight:
              "800",

            color:
              "#0f172a",

          }}
        >

          Jobs &
          Internships

        </h1>

        <div
          style={{

            display: "flex",

            gap: "14px",

            flexWrap:
              "wrap",

          }}
        >

          <input

            type="text"

            placeholder="Search jobs..."

            value={search}

            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }

            style={{

              padding:
                "14px 18px",

              borderRadius:
                "14px",

              border:
                "1px solid #cbd5e1",

              minWidth:
                "260px",

            }}
          />

          <select

            value={filter}

            onChange={(e) =>
              setFilter(
                e.target.value
              )
            }

            style={{

              padding:
                "14px 18px",

              borderRadius:
                "14px",

              border:
                "1px solid #cbd5e1",

            }}
          >

            <option value="all">

              All

            </option>

            <option value="internship">

              Internship

            </option>

            <option value="full-time">

              Full Time

            </option>

            <option value="part-time">

              Part Time

            </option>

            <option value="remote">

              Remote

            </option>

          </select>

        </div>

      </div>

      {/* JOBS */}

      {

        loading ?

        (

          <h2>
            Loading...
          </h2>

        ) :

        (

          <div
            style={{

              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(340px,1fr))",

              gap: "28px",

            }}
          >

            {

              filteredJobs.map(
                (job) => (

                  <div

                    key={job._id}

                    style={{

                      background:
                        "white",

                      borderRadius:
                        "24px",

                      padding:
                        "28px",

                      boxShadow:
                        "0 10px 30px rgba(0,0,0,0.06)",

                      transition:
                        "0.3s",

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
                          "flex-start",

                        marginBottom:
                          "18px",

                      }}
                    >

                      <div>

                        <h2
                          style={{

                            fontSize:
                              "28px",

                            fontWeight:
                              "700",

                            marginBottom:
                              "10px",

                          }}
                        >

                          {
                            job.title
                          }

                        </h2>

                        <p
                          style={{

                            color:
                              "#475569",

                            fontSize:
                              "16px",

                          }}
                        >

                          {

                            job.company
                            ?.name ||

                            "Company"

                          }

                          {" • "}

                          {
                            job.location
                          }

                        </p>

                      </div>

                      <div
                        style={{

                          width: "60px",

                          height: "60px",

                          borderRadius:
                            "18px",

                          background:
                            "#dbeafe",

                          display:
                            "flex",

                          justifyContent:
                            "center",

                          alignItems:
                            "center",

                          fontSize:
                            "28px",

                        }}
                      >

                        🚀

                      </div>

                    </div>

                    {/* DESCRIPTION */}

                    <p
                      style={{

                        color:
                          "#64748b",

                        lineHeight:
                          "1.7",

                        marginBottom:
                          "24px",

                      }}
                    >

                      {
                        job.description
                        ?.slice(0, 120)
                      }

                      ...

                    </p>

                    {/* TAGS */}

                    <div
                      style={{

                        display:
                          "flex",

                        gap: "12px",

                        flexWrap:
                          "wrap",

                        marginBottom:
                          "24px",

                      }}
                    >

                      <span
                        style={tagStyle}
                      >

                        {
                          job.jobType
                        }

                      </span>

                      <span
                        style={salaryStyle}
                      >

                        ₹
                        {
                          job.salary
                        }

                      </span>

                    </div>

                    {/* BUTTON */}

                    <button

                      onClick={() =>

                        navigate(

                          `/jobs/${job._id}`

                        )

                      }

                      style={btnStyle}
                    >

                      View Details

                    </button>

                  </div>

                )

              )

            }

          </div>

        )

      }

    </div>
</div>
  );

}

const tagStyle = {

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

};

const salaryStyle = {

  padding:
    "10px 18px",

  borderRadius:
    "999px",

  background:
    "#ecfeff",

  color:
    "#0891b2",

  fontWeight:
    "700",

};

const btnStyle = {

  width: "100%",

  padding:
    "16px",

  border: "none",

  borderRadius:
    "16px",

  background:
    "#2563eb",

  color:
    "white",

  fontWeight:
    "700",

  cursor:
    "pointer",

  fontSize:
    "16px",

};