import React from "react";
import { Controller } from "react-hook-form";
import Input from "..";
import * as S from "../input.style";

export type InputTextAreaProps = {
  control: any;
  id: any;
  placeholder: any;
  required: any;
  errors?: any;
};

const InputTextArea = ({
  control,
  id,
  placeholder,
  required,
}: InputTextAreaProps) => {
  return (
    <Input>
      <Controller
        render={({ field: { onChange, value } }) => {
          return (
            <S.TextArea
              onChange={(e: any) => {
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
    </Input>
  );
};

export default InputTextArea;
