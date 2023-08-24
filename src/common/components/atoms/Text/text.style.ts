import styled, { css } from "styled-components";
import { Text_props } from ".";

export const HeadText_style = styled.p<Text_props>`
  color: #fff;
  font-size: 2.2rem;
  text-align: center;
`;

export const InquiryText_style = styled.p<Text_props>`
  ${(props) => {
    if (props.className == "formDescription") {
      return css(
        { color: "#757575" },
        { fontSize: "1.6rem" },
        { letterSpacing: "-.5px" }
      );
    } else if (props.className == "formTitle") {
      return css(
        { fontSize: "2.4rem" },
        { fontWeight: 500 },
        { letterSpacing: "-1px" }
      );
    } else if (props.className == "formSubmitText") {
      return css(
        { color: "#757575" },
        { fontSize: "1.4rem" },
        { letterSpacing: "-.5px" }
      );
    }
  }};
`;

export const LogoText_style = styled.p<Text_props>`
  display: inline-block;
  font-size: 2rem;
  line-height: inherit;
  white-space: nowrap;
`;

export const ServiceText_style = styled.p<Text_props>`
  font-size: 1.8rem;

  color: ${(props) => {
    if (props.color == "primary") {
      return props.theme.colors.primary;
    } else {
      return props.theme.colors.black;
    }
  }};

  font-weight: ${(props) => {
    if (props.fontWeight == "bold") {
      return "bold";
    } else if (props.fontWeight == 600) {
      return 600;
    }
  }};

  letter-spacing: -1px;
  margin-bottom: 0;
  margin-top: 0;

  ${(props) => {
    if (props.className == "head") {
      return css(
        { fontSize: "4rem" },
        { fontWeight: "bold" },
        { letterSpacing: "-1px" },
        { color: "#6093F4" },
        { marginTop: "126px" },
        { marginBottom: "0" }
      );
    }
  }};
`;
