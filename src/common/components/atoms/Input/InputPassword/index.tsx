import React from "react";
import { Controller } from "react-hook-form";
import Input from "..";

export type InputPasswordProps = {
  control: any;
  id: any;
  label: any;
  type: any;
  required: any;
  errors?: any;
};

const InputPassword = ({
  control,
  id,
  label,
  type,
  required,
}: InputPasswordProps) => {
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
                type="password"
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

export default InputPassword;
