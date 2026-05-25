import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "react-router-dom";

import API
from "../../api/axios";

import Navbar
from "../../components/layout/Navbar";

import Footer
from "../../components/layout/Footer";

export default function
ApplicantsPage() {

  const { id } =
    useParams();

  const [applications,
  setApplications] =
    useState([]);

  const [loading,
  setLoading] =
    useState(true);

  useEffect(() => {

    fetchApplicants();

  }, []);

  const fetchApplicants =
  async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const { data } =
        await API.get(

          `/applications/jobs/${id}/applicants`,

          {

            headers: {

              Authorization:
                `Bearer ${token}`,

            },

          }

        );

      setApplications(
        data.applications
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const updateStatus =
async (id, status) => {

  try {

    const token =
      localStorage.getItem(
        "token"
      );

    await API.put(

      `/applications/${id}/status`,

      { status },

      {

        headers: {

          Authorization:
            `Bearer ${token}`,

        },

      }

    );

    fetchApplicants();

  } catch (error) {

    console.log(error);

  }

};

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
            "40px 24px",

        }}
      >

        <h1
          style={{

            fontSize:
              "42px",

            marginBottom:
              "30px",

          }}
        >

          Applicants

        </h1>

        {

          loading

          ? (

            <p>
              Loading...
            </p>

          )

          : applications.length === 0

          ? (

            <div
              style={{

                background:
                  "white",

                padding:
                  "50px",

                borderRadius:
                  "24px",

              }}
            >

              No applicants yet.

            </div>

          )

          : (

            <div
              style={{

                display:
                  "grid",

                gap:
                  "24px",

              }}
            >

              {

                applications.map(
                  (app) => (

                    <div

                      key={
                        app._id
                      }

                      style={{

                        background:
                          "white",

                        borderRadius:
                          "28px",

                        padding:
                          "28px",

                        display:
                          "flex",

                        justifyContent:
                          "space-between",

                        alignItems:
                          "center",

                        boxShadow:
                          "0 5px 20px rgba(0,0,0,0.05)",

                      }}
                    >

                      {/* LEFT */}

                      <div>

                        <h2
                          style={{

                            margin:
                              0,

                            fontSize:
                              "26px",

                          }}
                        >

                          {

                            app
                            ?.applicant
                            ?.name

                          }

                        </h2>

                        <p
                          style={{

                            color:
                              "#64748b",

                            marginTop:
                              "10px",

                          }}
                        >

                          {

                            app
                            ?.applicant
                            ?.email

                          }

                        </p>

                        <div
                          style={{

                            display:
                              "flex",

                            gap:
                              "10px",

                            flexWrap:
                              "wrap",

                            marginTop:
                              "14px",

                          }}
                        >

                          {

                            app
                            ?.applicant
                            ?.skills

                            ?.map(
                              (skill) => (

                                <span

                                  key={
                                    skill
                                  }

                                  style={{

                                    background:
                                      "#dbeafe",

                                    color:
                                      "#2563eb",

                                    padding:
                                      "8px 14px",

                                    borderRadius:
                                      "999px",

                                    fontSize:
                                      "14px",

                                    fontWeight:
                                      "600",

                                  }}
                                >

                                  {skill}

                                </span>

                              )
                            )

                          }

                        </div>
                                              <div>
                                              {

  app.status === "pending"

  &&

  (

    <div
      style={{

        display: "flex",

        gap: "10px",

        marginTop: "14px",

        justifyContent:
          "flex-end",

      }}
    >

      <button

        onClick={() =>

          updateStatus(

            app._id,

            "accepted"

          )

        }

        style={{

          border: "none",

          background:
            "#22c55e",

          color: "white",

          padding:
            "10px 16px",

          borderRadius:
            "10px",

          cursor: "pointer",

          fontWeight:
            "700",

        }}
      >

        Accept

      </button>

      <button

        onClick={() =>

          updateStatus(

            app._id,

            "rejected"

          )

        }

        style={{

          border: "none",

          background:
            "#ef4444",

          color: "white",

          padding:
            "10px 16px",

          borderRadius:
            "10px",

          cursor: "pointer",

          fontWeight:
            "700",

        }}
      >

        Reject

      </button>

    </div>

  )

}
  

</div>
                      </div>

                      {/* RIGHT */}
                      

                      <div
                        style={{
                          textAlign:
                            "right",
                            display:
                              "flex",
                              flexDirection:
                                "column",
                                justifyContent: "center",
                                alignItems: "center",
                        }}
                        
                      >
                        <div
  style={{

    marginBottom: "14px",

    

    padding: "8px 16px",

    borderRadius: "999px",

    background:

      app.status === "accepted"

      ? "#dcfce7"

      : app.status === "rejected"

      ? "#fee2e2"

      : "#fef3c7",

    color:

      app.status === "accepted"

      ? "#166534"

      : app.status === "rejected"

      ? "#991b1b"

      : "#92400e",

    fontWeight: "700",

    textTransform:
      "capitalize",

  }}
>

  {app.status}

</div>
                        <a

                          href={
                            app
                            ?.applicant
                            ?.resume
                          }

                          target="_blank"

                          rel="noreferrer"

                          style={{

                            display:
                              "inline-block",

                            background:
                              "#2563eb",

                            color:
                              "white",

                            padding:
                              "12px 22px",

                            borderRadius:
                              "14px",

                            textDecoration:
                              "none",

                            fontWeight:
                              "700",

                            marginBottom:
                              "14px",

                          }}
                        >

                          View Resume

                        </a>

    

                        <p
                          style={{

                            color:
                              "#64748b",

                          }}
                        >

                          Applied on

                        </p>

                        <strong>

                          {

                            new Date(
                              app.createdAt
                            )

                            .toLocaleDateString()

                          }

                        </strong>

                      </div>

                    </div>

                  )
                )

              }

            </div>

          )

        }

      </section>

      <Footer />

    </div>

  );

}