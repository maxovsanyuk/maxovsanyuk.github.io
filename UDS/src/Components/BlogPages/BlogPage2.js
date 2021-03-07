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

const BlogPage2 = ({}) => {
  return (
    <>
      <Header />
      <div style={{ position: "relative" }}>
        <img
          height={300}
          src={require("../../images/gallery/6.jpeg")}
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
            background: `url(${require("../../images/gallery/6.jpg")})`,
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
            }}
          >
            <h2
              className="title"
              style={{ margin: "40px 0", fontSize: "26px" }}
            >
              New finalists of our CRM courses
            </h2>
            <div style={{ width: "100%", lineHeight: 1.5 }}>
              Another courses of CRM consultants and CRM developers have come to
              an end. Only the most persistent reached the final, namely Max and
              Vlad. They have showed excellent knowledge in Dynamics CRM. They
              made their first step in a new field of activity. The rest is a
              matter of practice, enthusiasm, good team and experienced mentors.
            </div>
            <h2
              className="title"
              style={{ margin: "40px 0", fontSize: "26px" }}
            >
              Why do our courses inspire?
            </h2>
            <div style={{ width: "100%", lineHeight: 1.5 }}>
              <b>Motivation and Teamwork</b> <br />
              <br />
              Due to the two-stage candidates selection, we are able to form
              groups that consist only of motivated, ambitious and purposeful
              students. Engaged in teams of 2-5 people, they step by step
              achieve high results, and at the final are guaranteed to become
              first-class specialists. <br />
              <br />
              <b>Flexible learning system</b> <br />
              <br />
              Our training takes place remotely, so everyone has the opportunity
              to build their own individual schedule and pass lectures and
              assignments at a convenient time for themselves.
              <br />
              <br />
              <b>Mentoring and support</b> <br />
              <br />
              During the entire training time mentor will help you. You can
              always address it in preparation for classes, ask a question and
              discuss practical cases with which you will start working from the
              first lesson in UDS Consulting.
              <br />
              <br />
              <b>Flipped learning</b> <br />
              <br />
              In the classroom there will be only practice, and nothing but
              practice. We’ll show you where to find the theoretical material so
              you can master it at your own pace. You will also be given access
              to the online learning system.
              <br />
              <br />
            </div>
          </div>
        </div>
      </Blog>
      <Footer />
    </>
  );
};

export default BlogPage2;
