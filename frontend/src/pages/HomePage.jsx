import Navbar
from "../components/layout/Navbar";
import Footer
from "../components/layout/Footer";
import {
  useEffect,
  useState
} from "react";
import {
  useNavigate
} from "react-router-dom";

import {
  getAllJobs
} from "../api/jobApi";

const categories = [

  {
    title: "Internships",
    emoji: <img _ngcontent-ng-c2856960536="" fetchpriority="high" width="98" height="60" noloading="true" src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/internships_new.png?d=196x120" alt="Internships"></img>,
  },

  {
    title: "Jobs",
    emoji: <img _ngcontent-ng-c2856960536="" fetchpriority="high" width="98" height="60" noloading="true" src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/jobs-new.png?d=196x120" alt="Jobs"></img>,
  },


];
const companies = [

  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20250504041148",
  },

  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png",
  },

  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20230221160917",
  },

  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  },

  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/3840px-Adobe_Corporate_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  },

  {
    name: "Samsung",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi74MliPbZyWN-Yzp6llSGIOMlgp1VTi2Otw&s",
  },

  {
    name: "Tata",
    logo: "https://toppng.com/uploads/preview/tata-vector-logo-download-free-11574033407adrepfoeun.png",
  },

  {
    name: "Flipkart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flipkart_logo_%282026%29.svg/3840px-Flipkart_logo_%282026%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  },

  {
    name: "Ola",
    logo: "https://cdn.olaelectric.com/sites/evdp/pages/news_room/press_kit/branding/branding-featured.webp",
  },

  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/3840px-Infosys_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  },

];

const styles = {

  float1: {

    position: "absolute",

    top: "140px",

    left: "120px",

    width: "70px",

    height: "70px",

    borderRadius: "50%",

    background:
      "url('https://i.pravatar.cc/100?img=12') center/cover",

    border: "4px solid white",

    boxShadow:
      "0 10px 30px rgba(0,0,0,0.08)",

    zIndex: 1,

  },

  // float2: {

  //   position: "absolute",

  //   top: "240px",

  //   left: "420px",

  //   width: "58px",

  //   height: "58px",

  //   borderRadius: "50%",

  //   background:
  //     "url('https://i.pravatar.cc/100?img=22') center/cover",

  //   border: "4px solid white",

  //   zIndex: 1,

  // },

  float3: {

    position: "absolute",

    top: "520px",

    left: "250px",

    width: "64px",

    height: "64px",

    borderRadius: "50%",

    background:
      "url('https://i.pravatar.cc/100?img=35') center/cover",

    border: "4px solid white",

    zIndex: 1,

  },

  float4: {

    position: "absolute",

    top: "180px",

    right: "220px",

    width: "68px",

    height: "68px",

    borderRadius: "50%",

    background:
      "url('https://i.pravatar.cc/100?img=41') center/cover",

    border: "4px solid white",

    zIndex: 1,

  },

  float5: {

    position: "absolute",

    top: "620px",

    right: "140px",

    width: "54px",

    height: "54px",

    borderRadius: "50%",

    background:
      "url('https://i.pravatar.cc/100?img=18') center/cover",

    border: "4px solid white",

    zIndex: 1,

  },

};

