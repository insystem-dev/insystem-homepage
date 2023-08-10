'use client'

import styled from 'styled-components';

type AskSection_props = {
    background?: string | object
}

export const AskSectionWrapper = styled.section`
    position: absolute;
    top: 620px;
    width: 100%;
    z-index: 5;
`

export const AskSection_section = styled.section`
    display: flex;
    width: 1270px;
    margin: 0 auto;
    flex-direction: row-reverse;
`

export const AskSectionBox = styled.div<AskSection_props>`
    width: 430px;
    height: 290px;
    padding: 40px;
    background: ${(props) => {
        if (props.background == "askBoxBg") {
            return props.theme.gradient.askBoxBg
        } else {
            return props.background
        }
    }};
    box-shadow: 0 4px 10px 0 rgba(0,0,0,.15);

    button {
        display: flex;
        margin-left: auto; 
        margin-top: 20px;
    };
`