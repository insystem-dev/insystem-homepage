'use client'

import { yupResolver } from "@hookform/resolvers/yup";
import { signIn, useSession } from "next-auth/react";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import * as yup from "yup";
import * as X from "../../molecules/Box";
import * as B from "../../atoms/Button";
import CustomPasswordInput from "../../atoms/CustomPasswordInput";
import CustomTextInput from "../../atoms/CustomTextInput";
import * as H from "../../atoms/Heading";
import * as C from "../../molecules/Container";
import { selectedUser } from "../../../../states/user";
import LoginWrapper from "./login.style";

export type login_ty = {
  loginWrap: any, 
  loginBox: any, 
  loginTitle: any, 
  loginBtn: any 
}

const Login = ({ 
  loginWrap, 
  loginBox, 
  loginTitle, 
  loginBtn 
}: login_ty) => {
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
    <LoginWrapper>
      <C.NavbarContainer {...loginWrap}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <X.InquiryBox className="login-box" {...loginBox}>
            <H.Heading
              className="login-tit"
              content="관리자 로그인"
              {...loginTitle}
            />
            <CustomTextInput
              control={control}
              errors={errors}
              id="userId"
              label="관리자아이디"
              type="text"
              required={true}
            />
            <CustomPasswordInput
              control={control}
              errors={errors}
              id="password"
              label="비밀번호"
              type="password"
              required={true}
            />
            <B.AskSection_btn {...loginBtn} type="submit" variant="filled">
              로그인
            </B.AskSection_btn>
          </X.InquiryBox>
        </form>
      </C.NavbarContainer>
    </LoginWrapper>
  );
};

// Admin Loginpage default style
Login.defaultProps = {
  loginWrap: {
    padding: "70px 0",
  },
  loginBox: {
    width: "600px",
  },
  loginTitle: {
    fontSize: "2.8rem",
  },
  loginBtn: {
    fontSize: "1.8rem",
  },
};

export default Login;
