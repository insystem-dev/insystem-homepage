'use client'

import styled from 'styled-components';
import { Heading_ty } from '.';

export const Heading_style = styled.p<Heading_ty>`
    font-family: Roboto;
    font-weight: bold;
    text-align: left;
    font-size: 52px;
    letter-spacing: -0.5px;
    margin: 0px;
    color: ${(props) => {
        if (props.color == "head") {
            return props.theme.colors.headerTxt
        } else {
            return props.color
        }
    }};

`

export const AboutHeading_style = styled.p<Heading_ty>`
    color: ${(props) => {
        if (props.color == "white") {
            return props.theme.colors.white
        } else {
            return props.color
        }
    }};
    font
    text-align: center;
    font-size: ${(props) => {
        if (props.fontSize == "pageTitle") {
            return props.theme.fontSizes.pageTitle
        } else {
            return props.theme.fontSizes.pageSubTitle
        }
    }}

`