function HomePage() {

  const navigate =
  useNavigate();

  const [jobs, setJobs] = useState([]);

useEffect(() => {

  const fetchJobs =
    async () => {

      try {

        const data =
          await getAllJobs();

        setJobs(data.jobs);

      } catch (error) {

        console.log(error);

      }

    };

  fetchJobs();

}, []);

  return (

    <div
  style={{

    background: "#f8fafc",

    minHeight: "100vh",

    position: "relative",

    overflow: "hidden",

    backgroundImage:
    `
    radial-gradient(circle at 20% 20%, rgba(37,99,235,0.08) 0, transparent 220px),

    radial-gradient(circle at 80% 30%, rgba(168,85,247,0.08) 0, transparent 220px),

    radial-gradient(circle at 40% 80%, rgba(16,185,129,0.08) 0, transparent 220px)
    `,

  }}
>
      <Navbar />
      {/* FLOATERS */}

<div style={styles.float1}></div>

<div style={styles.float2}></div>

<div style={styles.float3}></div>

<div style={styles.float4}></div>

<div style={styles.float5}></div>

{/* CONNECTING LINES */}

<svg
  style={{

    position: "absolute",

    inset: 0,

    width: "100%",

    height: "100%",

    pointerEvents: "none",

    zIndex: 0,

  }}
>

  <line
    x1="180"
    y1="140"
    x2="420"
    y2="240"
    stroke="rgba(37,99,235,0.18)"
    strokeWidth="2"
  />

  <line
    x1="170"
    y1="240"
    x2="250"
    y2="520"
    stroke="rgba(37,99,235,0.18)"
    strokeWidth="2"
  />

  <line
    x1="1100"
    y1="180"
    x2="980"
    y2="420"
    stroke="rgba(37,99,235,0.18)"
    strokeWidth="2"
  />

  <line
    x1="980"
    y1="420"
    x2="1180"
    y2="500"
    stroke="rgba(37,99,235,0.18)"
    strokeWidth="2"
  />

</svg>

      {/* HERO SECTION */}

      <section
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          padding: "50px 30px",
        }}
      >

        {/* TOP */}

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >

          <h1
            style={{
              fontSize: "72px",
              fontWeight: "770",
              lineHeight: "1.05",
              color: "#0f172a",
              margin: 0,
              letterSpacing: "-3px",
            }}
          >

            Find Your Dream{" "}

            <span
              style={{
                color: "#2563eb",
              }}
            >
              Job!
            </span>

          </h1>

          <div
            style={{
              background: "#ede9fe",
              color: "#6d28d9",
              padding:
                "14px 22px",
              borderRadius: "14px",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            ⚡ 30Mn+ talent inspired
          </div>

        </div>

        {/* CATEGORY CARDS */}

        <div
          style={{
            display: "flex",
            gap: "22px",
            overflowX: "auto",
            paddingBottom: "10px",
          }}
        >

          {
            categories.map(
              (item, index) => (

                <div
                  key={index}
                  onClick={() => navigate("/jobs")}
                  style={{

                    minWidth: "170px",

                    height: "200px",

                    borderRadius:
                      "28px",

                    background:
                      "linear-gradient(145deg,#dbeafe,#eff6ff)",

                    padding:
                      "24px",

                    display: "flex",

                    flexDirection:
                      "column",

                    justifyContent:
                      "space-between",

                    transition:
                      "0.3s",

                    cursor:
                      "pointer",

                    boxShadow:
                      "0 8px 20px rgba(0,0,0,0.04)",

                  }}
                >

                  <h2
                    style={{

                      margin: 0,

                      fontSize: "27px",

                      fontWeight:
                        "700",

                      color:
                        "#111827",

                      lineHeight:
                        "1.1",

                    }}
                  >

                    {item.title}

                  </h2>

                  <div
                    style={{

                      fontSize: "72px",

                    }}
                  >

                    {item.emoji}

                  </div>

                </div>

              )
            )
          }

        </div>

      </section>
      {/* STATS */}

<section
  style={{
    maxWidth: "1350px",
    margin: "0 auto",
    padding: "20px 30px 60px",
  }}
>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(240px,1fr))",
      gap: "24px",
    }}
  >

    {
      [

        {
          number: "12K+",
          label: "Live Jobs",
        },

        {
          number: "50K+",
          label: "Students",
        },

        {
          number: "3K+",
          label: "Recruiters",
        },

        {
          number: "100K+",
          label: "Applications",
        },

      ].map((item, index) => (

        <div
          key={index}

          style={{

            background:
              "white",

            padding:
              "34px",

            borderRadius:
              "24px",

            textAlign:
              "center",

            boxShadow:
              "0 10px 25px rgba(0,0,0,0.05)",

          }}
        >

          <h2
            style={{
              margin: 0,
              fontSize: "42px",
              color: "#2563eb",
            }}
          >

            {item.number}

          </h2>

          <p
            style={{
              marginTop: "10px",
              color: "#64748b",
              fontSize: "17px",
            }}
          >

            {item.label}

          </p>

        </div>

      ))
    }

  </div>

</section>

{/* TOP COMPANIES */}

<section
  style={{
    maxWidth: "1350px",
    margin: "0 auto",
    padding: "10px 30px 80px",
    overflow: "hidden",
  }}
>

  <div
    style={{
      display: "flex",
      justifyContent:
        "space-between",
      alignItems: "center",
      marginBottom: "34px",
      alignItems: "center",
      
    }}
  >

    <h2
      style={{
        fontSize: "42px",
        fontWeight: "770",
        alignItems: "center",
        color: "#0f172a",
        
      }}
    >

      Top Companies

    </h2>

    

  </div>

  <div
    style={{
      display: "flex",
      gap: "22px",
      overflowX: "auto",
      paddingBottom: "12px",
      scrollbarWidth: "none",
    }}
  >

    {
      companies.map((company) => (

        <div
          key={company.name}

          style={{

            minWidth: "170px",

            background:
              "white",

            borderRadius:
              "22px",

            padding:
              "28px 22px",

            display: "flex",

            flexDirection:
              "column",

            alignItems:
              "center",

            justifyContent:
              "center",

            gap: "16px",

            border:
              "1px solid #e2e8f0",

            boxShadow:
              "0 10px 25px rgba(0,0,0,0.05)",

            transition:
              "0.25s",

            cursor:
              "pointer",

          }}

          onMouseEnter={(e) => {

            e.currentTarget.style.transform =
              "translateY(-5px)";

          }}

          onMouseLeave={(e) => {

            e.currentTarget.style.transform =
              "translateY(0px)";

          }}
        >

          <img
            src={company.logo}

            alt={company.name}

            style={{

              width: "58px",

              height: "58px",

              objectFit:
                "contain",

            }}
          />

          <h3
            style={{
              margin: 0,
              color: "#0f172a",
              fontSize: "18px",
            }}
          >

            {company.name}

          </h3>

        </div>

      ))
    }

  </div>

