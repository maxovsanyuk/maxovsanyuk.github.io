import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "react-grid-gallery";

const GalleryCont = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .gallery {
    width: max-content;
    animation: appearingGallery 0.8s ease-in-out 0.3s 1 normal forwards;
    opacity: 0;

    @keyframes appearingGallery {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .ReactGridGallery {
    width: 1400px;
    margin: 40px 0;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .ReactGridGallery_tile-viewport {
    & img {
      height: 445px !important;
      width: 445px !important;
    }
  }

  .ReactGridGallery_tile-viewport {
    height: 445px !important;
    width: 445px !important;
  }
`;

const ImgCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.4);
`;

const GalleryBox = styled.div`
  width: 100vw;
  height: 280px;
  opacity: 0;
  background: url("http://dynamics.net.ua/wp-content/uploads/back.png")
    no-repeat left;
  animation: appearingGalleryImg 0.8s ease-in-out 0s 1 normal forwards,
    scrollingImg 290s linear 0s 1 normal;

  @keyframes appearingGalleryImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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
`;

const IMAGES = [
  {
    src: require("../images/gallery/1.jpeg"),
    thumbnail: require("../images/gallery/1.jpg"),
    caption:
      "Влад та Карина - успішні випускники курсу\n" +
      "MS Dynamics CRM Consultant",
  },

  {
    src: require("../images/gallery/2.jpeg"),
    thumbnail: require("../images/gallery/2.jpg"),
    caption: "Lucca Zaghi із Флоріанаполісу (Бразилія) на стажуванні ",
  },
  {
    src: require("../images/gallery/3.jpg"),
    thumbnail: require("../images/gallery/3.jpg"),
    caption:
      "Ірина та Тетяна - успішні випускники курсу MS Dynamics CRM Consultant",
  },
  {
    src: require("../images/gallery/4.jpeg"),
    thumbnail: require("../images/gallery/4.jpg"),
    caption: "Олександр - успішний випускник курсу MS Dynamics CRM Developer",
  },
  {
    src: require("../images/gallery/5.jpeg"),
    thumbnail: require("../images/gallery/5.jpg"),
    caption: "",
  },
  {
    src: require("../images/gallery/6.jpeg"),
    thumbnail: require("../images/gallery/6.jpg"),
    caption:
      "Максим та Владислав - успішні випускники курсу MS Dynamics CRM Developer",
  },
  {
    src: require("../images/gallery/7.jpeg"),
    thumbnail: require("../images/gallery/7.jpg"),
    caption: "Процес навчання консультантів у офісі на Лобановського",
  },
];

const GalleryPage = ({}) => {
  const images = IMAGES.map((i) => {
    i.customOverlay = (
      <ImgCard>
        <img
          width={40}
          height={40}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/VisualEditor_-_Icon_-_Zoom%2BOOjs.svg/600px-VisualEditor_-_Icon_-_Zoom%2BOOjs.svg.png"
          alt="zoom"
        />
      </ImgCard>
    );
    return i;
  });

  return (
    <GalleryCont>
      <div>
        <Header />
        <GalleryBox />
      </div>

      <div className="gallery">
        <Gallery
          enableImageSelection={false}
          images={images}
          showLightboxThumbnails
          preloadNextImage
        />
      </div>

      <Footer />
    </GalleryCont>
  );
};

export default GalleryPage;
