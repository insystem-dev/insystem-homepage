import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import InputWrapper from "../Input/input.style";
import InputSetWrapper from "../InputSet/inputSet.style";

export type customPhoneInput_ty = {
  control: any, 
  id: any, 
  label: any, 
  type: any, 
  required: any,
  errors?: any
}


const CustomPhoneInput = ({ 
  control, 
  id, 
  label, 
  type, 
  required 
}: customPhoneInput_ty) => {
  const [inputValue, setInputValue] = useState("");

  const handlePhoneChange = (e: any) => {
    const numOnly = /^[0-9\b -]{0,13}$/;
    if (numOnly.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  useEffect(() => {
    setInputValue(
      inputValue
        .replace(/[^0-9]/g, "")
        .replace(
          /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
          "$1-$2-$3"
        )
        .replace("--", "-")
    );
  }, [inputValue]);

  return (
    <InputSetWrapper className="input-wrap">
      <InputWrapper>
        <label htmlFor="editor-title" className="label-title">
          {label}
          {required && <span>*</span>}
        </label>
        <Controller
          render={({ field: { onChange, value } }) => {
            return (
              <input
                className={type}
                onChange={(e) => {
                  onChange(e.target.value);
                  handlePhoneChange(e);
                }}
                id={id}
                type="text"
                required={required}
                value={inputValue}
              />
            );
          }}
          control={control}
          name={id}
          defaultValue={false}
        />
      </InputWrapper>
    </InputSetWrapper>
  );
};

export default CustomPhoneInput;
