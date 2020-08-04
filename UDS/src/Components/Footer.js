import React from "react";
import styled from "styled-components";
import GoogleMap from "./GoogleMap";

const FooterCont = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 235px;
  background: #f2f2f2;
  border-top: 1px solid #ccc;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);

  .info-box {
    margin: 0 0 0 40px;
    padding: 20px 0;
  }

  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
    margin: 0 0 5px 0;
  }

  .contact-detail {
    display: flex;
    align-items: center;
    margin: 0 0 5px 0;
  }
`;

const Footer = ({}) => {
  return (
    <FooterCont>
      <div style={{ display: "flex", width: "1400px" }}>
        <GoogleMap />
        <div className="info-box">
          <a
            className="link"
            href="https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF.+%D0%92%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%8F+%D0%9B%D0%BE%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE,+150,+%D0%9A%D0%B8%D0%B5%D0%B2,+03118/@50.4070124,30.5063996,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf31f2a52cbf:0x4233c187ac37a452!8m2!3d50.4070124!4d30.5085883"
          >
            <img
              style={{ margin: "0 10px 0 0" }}
              width={35}
              height={35}
              src={require("../images/map.png")}
              alt="timetable"
            />
            м. Київ, просп. Лобановского 150
          </a>

          <div className="contact-detail">
            <img
              style={{ margin: "0 10px 0 0" }}
              width={35}
              height={35}
              src={require("../images/timetable.png")}
              alt="timetable"
            />
            Графік роботи: Пн-Пт 8:00-19:00
          </div>
          <div className="contact-detail">
            <img
              width={35}
              height={35}
              style={{ margin: "0 10px 0 0" }}
              src={require("../images/telegram.png")}
              alt="timetable"
            />
            +38 (063) 146 92 46
          </div>
          <div style={{ margin: "0 0 2px 0" }}>
            <a href="https://www.instagram.com/udsconsulting/">
              <img
                width={35}
                height={35}
                src={require("../images/insta.png")}
                alt="inst"
              />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCx443BQ2U4gGXLPYB8Nu3bg">
              <img
                width={35}
                height={35}
                src={require("../images/youtube.png")}
                alt="youtube"
              />
            </a>
          </div>
        </div>
      </div>
    </FooterCont>
  );
};

export default Footer;
