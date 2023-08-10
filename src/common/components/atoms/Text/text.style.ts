import styled, { css } from 'styled-components';
import { Text_props } from '.';


export const AskTitle_style = styled.p<Text_props>`
    font-family: Roboto;
    font-size: 2rem;
    font-weight: 500;
    text-align: left;
    letter-spacing: -0.05em;
    color: ${(props) =>
        { if (props.color == "white") {
            return props.theme.colors.white
        }
         else {
            return props.color
         }
        }
    };
`

export const AskTell_style = styled.p<Text_props>`
    color: ${(props) =>
        { if (props.color == "white") {
            return props.theme.colors.white
        }
         else {
            return props.color
         }
        }
    };
    font-family: Roboto;
    font-size: 4rem;
    text-align: left;
    font-weight: 500;
    margin: 0px;

`
export const AskText_style = styled.p<Text_props>`
    color: ${(props) =>
        { if (props.color == "white") {
            return props.theme.colors.white
        }
        else {
            return props.color
        }
        }
    };
    font-family: Roboto;
    font-size: 1.5em;
    letter-spacing: -0.05em;
    text-align: left;
    font-weight: 500;
`

export const AboutText_style = styled.p<Text_props>`
    font-family: Noto Sans KR;
    font-size: 2rem;
    font-weight: 400;
    line-height: 3.4rem;
    letter-spacing: -1px;
    text-align: left;
    color: ${(props) =>
        { if (props.color == "white") {
            return props.theme.colors.white
        }
        else {
            return props.color
        }
        }
    };
`

export const FooterText = styled.p<Text_props>`
    color: #686868;
    font-size: 1.5rem;
`

export const HeadText_style = styled.p<Text_props>`
    color: #fff;
    font-size: 2.2rem;
    text-align: center;
`

export const InquiryText_style = styled.p<Text_props>`
    ${(props) => {
        if (props.className == "formDescription") {
            return css(
                {color: '#757575'},
                {fontSize: '1.6rem'},
                {letterSpacing: '-.5px'},
            )
        } else if (props.className == "formTitle") {
            return css(
                {fontSize: '2.4rem'},
                {fontWeight: 500},
                {letterSpacing: '-1px'}
            )
        } else if (props.className == "formSubmitText") {
            return css(
                {color: '#757575'},
                {fontSize: '1.4rem'},
                {letterSpacing: '-.5px'}
            )
        }
    }};
`

export const LogoText_style = styled.p<Text_props>`
    display: inline-block;
    font-size: 2rem;
    line-height: inherit;
    white-space: nowrap;
`