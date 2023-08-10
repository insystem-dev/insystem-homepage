'use client'

import styled, { css } from 'styled-components';
import BusinessBG from '../../../assets/image/agency/main/main-business-background.jpg';
import { BusinessSection_props } from './businessSection';

export const BusinessSectionWrapper = styled.div`
    position: relative;
    z-index: 5;

    .section-header-divider {
        width: 90px;
        height: 6px;
        margin: 30px 0;
        background: #FFFFFF;
    };

    .container {
        overflow: hidden;
        width: 100%;
        height: auto;
        margin-top: -280px;

        .row {
            display: flex;
            width: 100%;
            padding-bottom: 90px;
            gap: 20px;

            .col {
                padding: 64px 40px 40px;
                box-shadow: 0 4px 19px 0px rgba(0,0,0,.15);
            }
        }
    };
`;

export const BusinessDetail_box = styled.div<BusinessSection_props>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  .fadeStyle {
    width: 100%;
  };

  ${(props) => {
    if (props.className == "row") {
      return css(
        {gap: '20px'},
      )
    } else if (props.className == "col") {
      return css (
        {maxWidth: '400px'},
        {height: 'auto'},
        {minHeight: '400px'},
        {backgroundColor: '#ffffff'},
      )
    }
  }};
`;

export const BusinessSection_box = styled.div`
  overflow: hidden;
  width: 100%;
  height: 620px;
  margin-top: -200px;
  padding: 130px 86px 0;
  background-image: url(${BusinessBG?.src});
  background-size: cover;
  border-radius: 80px;
`;