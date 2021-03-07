import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const Blog = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  .blog-cont {
    width: 1400px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 20px 0;
    color: #0067b8;
    font-size: 22px;
  }
`;

const BlogPage3 = ({}) => {
  return (
    <>
      <Header />
      <div style={{ position: "relative" }}>
        <img
          height={300}
          src={require("../../images/gallery/5.jpeg")}
          alt="img"
          style={{
            position: "absolute",
            zIndex: 1,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "300px",
            background: `url(${require("../../images/gallery/5.jpg")})`,
            filter: "grayscale(50%) blur(2px) opacity(50%)",
          }}
        />
      </div>
      <Blog>
        <div className="blog-cont">
          <div
            style={{
              display: "flex",
              width: "calc(100% - 40px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "#f5f5f5",
              margin: "40px 0 20px 0",
              padding: "0 20px",
              height: "46.3vh",
            }}
          >
            <h2
              className="title"
              style={{ margin: "40px 0", fontSize: "26px" }}
            >
              The finalists of the «Microsoft Dynamics CRM Developer»
            </h2>
            <div style={{ width: "100%", lineHeight: 1.5 }}>
              Six people have enrolled in our last Microsoft Dynamics CRM
              Developer training course. But only two of them went through all
              the training challenges and demonstrated persistence, urge and
              desire to know something new, as well as ability to dig the
              required information out without relying on someone’s help. They
              absolutely deserve a job at UDS Consulting and, no doubt, the
              certificate.
              <br />
              <br />
              <b> Mykhailo:</b>
              <br />
              <br />
              “This is a good way to improve yourself as a MS Dynamics CRM
              developer. The training provides important basic knowledge and CRM
              development skills in a short-term period. From the very
              beginning, I got access to all educational resources, which
              allowed me watching the training videos and doing the tasks
              anytime and anywhere. To my opinion, the number of real-world
              examples was not enough, but in general, it was a great experience
              for me”.
              <br />
              <br />
              <b> Andriy:</b>
              <br />
              <br />
              “This training course is a great opportunity to receive the
              up-to-date knowledge when you are a student or an employee as for
              such people it’s really hard to find time to attend the training
              courses daily. The distance learning format of this course solves
              this issue, which makes it convenient for everyone. The tutor is
              an experienced CRM developer who answers almost any question and
              provides you with additional resources and useful links. By the
              way, every student receives access to the CRM educational
              environment to practice in it”. <br />
            </div>
          </div>
        </div>
      </Blog>
      <Footer />
    </>
  );
};

export default BlogPage3;
