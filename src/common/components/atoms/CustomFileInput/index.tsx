import React from "react";
import { Controller } from "react-hook-form";
import InputWrapper from "../Input/input.style";
import InputSetWrapper from "../InputSet/inputSet.style";

export type customFileInput_ty = {
  control: any, 
  id: any, 
  label: any, 
  type: any, 
  required: any,
  errors?: any
}

const CustomFileInput = ({ 
  control, 
  id, 
  label, 
  type, 
  required 
}: customFileInput_ty) => {
  return (
    <InputSetWrapper className="input-wrap">
      <InputWrapper>
        <label className="label-title">
          {label}
          {required && <span>*</span>}
        </label>
        <Controller
          render={({ field: { onChange, value } }) => {
            return (
              <>
                <label htmlFor={id} className="label-btn">
                  파일찾기
                </label>
                <input
                  className={type}
                  id={id}
                  type="file"
                  required={required}
                  onChange={({ target }) => {
                    onChange(target.files);
                  }}
                />
              </>
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

export default CustomFileInput;
