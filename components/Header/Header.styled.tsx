import styled from "styled-components";

export const HeaderWrap = styled.header`
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
