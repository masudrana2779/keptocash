import styled from "styled-components";

export const BannerWrap = styled.div`
  background: url("./assets/images/banneBg.png") no-repeat scroll center center /
    cover;
  .slick-slide {
    transition: all 0.5s;
    &.slick-current {
    }
  }

  .slick-arrow {
    z-index: 1;
    &.slick-prev {
      left: 110px;
    }
    &.slick-next {
      right: 110px;
    }
  }

  .slick-dots {
    bottom: 50px;
    li {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #033a40;
      margin: 0 5px;
      transition: all 0.5s;
      border: 1px solid transparent;
      box-shadow: 0px 0px 4px transparent;
      &.slick-active {
        transform: scale(1.5);
        background: #0093a4;
        border: 1px solid #4ec0c7;
        box-shadow: 0px 0px 4px #00e6ff;
      }
      button {
        display: none;
      }
    }
  }
`;
