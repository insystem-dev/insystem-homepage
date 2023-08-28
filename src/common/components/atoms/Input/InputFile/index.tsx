import React from "react";
import { Controller } from "react-hook-form";
import Input from "..";

export type InputFileProps = {
  control: any;
  id: any;
  label: any;
  type: any;
  required: any;
  errors?: any;
};

const InputFile = ({ control, id, label, type, required }: InputFileProps) => {
  return (
    <Input label={label} required={required}>
      <>
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
      </>
    </Input>
  );
};

export default InputFile;
