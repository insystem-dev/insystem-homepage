"use client";

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import * as S from "./input.style";

export type inputProps = {
  id?: any;
  label?: any;
  type?: any;
  required?: any;
  control?: any;
  name?: any;
  children?: React.ReactElement;
};

const Input = ({ id, label, required, children }: inputProps) => {
  const [inputValue, setInputValue] = useState("");

  function onChangeCaptcha(value: any) {
    console.log("Captcha value:", value);
  }

  return (
    <S.InputBox>
      <>
        {label && (
          <S.InputLabel htmlFor={id}>
            {label}
            {required && <span>*</span>}
          </S.InputLabel>
        )}

        {id === "secureCode" ? (
          <>
            <ReCAPTCHA
              sitekey="6LcPOFghAAAAAG3zdSMr3jOG39PGwRV0NiwBSIeS"
              onChange={onChangeCaptcha}
            />
          </>
        ) : (
          children
        )}
      </>
    </S.InputBox>
  );
};

export default Input;
