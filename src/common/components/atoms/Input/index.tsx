'use client'

import React, { useEffect, useState } from "react";
// import { Controller } from "react-hook-form";
import InputWrapper from "./input.style";
import ReCAPTCHA from "react-google-recaptcha";

export type input_ty = {
  id?: any,
  label?: any,
  type?: any,
  required?: any,
  control?: any,
  name?: any
}

const Input = ({ 
  id, 
  label, 
  type, 
  required, 
  control, 
  name
}: input_ty) => {
  const [inputValue, setInputValue] = useState("");

  const handlePhoneChange = (e: any) => {
    const numOnly = /^[0-9\b -]{0,13}$/;
    if (numOnly.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  function onChangeCaptcha(value: any) {
    console.log("Captcha value:", value);
  }

  useEffect(() => {
    setInputValue(
      inputValue
        .replace(/[^0-9]/g, "")
        .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3")
        .replace("--", "-")
    );
  }, [inputValue]);

  return (
    <InputWrapper>
      {type === "file" ? (
        <label className="label-title">
          {label}
          {required && <span>*</span>}
        </label>
      ) : (
        <label htmlFor={id} className="label-title">
          {label}
          {required && <span>*</span>}
        </label>
      )}

      {type === "phone" ? (
        <input className={type} id={id} type="text" onChange={handlePhoneChange} value={inputValue} required={required} />
      ) : type === "file" ? (
        <>
          <label htmlFor={id} className="label-btn">
            파일찾기
          </label>
          <input className={type} id={id} type="file" required={required} />
        </>
      ) : type === "password" ? (
        <input className={type} id={id} type="password" required={required} />
      ) : id === "secureCode" ? (
        <>
          <ReCAPTCHA sitekey="6LcPOFghAAAAAG3zdSMr3jOG39PGwRV0NiwBSIeS" onChange={onChangeCaptcha} />
        </>
      ) : (
        // <Controller
        //   render={({ field: { onChange, value } }) => {
        //     if (value === "") value = null;

        //     return <input className={type} id={id} type="text" required={required} />;
        //   }}
        //   control={control}
        //   name={name}
        //   defaultValue={null}
        // />
        <input className={type} id={id} type="text" required={required} />
      )}
    </InputWrapper>
  );
};

export default Input;
