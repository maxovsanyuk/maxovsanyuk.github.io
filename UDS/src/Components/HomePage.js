import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import SimpleSlider from "./SimpleSlider";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { setActivePage } from "../redux/actions/app_action";
import { useDispatch } from "react-redux";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  .img-box {
    width: 100%;
    height: 280px;
    opacity: 0;
    background: url("http://dynamics.net.ua/wp-content/uploads/back.png")
      no-repeat left;
    animation: appearingImg 0.8s ease-in-out 0s 1 normal forwards,
      scrollingImg 400s linear 0s 1 normal;
    margin-top: -280px;

    @keyframes appearingImg {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
        margin-top: -5px;
      }
    }

    @keyframes scrollingImg {
      0% {
        background-position: left;
      }
      50% {
        background-position: right;
      }

      100% {
        background-position: left;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1400px;
    margin: 40px 0 0 0;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 10px 0 20px 0;
      color: #0067b8;
      font-size: 22px;
    }

    .animation {
      width: 300px;
      height: 180px;
      border: 1px solid #0067b8;
      margin: 0 0 20px 0;
    }

    .text-block {
      display: flex;
      align-items: center;
      margin: 0 0 15px 160px;
      font-size: 14px;

      &:last-child {
        font-weight: 600;
      }
    }

    .new-programm {
      animation: newProgramm 0.8s ease-in-out 0.5s 1 normal forwards;
      visibility: hidden;

      @keyframes newProgramm {
        0% {
          opacity: 0;
          transform: scale3d(0, 0, 1);
          visibility: visible;
        }
        100% {
          opacity: 1;
          transform: scale3d(1, 1, 1) rotate(360deg);
          visibility: visible;
        }
      }
    }

    .detail-btn {
      font-size: 16px;
      padding: 10px 25px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
      border: 1px solid #ccc;
      color: rgba(0, 0, 0, 0.8);
      background: #fff;
      border-radius: 4px;
      transition: 0.4s;
      text-decoration: none;

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

    .card-wrapper {
      transition: 0.5s;
      &:hover {
        cursor: pointer;
        .education-title {
          transition: 0.5s;
          color: #0067b8;
        }
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

    .education-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 20px;
    }

    .education-title {
      text-align: center;
      color: rgba(0, 0, 0, 0.8);
      margin: 0 0 20px 0;
      font-size: 18px;
      font-weight: 600;
      transition: 0.4s;
    }

    .stydents-review-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      background: #f5f5f5;
      border-radius: 2px;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
      animation: appearingReviewBox 0.8s ease-in-out 0s 1 normal forwards;

      @keyframes appearingReviewBox {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      .student-name {
        color: rgba(0, 0, 0, 0.8);
        font-size: 20px;
        font-weight: 500;
        margin: 10px 0 0 0;
      }

      .student-review {
        height: 150px;
        overflow: auto;
        padding: 30px 50px 50px 50px;
        font-size: 16px;
        line-height: 1.5;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    .slider-arrow {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const textLabels = [
  "Ти молодий спеціаліст з технічним бекграундом та знанням англійської мови?",
  "Ти хочешь отримувати зарплату европейського рівня?",
  "Проте в тебе немає досвіду роботи?",
  "Тоді тобі до нас!",
];

const HomePage = ({}) => {
  const [slideToShow, setSlideToShow] = useState(1);

  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <Home>
        <div className="img-box" />
        <div className="content">
          <div
            style={{
              width: "calc(100% - 40px)",
              background: "#f5f5f5",
              margin: "0 0 20px 0",
              padding: "20px",
            }}
          >
            <h2 className="title" style={{ margin: "10px 0 20px 0" }}>
              Dynamics Education –
              <span
                style={{
                  fontSize: "16px",
                  margin: "0 0 0 5px",
                  color: "rgba(0,0,0,0.8)",
                  fontWeight: 500,
                }}
              >
                це курси для тих, хто хоче проявити себе в ІТ. Ми готуємо
                кваліфікованих спеціалістів починаючи з 2016 року.
              </span>
            </h2>

            <div style={{ width: "100%" }}>
              {textLabels.map((t) => {
                return (
                  <div key={t} className="text-block">
                    <img
                      width={30}
                      height={30}
                      style={{ margin: "0 10px 0 0" }}
                      src={require("../images/checkMark.png")}
                      alt="checkMark"
                    />
                    {t}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "calc(100% - 40px)",
              margin: "0 0 20px 0",
            }}
          >
            <h2 className="title" style={{ margin: "10px 0  20px 0" }}>
              Кого ми готуємо?
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0 0 10px 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  {[
                    "MS Dynamics CRM Developer",
                    "MS Dynamics CRM Consultant",
                  ].map((t) => {
                    return (
                      <div key={t} className="education-box">
                        <div className="animation" />
                        <div className="education-title">{t}</div>
                      </div>
                    );
                  })}
                </div>
                <Link
                  to="/educations"
                  onClick={() => {
                    dispatch(setActivePage("/educations"));
                    window.scrollTo(0, 0);
                  }}
                  className="detail-btn"
                >
                  Детальніше
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              flexWrap: "wrap",
              display: "flex",
              flexDirection: "column",
              background: "#f5f5f5",
              justifyContent: "space-around",
              padding: "20px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2 className="title">Навчальна платформа</h2>
              <img
                className="new-programm"
                src={require("../images/New.png")}
                alt="new-programm"
                width={520}
                height={340}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "40px 0 0 0",
            }}
          >
            <div style={{ margin: "0 20px" }} className="card-wrapper">
              <div className="card">
                <img
                  width={300}
                  height={200}
                  src={require("../images/distance.jpg")}
                  alt="distance"
                />
              </div>
              <div
                className="education-title"
                style={{ margin: "20px 20px 0 20px" }}
              >
                Дистанційне навчання <br /> у зручний для вас час
              </div>
            </div>
            <div style={{ margin: "0 20px" }} className="card-wrapper">
              <div className="card">
                <img
                  width={300}
                  height={200}
                  src={require("../images/diplom-300-na-200.png")}
                  alt="distance"
                />
              </div>

              <div
                className="education-title"
                style={{ margin: "20px 20px 0 20px" }}
              >
                По закінченню курсу <br /> видається сертифікат
              </div>
            </div>

            <div style={{ margin: "0 20px" }} className="card-wrapper">
              <div className="card">
                <img
                  width={300}
                  height={200}
                  src={require("../images/pratsevlashtuv-300-na-200.png")}
                  alt="distance"
                />
              </div>
              <div
                className="education-title"
                style={{ margin: "20px 20px 0 20px" }}
              >
                Працевлаштування та <br /> практична підготовка
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              background: "#f5f5f5",
              margin: "30px 0 0 0",
            }}
          >
            <h2 className="title" style={{ margin: "40px 0 0 0" }}>
              Наше співробітництво з UDS
            </h2>
            <SimpleSlider
              style={{ height: "325px", width: "575px", margin: "50px 0" }}
            />
          </div>

          <div
            style={{
              width: "100%",
              margin: "25px 0",
            }}
          >
            <h2 className="title" style={{ margin: "10px 0" }}>
              Відгуки наших студентів:
            </h2>

            <div
              style={{
                width: "100%",
                height: "470px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require("../images/arrow.png")}
                width={50}
                height={50}
                alt="arrow"
                style={{
                  transform: "rotate(180deg)",
                  visibility: slideToShow === 1 ? "hidden" : "visible",
                }}
                className="slider-arrow"
                onClick={() =>
                  setSlideToShow(slideToShow === 1 ? 1 : slideToShow - 1)
                }
              />
              <div
                className="stydents-review-box"
                style={{ display: slideToShow === 1 ? "flex" : "none" }}
              >
                <img
                  width={80}
                  height={80}
                  src="http://dynamics.net.ua/wp-content/uploads/nizdropa2.png"
                  alt="photo"
                  style={{ borderRadius: "50%", margin: "20px 0 15px 0" }}
                />
                <span className="student-name">Ніздропа Тетяна</span>

                <p className="student-review">
                  "Цей курс дав мені набагато більше, ніж просто теоретичні
                  знання в області Microsoft Dynamics CRM. Він познайомив мене з
                  новими цікавими людьми, надихнув мене на нові цілі та дав
                  можливість працювати у дивовижній команді. Мені все
                  сподобалося, особливо те, як пояснювалися теми. У мене тільки
                  позитивні емоції: гарна атмосфера, смачна кава та різноманітні
                  смаколики. Цей навчальний курс був на високому рівні!"
                </p>
              </div>
              <div
                className="stydents-review-box"
                style={{ display: slideToShow === 2 ? "flex" : "none" }}
              >
                <img
                  width={80}
                  height={80}
                  src="http://dynamics.net.ua/wp-content/uploads/polyanovskij.png"
                  alt="photo"
                  style={{ borderRadius: "50%", margin: "20px 0 15px 0" }}
                />
                <span className="student-name">Поляновський Евгеній</span>

                <p className="student-review">
                  "Виклад курсу доступний і зрозумілий, весь пройдений матеріал
                  день в день закріплюється практичними завданнями. Лектор
                  пояснює все більш ніж доступно, дає вичерпні відповіді на
                  будь-які питання. Величезним плюсом є доступ до CRM в
                  будь-який час доби, при необхідності можна повторити, згадати
                  або закріпити потрібну частину матеріалу. Окремо хотілося б
                  відзначити гарну організацію, дружню атмосферу, смачні
                  кофі-брейки, бездоганну технічну сторону організації навчання.
                  Спасибі всім і особливо лектору".
                </p>
              </div>
              <div
                className="stydents-review-box"
                style={{ display: slideToShow === 3 ? "flex" : "none" }}
              >
                <img
                  width={80}
                  height={80}
                  src="http://dynamics.net.ua/wp-content/uploads/Vylobkova2.jpg"
                  alt="photo"
                  style={{ borderRadius: "50%", margin: "20px 0 15px 0" }}
                />
                <span className="student-name">Вилобкова Вікторія</span>

                <p className="student-review">
                  "Це були гарні курси! Інформація була структурованою та
                  послідовною. Це мій перший досвід роботи з MS Dynamics CRM, не
                  зважаючи це, особливих складнощів у вивченні курсу не
                  виникало. Куратор продемонстрував нам справжні випадки роботи
                  з Microsoft CRM. Організація навчання була на високому рівні,
                  учасники завжди могли звернутися за допомогою. Також ми мали
                  можливість практикуватись із тестовим CRM. Як результат, я
                  можу сказати, що отримала нові навички та великий досвід
                  роботи з CRM".
                </p>
              </div>
              <img
                src={require("../images/arrow.png")}
                width={50}
                height={50}
                alt="arrow"
                className="slider-arrow"
                style={{ visibility: slideToShow === 3 ? "hidden" : "visible" }}
                onClick={() =>
                  setSlideToShow(slideToShow === 3 ? 3 : slideToShow + 1)
                }
              />
            </div>
          </div>
        </div>
        <Footer />
      </Home>
    </div>
  );
};

export default HomePage;
