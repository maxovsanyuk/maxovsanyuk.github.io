import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import Form from "./Form";

const Educations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .education-cont {
    width: 1400px;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 20px 0;
      color: #0067b8;
      font-size: 22px;
    }

    .registration-box {
      width: calc(100% - 40px);
      background: #fff;
      margin: 20px 10px;
      padding: 0 20px;
    }
    .registration-btn,
    .download-btn {
      display: inline-block;
      min-width: 200px;
      text-align: center;
      font-size: 14px;
      padding: 10px 25px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
      border: 1px solid #ccc;
      color: rgba(0, 0, 0, 0.8);
      background: #fff;
      border-radius: 4px;
      transition: 0.4s;
      text-decoration: none;
      margin: 0 0 0 25px;

      &:hover {
        transition: 0.4s;
        cursor: pointer;
        color: #0067b8;
        background: #fff;
      }

      &:focus {
        outline: none;
      }
    }
  }
  .card-wrapper {
    transition: 0.5s;
    &:hover {
      cursor: pointer;
    }
  }

  .card {
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    transition: 0.5s;
    position: relative;

    &:hover {
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
    }
  }

  .row {
    width: 100%;
    transition: 0.6s;
    padding: 5px 0;
    &:hover {
      transition: 0.6s;
      cursor: pointer;
      color: #0067b8;
      background: #fff;
    }
  }
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  animation: appearingModal 0.5s ease-in-out 0s 1 normal forwards;
  z-index: 200;
  overflow: hidden;
  position: fixed;

  @keyframes appearingModal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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

  .modal-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px 20px 40px 20px;
    width: 700px;
    min-height: 480px;
    background: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    position: relative;
  }

  .close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -10px;
    top: -10px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background: #fff;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      cursor: pointer;
      background: #0067b8;
      color: #fff;
    }
  }
