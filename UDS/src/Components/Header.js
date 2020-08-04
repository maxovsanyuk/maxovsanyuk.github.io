import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../redux/actions/app_action";

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  margin: 0 0 1px 0;
  ${({ fixed }) =>
    fixed &&
    "width: 100%; position: fixed; top: 0; z-index: 100; background: #fff; animation: appearingComp .5s ease-in-out 0s 1 normal forwards;"}

  .logo {
    opacity: 0;
    animation: appearingComp 1s ease-in-out 0s 1 normal forwards;
    margin: 0 30px 0 40px;

    @keyframes appearingComp {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .links-cont {
    height: 100%;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;

    .border-line {
      height: 2px;
      width: 100%;
      display: none;
      position: absolute;
      bottom: -1px;
      background: #0067b8;
      animation: border 0.3s ease-in-out 0s 1 normal forwards;

      @keyframes border {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }
    }

    .links {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      text-decoration: none;
      color: #262626;
      font-size: 13px;
      transition: 0.2s;
    }
    .anable-hover-color {
      &:hover {
        .border-line {
          display: flex;
        }
        background: #e9e9e9;
        color: #0067b8;
        transition: 0.2s;
      }
    }

    .disable-hover-color {
      &:hover {
        .border-line {
          display: flex;
        }
        transition: 0.2s;
      }
    }
  }
`;

const pages = [
  { name: "Головна", patch: "/" },
  { name: "Про навчання", patch: "/educations" },
  { name: "Галерея", patch: "/gallery" },
  { name: "Блог", patch: "/blog" },
  {
    name: "Старт курсу",
    patch: "/contacts",
    bgColor: "aliceblue",
    showLogo: true,
  },
];

const Header = () => {
  const [offset, setOffset] = useState(0);
  const state = useSelector((state) => state.app);
  const { activePage } = state;

  console.log(activePage, "activePage");

  const dispatch = useDispatch();

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <HeaderBox fixed={offset > 800}>
      <div className="links-cont">
        <Link to="/" onClick={() => dispatch(setActivePage("/"))}>
          <img
            className="logo"
            src={require("../images/Logo_School.png")}
            alt="logo"
          />
        </Link>

        {pages.map(({ name, patch, bgColor, showLogo }) => (
          <Link
            onClick={() => dispatch(setActivePage(patch))}
            style={{
              background: bgColor,
            }}
            className={`links  ${
              bgColor ? "disable-hover-color" : "anable-hover-color"
            } `}
            key={name}
            to={patch}
          >
            {name}

            {showLogo && (
              <img
                width={25}
                height={25}
                style={{ margin: "0 0 0 15px" }}
                src={require("../images/logo-m.jpg")}
                alt="logo"
              />
            )}
            <div
              className="border-line"
              style={{ display: activePage === patch && "flex" }}
            />
          </Link>
        ))}
      </div>
    </HeaderBox>
  );
};

export default Header;
