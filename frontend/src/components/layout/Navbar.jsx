import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  logout,
} from "../../features/auth/authSlice";

import { useState }
from "react";

export default function Navbar() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } =
    useSelector(
      (state) => state.auth
    );

  const [search, setSearch] =
    useState("");

  const handleLogout = () => {

    dispatch(logout());

    navigate("/login");

  };

  const handleSearch = (e) => {

    e.preventDefault();

    navigate(
      `/jobs?keyword=${search}`
    );

  };

  return (

    <nav
      style={{

        width: "100%",

        background: "#ffffff",

        borderBottom:
          "1px solid #e5e7eb",

        position: "sticky",

        top: 0,

        zIndex: 999,

      }}
    >

      <div
        style={{

          maxWidth: "1600px",

          margin: "0 auto",

          padding:
            "14px 8px",

          display: "flex",

          alignItems: "center",

          justifyContent:
            "space-between",

           gap: "30px",

        }}
      >

        {/* LOGO */}

        <Link
          to="/"
          style={{

            display: "flex",

            alignItems: "center",

            gap: "3px",

            textDecoration:
              "none",

            minWidth: "170px",

          }}
        >

          <div
            style={{

              width: "42px",

              height: "42px",

              borderRadius: "50%",

              background:
                "#2563eb",

              display: "flex",

              alignItems: "center",

              justifyContent:
                "center",

              color: "white",

              fontWeight: "700",

              fontSize: "18px",
              marginTop: "4px",

            }}
          >
            Job
          </div>

          <h2
            style={{

              margin: 0,

              color: "#0f172a",

              fontSize: "34px",

              fontWeight: "700",

              letterSpacing:
                "-1px",

            }}
          >
            portal
          </h2>

        </Link>

        {/* SEARCH */}

        <form
          onSubmit={handleSearch}
          style={{

            flex: 1,

            display: "flex",

            justifyContent:
              "center",

          }}
        >

          <div
            style={{

              width: "100%",

              maxWidth: "650px",

              position: "relative",

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

                width: "100%",

                padding:
                  "15px 20px 15px 52px",

                borderRadius:
                  "999px",

                border:
                  "1px solid #d1d5db",

                outline: "none",

                fontSize: "15px",

                background:
                  "#f8fafc",

              }}
            />

            <span
              style={{

                position:
                  "absolute",

                left: "20px",

                top: "50%",

                transform:
                  "translateY(-50%)",

                fontSize: "18px",

                color: "#64748b",

              }}
            >
              <img _ngcontent-ng-c3667168809="" width="24" height="20" class="input-icon icon-left ng-star-inserted" src="https://cdn.unstop.com/assets/icons/search.svg" alt="Global Search"></img>
            </span>

          </div>

        </form>

        {/* RIGHT SECTION */}

        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "16px",

            minWidth: "250px",

            justifyContent:
              "flex-end",

          }}
        >

          {
            user ? (

              <>

                <Link
                  to={
                    user.role ===
                    "student"

                      ? "/student"

                      : user.role ===
                        "recruiter"

                      ? "/recruiter"

                      : "/admin"
                  }
                  style={{

                    textDecoration:
                      "none",

                    color:
                      "#334155",

                    fontWeight:
                      "600",

                  }}
                >
                  Dashboard
                </Link>

                <div
                  style={{

                    width: "42px",

                    height: "42px",

                    borderRadius:
                      "50%",

                    background:
                      "#0f172a",

                    color:
                      "white",

                    display: "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    fontWeight:
                      "700",

                  }}
                >

                  {
                    user?.name
                      ?.charAt(0)
                      ?.toUpperCase()
                  }

                </div>

                <button
                  onClick={
                    handleLogout
                  }
                  style={{

                    textDecoration:
                      "none",

                    border:
                      "1px solid #ef4444",

                    color:
                      "#ef4444",

                    padding:
                      "11px 24px",

                    borderRadius:
                      "999px",

                    fontWeight:
                      "600",

                    background:
                      "#eff6f6",

                    cursor:
                      "pointer",

                  }}
                >
                  Logout
                </button>

              </>

            ) : (

              <>

                <Link
                  to="/login"
                  style={{

                    textDecoration:
                      "none",

                    background:
                      "#0073E6",

                    color:
                      "white",
                      height: "46px",
                      alignItems: "center",

                    display: "flex",

                    padding:
                      "0 23px",

                    borderRadius:
                      "999px",

                    fontWeight:
                      "600",

                  }}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  style={{

                    textDecoration:
                      "none",

                    border:
                      "1px solid #93c5fd",

                    color:
                      "##0073E6",

                    padding:
                      "11px 24px",

                    borderRadius:
                      "999px",

                    fontWeight:
                      "600",

                    background:
                      "#eff6ff",

                  }}
                >
                  Register
                </Link>

              </>

            )
          }

        </div>

      </div>

    </nav>

  );
}