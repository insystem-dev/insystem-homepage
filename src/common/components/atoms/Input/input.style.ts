import styled from "styled-components";
import { inputProps } from ".";

export const InputBox = styled.div<inputProps>`
  display: flex;
  width: 100%;
  align-items: center;

  .label-btn {
    display: inline-block;
    width: 82px;
    padding: 5px 15px;
    color: #fff;
    height: 40px;
    line-height: 30px;
    font-size: 1.4rem;
    background: #6194f4;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
      background: #4076dd;
    }
  }

  input {
    width: calc(100% - 105px);
    height: 40px;
    padding: 5px 15px;
    font-size: 1.6rem;
    background: #f8f8fc;
    border: none;
    border-radius: 2px;

    &.file {
      width: calc(100% - 192px);
      margin-left: 5px;
      font-size: 1.4rem;
      line-height: 30px;
      color: #757575;

      &::file-selector-button {
        display: none;
      }
    }

    &.post-title {
      background: none;
      border: 1px solid #ccc;
    }

    &.checkbox {
      width: 18px;
      height: 18px;
    }
  }
`;

export const InputLabel = styled.label`
  display: inline-block;
  width: 105px;
  font-size: 1.6rem;
  letter-spacing: -0.8px;

  span {
    margin-left: 2px;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.dottedTxt};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 20px;
  resize: none;
  font-size: 1.6rem;
  font-family: "Noto Sans KR", "Roboto", sans-serif;
  letter-spacing: -0.6px;
  border-radius: 2px;
  border: 1px solid #ededed;
`;
