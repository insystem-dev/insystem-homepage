import React from "react";
import { Controller } from "react-hook-form";
import TextAreaWrapper from "../TextArea/textArea.style";

export type customTextAreaInput_ty = {
  control: any, 
  id: any,
  placeholder: any, 
  required: any,
  errors?: any
}

const CustomTextAreaInput = ({ 
  control, 
  id,
  placeholder, 
  required
}: customTextAreaInput_ty) => {
  return (
    <TextAreaWrapper>
      <Controller
        render={({ field: { onChange, value } }) => {
          return (
            <textarea
              onChange={(e) => {
                onChange(e.target.value);
              }}
              placeholder={placeholder}
              id={id}
              required={required}
            />
          );
        }}
        control={control}
        name={id}
        defaultValue={false}
      />
    </TextAreaWrapper>
  );
};

export default CustomTextAreaInput;
