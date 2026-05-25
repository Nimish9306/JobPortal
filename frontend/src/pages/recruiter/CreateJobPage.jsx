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
CreateJobPage() {

  const navigate =
    useNavigate();

  const [companies,
  setCompanies] =
    useState([]);

  const [loading,
  setLoading] =
    useState(false);

  const [formData,
  setFormData] =
    useState({

      title: "",

      description: "",

      location: "",

      salary: "",

      jobType: "full-time",

      requirements: "",


    });

  useEffect(() => {

    fetchCompanies();

  }, []);

  const fetchCompanies =
  async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const { data } =
        await API.get(

          "/company/my-companies",

          {

            headers: {

              Authorization:
                `Bearer ${token}`,

            },

          }

        );

      setCompanies(
        data.companies
      );

    } catch (error) {

      console.log(error);

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

      setLoading(true);

      const token =
        localStorage.getItem(
          "token"
        );

      const payload = {

        ...formData,

        requirements:

          formData
          .requirements
          .split(",")

          .map(
            (item) =>
              item.trim()
          ),

      };

      await API.post(

        "/jobs/create",

        payload,

        {

          headers: {

            Authorization:
              `Bearer ${token}`,

          },

        }

      );

      alert(
        "Job created successfully"
      );

      navigate(
        "/recruiter"
      );

    } catch (error) {

      console.log(error);

      alert(
        error.response
        ?.data
        ?.message ||

        "Job creation failed"
      );

    } finally {

      setLoading(false);

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
            "1100px",

          margin:
            "0 auto",

          padding:
            "40px 25px",

        }}
      >

        {/* HERO */}

        <div
          style={{

            background:
              "linear-gradient(135deg,#0f172a,#1e3a8a)",

            borderRadius:
              "32px",

            padding:
              "42px",

            color:
              "white",

            marginBottom:
              "32px",

          }}
        >

          <h1
            style={{

              margin: 0,

              fontSize:
                "48px",

            }}
          >

            Create New Job

          </h1>

          <p
            style={{

              marginTop:
                "14px",

              color:
                "#cbd5e1",

              fontSize:
                "18px",

            }}
          >

            Post opportunities and hire top talent.

          </p>

        </div>

        {/* FORM */}

        <form
          onSubmit={
            handleSubmit
          }
        >

          <div
            style={{

              background:
                "white",

              borderRadius:
                "32px",

              padding:
                "40px",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.05)",

            }}
          >

            {/* TITLE */}

            <div
              style={{
                marginBottom:
                  "26px",
              }}
            >

              <label
                style={labelStyle}
              >
                Job Title
              </label>

              <input

                type="text"

                name="title"

                value={
                  formData.title
                }

                onChange={
                  handleChange
                }

                placeholder="Frontend Developer"

                style={inputStyle}

                required

              />

            </div>

            {/* DESCRIPTION */}

            <div
              style={{
                marginBottom:
                  "26px",
              }}
            >

              <label
                style={labelStyle}
              >
                Description
              </label>

              <textarea

                name="description"

                value={
                  formData.description
                }

                onChange={
                  handleChange
                }

                placeholder="Describe the role..."

                rows="7"

                style={textareaStyle}

                required

              />

            </div>

            {/* GRID */}

            <div
              style={{

                display:
                  "grid",

                gridTemplateColumns:
                  "1fr 1fr",

                gap:
                  "24px",

                marginBottom:
                  "26px",

              }}
            >

              <div>

                <label
                  style={labelStyle}
                >
                  Location
                </label>

                <input

                  type="text"

                  name="location"

                  value={
                    formData.location
                  }

                  onChange={
                    handleChange
                  }

                  placeholder="Bangalore"

                  style={inputStyle}

                  required

                />

              </div>

              <div>

                <label
                  style={labelStyle}
                >
                  Salary
                </label>

                <input

                  type="number"

                  name="salary"

                  value={
                    formData.salary
                  }

                  onChange={
                    handleChange
                  }

                  placeholder="50000"

                  style={inputStyle}

                  required

                />

              </div>

            </div>

            {/* JOB TYPE */}

            <select

  name="jobType"

  value={formData.jobType}

  onChange={handleChange}

  style={inputStyle}

>

  <option value="full-time">
    Full Time
  </option>

  <option value="part-time">
    Part Time
  </option>

  <option value="internship">
    Internship
  </option>

  <option value="remote">
    Remote
  </option>

</select>

            {/* REQUIREMENTS */}

            <div
              style={{
                marginBottom:
                  "26px",
              }}
            >

              <label
                style={labelStyle}
              >
                Requirements
              </label>

              <input

                type="text"

                name="requirements"

                value={
                  formData.requirements
                }

                onChange={
                  handleChange
                }

                placeholder="React, Node.js, MongoDB"

                style={inputStyle}

              />

            </div>

          

            {/* BUTTON */}

            <button

              type="submit"

              disabled={
                loading
              }

              style={{

                width:
                  "100%",

                border:
                  "none",

                background:
                  "#2563eb",

                color:
                  "white",

                padding:
                  "18px",

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

                loading

                ? "Creating Job..."

                : "Create Job"
              }

            </button>

          </div>

        </form>

      </section>

      <Footer />

    </div>

  );

}

const labelStyle = {

  display:
    "block",

  marginBottom:
    "10px",

  fontWeight:
    "700",

  color:
    "#0f172a",

};

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

const textareaStyle = {

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

};