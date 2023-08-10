import React from "react";
import Input from "../Input";
import InputSetWrapper from "./inputSet.style";

export type inputSet_ty = {
  id?: any, 
  label?: any, 
  type?: any, 
  required?: any, 
  validationSchema?: any, 
  validation?: any, 
  control?: any, 
  errors?: any, 
  name?: any
}

export const InputSet = ({ 
  id, 
  label, 
  type, 
  required, 
  validationSchema, 
  validation, 
  control, 
  errors, 
  name 
}: inputSet_ty) => {
  return (
    <InputSetWrapper className="input-wrap">
      <Input id={id} label={label} type={type} required={required} control={control} name={name} />
      {/* {validationSchema && <Text content={validationSchema} {...validation} />} */}
      {/* {errors[name]?.message && <Text content={errors[name].message} {...validation} />} */}
    </InputSetWrapper>
  );
};
