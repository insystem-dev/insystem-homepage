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
    height: 1032px;
    
    background: url(${ PortBgTwo?.src }), #FFFFFF;
    background-size: 1005px 734px;
    background-position: right bottom;
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
    width: 100%;
    height: 900px;
    flex-direction: column;
    
    background: url(${ PortBgOne?.src }), #FFFFFF;
    background-size: 1200px 650px;
    background-position: left bottom;
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
        margin-left: auto;
    }
`

export const PortBox = styled.div`
    width: 800px;
    word-break: keep-all;
`

export const PortTextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    word-break: keep-all;

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
    justify-content: center;
    align-items: center;
    text-align: center;

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`

export const PortContent = styled.div`
    width: 300px;
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