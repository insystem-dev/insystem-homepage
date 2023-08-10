'use client'

import styled from 'styled-components';
import Aboutus1 from '../../../assets/image/agency/aboutus/about-img01.webp';
import Aboutus2 from '../../../assets/image/agency/aboutus/about-img02.webp';
import Aboutus3 from '../../../assets/image/agency/aboutus/about-img03.webp';
import { listBlock_ty } from '.';

const ListBlockWrapper = styled.div<listBlock_ty>`
    &.list__block-col {
        overflow: hidden;
        background: #fff;
        border-radius: 40px 0 40px 0;
        box-shadow: 0px 2px 10px 0px rgba(0,0,0,.15);

        .about01 {
            background-image: url(${Aboutus1?.src});
        }

        .about02 {
            background-image: url(${Aboutus2?.src});
        }

        .about03 {
            background-image: url(${Aboutus3?.src});
        }

        .about01, .about02, .about03 {
            width: 1050px;
            height: 130px;
            padding: 50px;
            text-align: right;
            line-height: 30px;
            font-size: 2.4rem;
            letter-spacing: -1px;
            background-size: cover;
            background-repeat: no-repeat;

            span {
                color: #6093F4;
                font-weight: 500;
            }
        }
    }

    &.list__block-row {
        display: flex;
        width: 400px;
        flex-direction: column;
        align-items: center;
    }
`;

// Icon wrapper style
const IconWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  max-width: 100px;
  max-height: 100px;
  margin-bottom: 38px;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
  }
`;

export { IconWrapper };
export default ListBlockWrapper;