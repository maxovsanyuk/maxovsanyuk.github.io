import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const SliderBox = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    &.slick-next:before,
    [dir="rtl"] .slick-prev:before {
      content: "→";
      color: #0067b8;
    }
  }

  .slick-next:before,
  .slick-prev:before {
    color: #0067b8;
  }
`;

const SimpleSlider = ({ style, settings, imgList, imgPath }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...settings,

    style: {
      width: "50%",
      minWidth: "320px",
      maxWidth: "800px",
      height: "300px",
      background: "#ccc",
      borderRadius: "4px",
      boxShadow: "0 0px 5px rgba(0, 0, 0, 0.1)",
      ...style,
    },
  };

  return (
    <SliderBox>
      <Slider {...sliderSettings}>
        {[1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14].map((e) => {
          return (
            <div key={e}>
              <img src={require(`../images/sliderImgs/${e}.jpg`)} alt={e} />
            </div>
          );
        })}
      </Slider>
    </SliderBox>
  );
};

export default SimpleSlider;
