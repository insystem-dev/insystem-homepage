"use client";

import React, { useEffect, useState } from "react";
import * as yup from "yup";
import Router from "next/router";
import { signIn, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginBtn } from "../../atoms/Button";
import InputText from "../../atoms/Input/InputText";
import InputPassword from "../../atoms/Input/InputPassword";
import { selectedUser } from "../../../../states/user";
import * as S from "./login.style";

const Login = () => {
  const { status, data: userData } = useSession();
  const [user, setUser] = useRecoilState(selectedUser);
  const [errorMessage, setErrorMessage] = useState("");

  const initialState = {
    userId: "",
    password: "",
  };

  const schema = yup.object().shape({
    userId: yup.string().required(),
    password: yup.string().required(),
  });

  useEffect(() => {
    reset(initialState);
  }, []);

  const {
    watch,
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const { userId, password } = data;
    const response = await signIn("credentials", {
      userId,
      password,
      redirect: false,
    });
    if (response?.error) {
      alert(response?.error);
      setErrorMessage(response?.error);
    } else {
      Router.push("/");
    }
  };

  const onError = (err: any) => {
    console.log(err);
  };

  if (status === "authenticated") {
    Router.push("/");
  }

  return (
    <S.LoginSection>
      <S.LoginForm onSubmit={handleSubmit(onSubmit, onError)}>
        <S.LoginTit>관리자 로그인</S.LoginTit>
        <InputText
          control={control}
          errors={errors}
          id="userId"
          label="관리자아이디"
          type="text"
          required={true}
        />
        <InputPassword
          control={control}
          errors={errors}
          id="password"
          label="비밀번호"
          type="password"
          required={true}
        />
        <LoginBtn type="submit">로그인</LoginBtn>
      </S.LoginForm>
    </S.LoginSection>
  );
};

export default Login;
