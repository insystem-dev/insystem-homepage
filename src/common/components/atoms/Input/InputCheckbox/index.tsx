"use client";

import { Controller } from "react-hook-form";
import Input from "..";

export type InputCheckboxProps = {
  control: any;
  id: any;
  label: any;
  type: any;
  required: any;
  errors?: any;
};

const InputCheckbox = ({
  control,
  id,
  label,
  type,
  required,
}: InputCheckboxProps) => {
  return (
    <Input label={label} required={required}>
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
    </Input>
  );
};

export default InputCheckbox;
