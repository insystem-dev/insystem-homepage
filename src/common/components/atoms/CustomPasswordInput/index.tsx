import React from "react";
import { Controller } from "react-hook-form";
import InputWrapper from "../Input/input.style";
import InputSetWrapper from "../InputSet/inputSet.style";

export type customPasswordInput_ty = {
  control: any, 
  id: any, 
  label: any, 
  type: any, 
  required: any,
  errors?: any
}

const CustomPasswordInput = ({ 
  control, 
  id, 
  label, 
  type, 
  required 
}: customPasswordInput_ty) => {
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
                }}
                id={id}
                type="password"
                required={required}
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

export default CustomPasswordInput;
