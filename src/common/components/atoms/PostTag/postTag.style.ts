import styled from "styled-components";

export const TagBox = styled.span`
  position: absolute;
  display: inline-block;
  width: 32px;
  height: 16px;
  top: 0;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  line-height: 16px;
  letter-spacing: -1px;
  background: ${(props) => props.theme.colors.tagNewBg};
  border-radius: 2px;
`;
