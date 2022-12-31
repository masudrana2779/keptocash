import styled from "styled-components";

export const BannerWrap = styled.div`
  background: url("./assets/images/banneBg.png") no-repeat scroll center center /
    cover;
  .slick-slide {
    transition: all 0.5s;
    &.slick-current {
      transform: scale(1.1);
    }
  }

  .slick-dots {
    bottom: -10px;
    li {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #a9b2b6;
      margin: 0 2px;
      transition: all 0.5s;
      &.slick-active {
        transform: scale(1.5);
        background: #498553;
      }
      button {
        display: none;
      }
    }
  }
`;
