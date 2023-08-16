'use client'

import styled from 'styled-components';
import PortBgOne from '../../../assets/image/agency/Port/port-1.png';
import PortBgTwo from '../../../assets/image/agency/Port/port-2.png';
import { port_props } from '.';

export const PortWrapper = styled.div<port_props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PortSection_1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 918px;
    
    background: url(${ PortBgOne?.src }), #FFFFFF;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .section-header-divider {
        width: 90px;
        height: 6px;
        margin: 30px 0 40px;
        background-color: #6093F4;
    }
`

export const PortSection_2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-bottom: 250px;
    
    background: url(${ PortBgTwo?.src }), #FFFFFF;
    background-size: 950px 700px;
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
`

export const PortTextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .section-two-text {
        margin-left: auto;
    }
`

export const PortContextBox = styled.div`
    display: flex;
    flex-direction: row;
    
    .second-text {
        padding-left: 0px;
    }
`

export const PortDivider = styled.div`
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

export const PortDivider_2 = styled.div`
    width: 100%;
    padding: 60px 0;
    background: #F2F3F7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

export const PortContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    .pointWord {
        font-size: 2rem;
        font-weight: 700;
    }

    .point {
        font-size: 2.4rem;
        font-weight: bold;
        margin: 10px 0;
    }
`

export const PortHead = styled.p`
    font-size: 4rem;
    font-weight: bold;
    letter-spacing: -1px;
    color: #6093F4;
    margin-top: 126px;
    margin-bottom: 0;
`

export const PortContext = styled.p`
    font-size: 1.8rem;
    letter-spacing: -1px;
    color: #000000;
    margin-bottom: 0;
    margin-top: 0;
`

export const PortPointContext = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: -1px;
    color: #6093F4;
    margin-bottom: 0;
    margin-top: 0;
`