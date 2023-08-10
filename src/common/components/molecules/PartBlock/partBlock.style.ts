'use client'

import styled from 'styled-components';
import { partblock_ty } from '.';

// PartBlock wrapper style
export const PartBlock_style = styled.div<partblock_ty>`
  display: flex; 
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

// Content wrapper style
export const ContentWrapper = styled.div`
  span {
    p {
      margin-bottom: 18px;
      color: #353535;
      font-size: 2.8rem;
      font-weight: 600;
      letter-spacing: -1px;

      span {
        font-size: 2.4rem;
        font-weight: 400;
      }
    }
  }

  p {
    color: #646464;
    font-size: 1.6rem;
    letter-spacing: -1px;
  }
`;
