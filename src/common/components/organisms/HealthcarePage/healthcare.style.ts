'use client'

import styled from 'styled-components';
import HealthCareBgOne from '../../../assets/image/agency/HealthCare/healthcare-1.png';
import HealthCareBgTwo from '../../../assets/image/agency/HealthCare/healthcare-2.png';
import { HealthCareProps } from '.';


export const HealthCareWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HealthCareSection_1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 918px;
    
    background: url(${ HealthCareBgOne?.src }), #FFFFFF;
    background-size: cover;
    background-repeat: no-repeat;

    .section-header-divider {
        width: 90px;
        height: 6px;
        margin: 30px 0 40px;
        background-color: #6093F4;
    }
`

export const HealthCareSection_2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 850px;
    padding-bottom: 250px;
    
    background: url(${ HealthCareBgTwo?.src }), #FFFFFF;
    background-size: container;
    background-position: left top;
    background-repeat: no-repeat;
    
    .section-header-divider-two {
        width: 90px;
        height: 6px;
        margin: 30px 0 40px;
        margin-left: auto;
        justify-content: end;
        background-color: #6093F4;
    }

    .section-two {
        float: right;
        text-align: end;
    }

    .leftBox {
        width: 500px;
        margin-left: auto;
    }
`

export const HealthCareBox = styled.div`
    width: 620px;
    word-break: keep-all;
`

export const HealthCareTextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .section-two-text {
        margin-left: auto;
    }
`

export const HealthCareContextBox = styled.div`
    display: flex;
    flex-direction: row;
    
    .second-text {
        padding-left: 0px;
    }
`

export const HealthCareDivider = styled.div`
    width: 100%;
    padding: 60px 0;
    background: #F2F3F7;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`

export const HealthCareDivider_2 = styled.div`
    width: 100%;
    padding: 60px 0;
    background: #F2F3F7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .row-two {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
`

export const HealthCareContent = styled.div`
    width: 330px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-break: keep-all;

    .pointWord {
        font-size: 2rem;
    }

    .point {
        font-size: 2.4rem;
        margin: 0 0 10px 0;
    }
`