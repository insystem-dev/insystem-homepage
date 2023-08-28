import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import Input from "..";

export type InputPhoneProps = {
  control: any;
  id: any;
  label: any;
  type: any;
  required: any;
  errors?: any;
};

const InputPhone = ({
  control,
  id,
  label,
  type,
  required,
}: InputPhoneProps) => {
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
    <Input label={label} required={required}>
      <>
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
      </>
    </Input>
  );
};

export default InputPhone;
