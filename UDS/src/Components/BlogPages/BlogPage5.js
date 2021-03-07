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
          src={require("../../images/gallery/9.jpg")}
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
            background: `url(${require("../../images/gallery/9.jpg")})`,
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
              «Microsoft Dynamics CRM Developer» training course
            </h2>
            <div style={{ width: "100%", lineHeight: 1.5 }}>
              This photo pictures the finalists of a Microsoft Dynamics CRM
              Developer training after the intense 21 working days packed with
              theory and practical assignments. Not everyone who started the
              training was able to succeed and cross the finish line. Only those
              who had enough patience and will, who understood that this is the
              right track for them, got the certificates and employment offer as
              a reward.
              <br />
              <br />
              <b> Oleksii:</b>
              <br />
              <br />
              «Microsoft Dynamics developer courses from UDS systems is a great
              option for those who looking for a fast way to dive into the world
              of CRM solutions design. The teachers are experienced developers
              with strong background on real-world tasks. So you not only
              getting information about most recent Microsoft products but also
              a deep knowledge of implementation features (and issues). UDS
              providing educational resources and access to fully working
              environments for your robust and productive study». <br />
              <br />
              <br />
              <b> Valery:</b>
              <br />
              <br />
              «As a whole I liked this course, I enjoyed the materials of the
              presentations and the way it was given. In my opinion, there are a
              couple of moments that could be improved: Firstly, the speaker
              sometimes was distracted by clients, but it was not his fault.
              Secondly, I think, on several assignments it would be possible to
              give more examples. But, overall everything was perfect».
            </div>
          </div>
        </div>
      </Blog>
      <Footer />
    </>
  );
};

export default BlogPage3;
