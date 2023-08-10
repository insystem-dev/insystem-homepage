import styled from 'styled-components';
// import {
//   color,
//   width,
//   height,
//   display,
//   space,
//   borders,
//   borderColor,
//   boxShadow,
//   borderRadius,
//   flexWrap,
//   alignItems,
//   justifyContent,
//   flexDirection,
//   position,
//   overflow,
// } from 'styled-system';
import { FeatureBlock_ty } from '.';

// FeatureBlock wrapper style
export const FeatureBlockWrapper = styled.div<FeatureBlock_ty>`
  &.icon_left {
    display: flex;
    .icon__wrapper {
      flex-shrink: 0;
    }
  }
  &.icon_right {
    display: flex;
    flex-direction: row-reverse;
    .content__wrapper {
      text-align: right;
    }
    .icon__wrapper {
      flex-shrink: 0;
    }
  }
`;

// Content wrapper style
export const ContentWrapper = styled.div<FeatureBlock_ty>`
  width: 100%;
  height: 370px;
  padding: 50px;
  flex-direction: column;

  p {
    color: #fff;
  }

  span {
    p {
      font-size: 3.2rem;
      font-weight: 500;
      margin-bottom: 0;
      line-height: 3.6rem;
      letter-spacing: -.2px;
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;

export default FeatureBlockWrapper;