</section>

{/* TRENDING SKILLS */}

<section
  style={{
    maxWidth: "1350px",
    margin: "0 auto",
    padding: "0px 30px 70px",
  }}
>

  <h2
    style={{
      fontSize: "42px",
      fontWeight: "770",
      color: "#0f172a",
      marginBottom: "30px",
    }}
  >

    Trending Skills

  </h2>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "18px",
    }}
  >

    {
      [

        "React",

        "Node.js",

        "Next.js",

        "Java",

        "Spring Boot",

        "MongoDB",

        "DSA",

        "Python",

        "AI/ML",

        "DevOps",

      ].map((skill) => (

        <button
          key={skill}

          style={{

            border: "none",

            background:
              "white",

            padding:
              "14px 24px",

            borderRadius:
              "999px",

            fontWeight:
              "600",

            fontSize:
              "15px",

            cursor:
              "pointer",

            boxShadow:
              "0 8px 20px rgba(0,0,0,0.05)",

          }}
        >

          {skill}

        </button>

      ))
    }

  </div>

</section>

      {/* FEATURED SECTION */}

      <section
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          padding: "10px 30px 70px",
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >

          <h2
            style={{
              fontSize: "40px",
              fontWeight: "770",
              color: "#0f172a",
              margin: 0,
            }}
          >
            Featured Opportunities
          </h2>

          <button
          onClick={() => navigate("/jobs")}
            style={{
              border: "none",
              background: "#2563eb",
              color: "white",
              padding:
                "12px 22px",
              borderRadius: "999px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            View All
          </button>

        </div>

        {/* FEATURED GRID */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(320px,320px))",
            gap: "24px",
          }}
        >

          {
            jobs.map((job) => (

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
        "0 10px 25px rgba(0,0,0,0.05)",

      border:
        "1px solid #e2e8f0",

    }}
    onClick={() =>
  navigate(
    `/jobs/${job._id}`
  )
}
  >

    <div
      style={{

        width: "56px",

        height: "56px",

        borderRadius:
          "16px",

        background:
          "#dbeafe",

        display: "flex",

        alignItems:
          "center",

        justifyContent:
          "center",

        fontSize:
          "28px",

        marginBottom:
          "18px",

      }}
    >
      🚀
    </div>

    <h3
      style={{

        margin: 0,

        fontSize:
          "24px",

        color:
          "#0f172a",

        marginBottom:
          "10px",

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

        marginBottom:
          "18px",

      }}
    >

      {
        job.description
      ?.slice(0, 90)
      }...

    </p>

    <div
      style={{

        display: "flex",

        justifyContent:
          "space-between",

        alignItems:
          "center",

        marginBottom:
          "18px",

      }}
    >

      <span
        style={{

          color:
            "#2563eb",

          fontWeight:
            "700",

        }}
      >

        {
          job.location
        }

      </span>

      <span
        style={{

          color:
            "#64748b",

        }}
      >

        {
          job.jobType
        }

      </span>

    </div>

    <button
      style={{

        width: "100%",

        border:
          "none",

        background:
          "#0f172a",

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
    >
      Apply Now
    </button>

  </div>

))
          }

        </div>

      </section>

      {/* CTA SECTION */}

<section
  style={{
    maxWidth: "1350px",
    margin: "0 auto",
    padding: "40px 30px 100px",
  }}
>

  <div
    style={{

      background:
  "linear-gradient(135deg,#0f172a 0%,#1e3a8a 45%,#38bdf8 100%)",

      borderRadius:
        "36px",

      padding:
        "70px 50px",

      textAlign:
        "center",

      color:
        "white",

    }}
  >

    <h2
      style={{
        fontSize: "54px",
        margin: 0,
        marginBottom: "18px",
      }}
    >

      Ready to Build
      Your Career?

    </h2>

    <p
      style={{
        fontSize: "18px",
        opacity: 0.9,
        marginBottom: "36px",
      }}
    >

      Discover jobs,
      internships and
      opportunities from
      top companies.

    </p>

    <div
      style={{
        display: "flex",
        justifyContent:
          "center",
        gap: "18px",
      }}
    >

      <button
        style={{

          border: "none",

          background:
            "white",

          color:
            "#2563eb",

          padding:
            "16px 28px",

          borderRadius:
            "999px",

          fontWeight:
            "700",

          fontSize:
            "16px",

          cursor:
            "pointer",

        }}
      >
        Explore Jobs
      </button>

      <button
        style={{

          border:
            "1px solid rgba(255,255,255,0.4)",

          background:
            "transparent",

          color:
            "white",

          padding:
            "16px 28px",

          borderRadius:
            "999px",

          fontWeight:
            "700",

          fontSize:
            "16px",

          cursor:
            "pointer",

        }}
      >
        Post a Job
      </button>

    </div>

  </div>

</section>
<Footer />

    </div>

  );
  
}


export default HomePage;