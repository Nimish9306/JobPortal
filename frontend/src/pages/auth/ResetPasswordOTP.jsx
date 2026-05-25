import {
  useState
} from "react";

import API
from "../../api/axios";

import {
  useNavigate
} from "react-router-dom";

export default function
ResetPasswordOTP() {

  const navigate =
    useNavigate();

  const [formData,
  setFormData] =
    useState({

      email: "",

      otp: "",

      password: "",

    });

  const [message,
  setMessage] =
    useState("");

    const [otpSent,
setOtpSent] =
useState(false);

  const handleChange =
  (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };
  const sendOTP =
          async () => {

              try {

                  await API.post(

                      "/auth/send-otp",

                      {

                          email:
                              formData.email

                      }

                  );

                  setOtpSent(true);

                  setMessage(
                      "OTP sent successfully"
                  );

              } catch (error) {

  console.log(error);

  console.log(
    error.response
  );

  setMessage(

    error.response
    ?.data
    ?.message ||

    "Failed to send OTP"

  );

}

          };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      const { data } =
        await API.post(

          "/auth/reset-password-otp",

          formData

        );

      setMessage(
        data.message
      );

      setTimeout(() => {

        navigate("/login");

      }, 2000);

    } catch (error) {

      setMessage(

        error.response
        ?.data
        ?.message ||

        "Something went wrong"

      );

    }
      

  };

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

        background:
          "#f8fafc",

      }}
    >

      <form

  onSubmit={
    handleSubmit
  }

  style={{

    background:
      "white",

    padding:
      "40px",

    borderRadius:
      "24px",

    width:
      "420px",

    boxShadow:
      "0 10px 30px rgba(0,0,0,0.08)",

  }}
>

  <h1
    style={{
      marginBottom:
        "24px",
    }}
  >

    Reset Password

  </h1>

  {/* EMAIL */}

  <input

    type="email"

    name="email"

    placeholder="Email"

    value={
      formData.email
    }

    onChange={
      handleChange
    }

    style={inputStyle}

  />

  {/* SEND OTP BUTTON */}

  <button

    type="button"

    onClick={sendOTP}

    style={{

      ...btnStyle,

      marginBottom:
        "18px",

    }}
  >

    Send OTP

  </button>

  {/* OTP + PASSWORD */}

  {

    otpSent && (

      <>

        <input

          type="text"

          name="otp"

          placeholder="Enter OTP"

          value={
            formData.otp
          }

          onChange={
            handleChange
          }

          style={inputStyle}

        />

        <input

          type="password"

          name="password"

          placeholder="New Password"

          value={
            formData.password
          }

          onChange={
            handleChange
          }

          style={inputStyle}

        />

        <button
          type="submit"
          style={btnStyle}
        >

          Reset Password

        </button>

      </>

    )

  }

  {

    message && (

      <p
        style={{

          marginTop:
            "16px",

          color:
            "#2563eb",

        }}
      >

        {message}

      </p>

    )

  }

</form>

    </div>

  );

}

const inputStyle = {

  width: "100%",

  padding: "16px",

  marginBottom: "18px",

  borderRadius: "12px",

  border:
    "1px solid #cbd5e1",

};

const btnStyle = {

  width: "100%",

  padding: "16px",

  border: "none",

  borderRadius: "12px",

  background:
    "#2563eb",

  color: "white",

  fontWeight: "700",

  cursor: "pointer",

};