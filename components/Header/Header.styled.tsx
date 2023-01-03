import styled from "styled-components";

export const HeaderWrap = styled.header`
  padding: 50px 0;
  margin-bottom: 30px;
  @media (max-width: 991px) {
    padding: 20px 0;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .navbar {
    padding: 0;
    .logo {
      display: flex;

      @media (max-width: 767px) {
        max-width: 180px;
        width: 100%;
      }
    }
    .mainMenuWrap {
      .mainMenu {
        align-items: center;
        @media (max-width: 991px) {
          align-items: flex-start;
          margin-top: 20px;
        }
        a {
          font-family: "black_han_sansregular";
          font-size: 25px;
          font-weight: 400;
          line-height: 32px;
          letter-spacing: 0em;
          text-align: left;
          color: #404040;
          padding: 0;
          margin: 0;
          margin-right: 50px;
          @media (max-width: 991px) {
            margin: 5px 0;
            font-size: 20px;
          }
          &:last-child {
            margin-right: 0;
          }

          &.mapBtn {
            display: flex;
            background: linear-gradient(
              96.14deg,
              #3a8ef6 -10.84%,
              #6f3afa 196.74%
            );
            border-radius: 18px;
            padding: 22px 26px;
          }
        }
      }
    }
  }
  .bar_icon_Wrap {
    box-shadow: none;
    border: none;
    outline: none;
    .bar_icon {
      width: 30px;
      height: 16px;
      position: relative;
      display: inline-block;
      .bar {
        position: absolute;
        width: 100%;
        background: #000;
        height: 2px;
        left: 0;
        transition: all 0.5s;
        &.bar_1 {
          top: 0;
        }
        &.bar_2 {
          top: 50%;
        }
        &.bar_3 {
          top: 100%;
        }
      }
    }
    &:not(.collapsed) {
      .bar_icon {
        .bar {
          &.bar_1 {
            top: 50%;
            transform: rotate(45deg);
          }
          &.bar_2 {
            opacity: 0;
          }
          &.bar_3 {
            transform: rotate(-45deg);
            top: 50%;
          }
        }
      }
    }
  }
`;

export const MenuHumbargurIcon = styled.div``;
