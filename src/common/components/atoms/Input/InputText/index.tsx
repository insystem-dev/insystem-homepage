import React from "react";
import { Controller } from "react-hook-form";
import Input from "..";

export type InputTextProps = {
  control: any;
  id: any;
  label: any;
  type: any;
  required: any;
  errors?: any;
};

const InputText = ({ control, id, label, type, required }: InputTextProps) => {
  return (
    <Input label={label} required={required}>
      <>
        <Controller
          render={({ field: { onChange, value } }) => {
            return (
              <input
                className={type}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                id={id}
                type={type}
                required={required}
              />
            );
          }}
          control={control}
          name={id}
          defaultValue={false}
        />
      </>
    </Input>
  );
};

export default InputText;