`;

const EducationsPage = ({}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSendingForm, setIsSendingForm] = useState(false);
  const [templateId, setTemplateId] = useState(null);

  function sendEmail(e, templateId) {
    e.preventDefault();
    setIsSendingForm(true);

    emailjs
      .sendForm("gmail", templateId, e.target, "user_PjBk4AsJJeWCAU4tO0TDM")
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <Header />

      <Educations>
        <div className="education-cont">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              background: "#B9DBF4",
              margin: "40px 0 0 0",
            }}
          >
            <img
              src={require("../images/goluboj-1100-na-300-1-1024x279.png")}
              alt="a"
            />
          </div>

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
              style={{ margin: "40px 0 60px 0", fontSize: "26px" }}
            >
              Курс MS Dynamics CRM Consultant
            </h2>

            <div style={{ width: "100%", lineHeight: 1.5 }}>
              Якщо ти можеш вільно спілкуватися англійською, мрієш про те, щоб
              керувати проектами та любиш спілкувати з людьми, у тебе є
              можливість розпочати свою кар’єру в якості MS Dynamics CRM
              Consultant
            </div>

            <h3 className="title">Основні вимоги:</h3>

            <div style={{ width: "100%", lineHeight: 1.5 }}>
              {[
                "Бажання розвиватися, навчатися та працювати",
                "Ступінь бакалавра з IT наук або економіки",
                "Круто, якщо ти маєш певний досвід роботи за фахом. Але це не є обов’язковим",
                "Навички спілкування англійською (рівень не нижче Intermediate)",
              ].map((r) => {
                return <div className="row">- {r}</div>;
              })}
            </div>

            <div className="registration-box">
              <h3 className="title" style={{ margin: "20px 0 40px 0" }}>
                Для того, щоб записатися на курс необхідно:
              </h3>

              <div style={{ margin: "0 0 10px 0" }}>
                - Зареєструватися на курс{" "}
                <button
                  className="registration-btn"
                  onClick={() => {
                    setIsOpenModal(true);
                    setTemplateId("registration_form");
                    document.body.style.overflow = "hidden";
                  }}
                >
                  ЗАРЕЄСТРУВАТИСЯ
                </button>
              </div>
              <div style={{ lineHeight: 1.5 }}>
                - Протягом 5-ти днів з тобою зв'яжуться, чекай на дзвінок та не
                забувай перевіряти свій email.
                <div style={{ margin: "15px 0 0 0" }}>
                  - Програма навчання
                  <a
                    className="download-btn"
                    href="https://drive.google.com/file/d/1g-3MiOJFtseB06NAcEIcn1hrT2TdEEla/view?usp=sharing"
                    download
                    style={{ margin: "0 0 0 65px", padding: "8px 0" }}
                  >
                    Click to download
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  margin: "30px 0 0 0",
                  padding: "20px 0",
                }}
              >
                <div style={{ margin: "0 20px" }} className="card-wrapper">
                  <div className="card">
                    <img
                      width={300}
                      height={200}
                      src={require("../images/komp-300-na-220.jpg")}
                      alt="distance"
                    />
                  </div>
                  <div
                    style={{ margin: "20px 20px 0 20px", textAlign: "center" }}
                  >
                    <h3 style={{ margin: "10px 0", color: "#0067b8" }}>
                      Навчальна група
                    </h3>
                    До 6 чоловік
                  </div>
                </div>
                <div style={{ margin: "0 20px" }} className="card-wrapper">
                  <div className="card">
                    <img
                      width={300}
                      height={200}
                      src={require("../images/time-300-na-220.jpg")}
                      alt="distance"
                    />
                  </div>

                  <div
                    style={{ margin: "20px 20px 0 20px", textAlign: "center" }}
                  >
                    <h3 style={{ margin: "10px 0", color: "#0067b8" }}>
                      {" "}
                      Тривалість навчання
                    </h3>
                    2 тижні
                  </div>
                </div>

                <div style={{ margin: "0 20px" }} className="card-wrapper">
                  <div className="card">
                    <img
                      width={300}
                      height={200}
                      src={require("../images/oplata-300-na-220.jpg")}
                      alt="distance"
                    />
                  </div>
                  <div
                    className="education-title"
                    style={{ margin: "20px 20px 0 20px", textAlign: "center" }}
                  >
                    <h3 style={{ margin: "10px 0", color: "#0067b8" }}>
                      Вартість навчання
                    </h3>
                    Безкоштовно
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "calc(100% - 40px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "#f5f5f5",
              margin: "40px 0",
              padding: "0 20px",
            }}
          >
            <h2
              className="title"
              style={{ margin: "40px 0 60px 0", fontSize: "26px" }}
            >
              Курс MS Dynamics CRM Developer
            </h2>

            <div style={{ width: "100%", lineHeight: 1.5 }}>
              Якщо ти маєш теоретичну підготовку в сфері IT та навички
              програмування на C# .NET у тебе є можливість почати свою кар’єру в
              якості MS Dynamics CRM Developer
            </div>

            <h3 className="title">Основні вимоги:</h3>

            <div style={{ width: "100%", lineHeight: 1.5 }}>
              {[
                "Бажання програмувати, навчатися новому та працювати",
                "Ступінь бакалавра або магістра в сфері IT",
                "Початковий досвід програмування на С# .NET",
                "Понимание основ JavaScript",
                "Англійська мова (читання технічної документації, письмова комунікація)",
              ].map((r) => {
                return <div className="row">- {r}</div>;
              })}

              <div
                style={{
                  background: "#fff",
                  margin: "20px 0",
                  padding: "10px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Для реєстрації на даний курс необхідно виконати тестове
                завдання.
                <br />
                Бажаємо успіху і чекаємо в нашій команді!
                <br />
              </div>
            </div>

            <div className="registration-box">
              <h3 className="title" style={{ margin: "20px 0 40px 0" }}>
                Для того, щоб записатися на курс необхідно:
              </h3>

              <div style={{ margin: "0 0 10px 0" }}>
                <div style={{ margin: "15px 0 0 0" }}>
                  - Виконати технічне завдання (прикріпити його до заявки)
                  <a
                    className="download-btn"
                    href="../Files/TestTask-Template.Dynamics-Education-1.zip"
                    download
                    style={{ margin: "0 0 0 25px", padding: "8px 0" }}
                  >
                    Click to download
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                - Зареєструватися на курс. Обов'язково вкажіть у вашому резюме
                посилання на хмарне сховище з виконаним ТЗ (Github, Google
                Drive, etc.)
                <button
                  className="registration-btn"
                  onClick={() => {
                    setIsOpenModal(true);
                    setTemplateId("registration_form_clone");
                    document.body.style.overflow = "hidden";
                  }}
                >
                  ЗАРЕЄСТРУВАТИСЯ
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "15px 0",
                }}
              >
                - Протягом 5-ти днів з тобою зв'яжуться, чекай на дзвінок та не
                забувай перевіряти свій email
              </div>

              <div>
                - Програма навчання
                <a
                  className="download-btn"
                  href="https://drive.google.com/file/d/1L_Mze0Ke6vnN-LilYHPAwKvSxelzRzS0/view?usp=sharing"
                  download
                  style={{ margin: "0 0 0 25px", padding: "8px 0" }}
                >
                  Click to download
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  margin: "30px 0 0 0",
                  padding: "20px 0",
                }}
              >
                <div style={{ margin: "0 20px" }} className="card-wrapper">
                  <div className="card">
                    <img
                      width={300}
                      height={200}
                      src={require("../images/komp-300-na-220.jpg")}
                      alt="distance"
                    />
                  </div>
                  <div
                    style={{ margin: "20px 20px 0 20px", textAlign: "center" }}
                  >
                    <h3 style={{ margin: "10px 0", color: "#0067b8" }}>
                      Навчальна група
                    </h3>
                    До 10 чоловік
                  </div>
                </div>
                <div style={{ margin: "0 20px" }} className="card-wrapper">
                  <div className="card">
                    <img
                      width={300}
                      height={200}
                      src={require("../images/time-300-na-220.jpg")}
                      alt="distance"
                    />
                  </div>

                  <div
                    style={{ margin: "20px 20px 0 20px", textAlign: "center" }}
                  >
                    <h3 style={{ margin: "10px 0", color: "#0067b8" }}>
                      {" "}
                      Тривалість навчання
                    </h3>
                    1 місяць
                  </div>
                </div>

                <div style={{ margin: "0 20px" }} className="card-wrapper">
                  <div className="card">
                    <img
                      width={300}
                      height={200}
                      src={require("../images/oplata-300-na-220.jpg")}
                      alt="distance"
                    />
                  </div>
                  <div
                    className="education-title"
                    style={{ margin: "20px 20px 0 20px", textAlign: "center" }}
                  >
                    <h3 style={{ margin: "10px 0", color: "#0067b8" }}>
                      Бонус за проходження курсу
                    </h3>
                    150 $
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Educations>
      <Footer />
      {isOpenModal && (
        <Modal>
          <div className="modal-content">
            <span
              className="close-btn"
              onClick={() => {
                setIsOpenModal(false);
                document.body.style.overflow = "auto";
              }}
            >
              X
            </span>
            <h3 className="title">Реєстраційна форма</h3>
            <Form
              disableText
              isSendingForm={isSendingForm}
              isFile
              sendEmail={(e) => sendEmail(e, templateId)}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default EducationsPage;
