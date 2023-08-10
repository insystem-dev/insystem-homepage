'use client'

import styled from 'styled-components';

export const Image_style = styled.img`
    display: block;
    width: ${(props) => {
        console.log(props);
        
        if (props.width == "navLogo") {
            return props.theme.widths.navLogo
        } else if (props.width == "footerLogo") {
            return props.theme.widths.footerLogo
        }
    }};
    height: auto;
`