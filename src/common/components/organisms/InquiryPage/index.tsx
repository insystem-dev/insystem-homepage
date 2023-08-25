"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { PostBtn } from "../../atoms/Button";
import CustomFileInput from "../../atoms/CustomFileInput";
import CustomPhoneInput from "../../atoms/CustomPhoneInput";
import CustomTextAreaInput from "../../atoms/CustomTextAreaInput";
import CustomTextInput from "../../atoms/CustomTextInput";
import { Heading } from "../../atoms/Heading";
import { InquiryText } from "../../atoms/Text";
import { ContainerWrapper } from "../../molecules/Container";
import * as S from "./inquiryPage.style";
import Router from "next/router";

import { InputSet } from "../../atoms/InputSet";

export type inQuiryPage_ty = {
  form?: Object;
  formSubmitTxt?: Object;
  btnForm?: Object;
};

const InquiryPage = ({ form, formSubmitTxt, btnForm }: inQuiryPage_ty) => {
  const initialState = {
    company: "",
    incharge: "",
    phone: "",
    email: "",
    url: "",
    intype: "",
    title: "",
    reference01: "",
    reference02: "",
  };

  const schema = yup.object().shape({
    company: yup.string().required(),
    incharge: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
    url: yup.string(),
    intype: yup.string().required(),
    title: yup.string().required(),
    reference01: yup.string(),
    reference02: yup.string(),
  });

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
    try {
      const formData = new FormData();
      const mail = data;

      formData.append("attach01", data.attach01[0]);
      formData.append("attach02", data.attach02[0]);

      formData.append("mail", JSON.stringify(mail));

      // 파일 formdata에 집어넣어서 보내기
      const response = await fetch("http://localhost:3000/api/inquire", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result?.status === 200) {
        alert("문의 되었습니다.");
        Router.push("/");
      } else {
        alert("알 수 없는 에러 발생");
      }
    } catch (err) {
      console.log(err);
    }

    // api로 보내기
  };

  const onError = (err: any) => {
    console.log(err);
  };
  return (
    <S.InquiryWrapper>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <ContainerWrapper>
          <S.InquiryBox className="form">
            <S.InquiryBox className="formWrap">
              <Heading content="기본정보 입력" />
              <InquiryText
                className="formDescription"
                content="원활한 문의 답변을 위해 아래의 기본정보를 입력해 주세요."
              />
              <S.InquiryBox className="row">
                <CustomTextInput
                  control={control}
                  errors={errors}
                  id="company"
                  label="회사명"
                  type="text"
                  required={true}
                />
                <CustomTextInput
                  control={control}
                  errors={errors}
                  id="incharge"
                  label="담당자명"
                  type="text"
                  required={true}
                />
              </S.InquiryBox>
              <S.InquiryBox className="row">
                <CustomPhoneInput
                  control={control}
                  errors={errors}
                  id="phone"
                  label="전화번호"
                  type="phone"
                  required={true}
                />
                <CustomTextInput
                  control={control}
                  errors={errors}
                  id="email"
                  label="이메일"
                  type="text"
                  required={true}
                />
              </S.InquiryBox>
              <S.InquiryBox className="row">
                <CustomTextInput
                  control={control}
                  errors={errors}
                  id="url"
                  label="홈페이지"
                  type="text"
                  required={false}
                />
              </S.InquiryBox>
              <S.InquiryBox className="row mt-50">
                <CustomTextInput
                  control={control}
                  errors={errors}
                  id="intype"
                  label="문의유형"
                  type="text"
                  required={true}
                />
              </S.InquiryBox>
              <S.InquiryBox className="row">
                <CustomTextInput
                  control={control}
                  errors={errors}
                  id="title"
                  label="제목"
                  type="text"
                  required={true}
                />
              </S.InquiryBox>
              <S.InquiryBox className="row">
                <CustomTextInput
                  control={control}
                  errors={errors}
                  id="reference01"
                  label="참고사이트 1"
                  type="text"
                  required={false}
                />
                <CustomTextInput
                  control={control}
                  errors={errors}
                  id="reference02"
                  label="참고사이트 2"
                  type="text"
                  required={false}
                />
              </S.InquiryBox>
            </S.InquiryBox>
          </S.InquiryBox>
          <S.InquiryBox className="form">
            <S.InquiryBox className="formWrap">
              <Heading content="문의사항" />
              <S.InquiryBox className="row">
                <CustomTextAreaInput
                  control={control}
                  errors={errors}
                  id="textInput"
                  placeholder="상담 및 견적 문의사항을 입력해 주세요."
                  required={true}
                />
              </S.InquiryBox>
              <S.InquiryBox className="row">
                <CustomFileInput
                  control={control}
                  errors={errors}
                  id="attach01"
                  label="첨부파일 1"
                  type="file"
                  required={false}
                />
                <CustomFileInput
                  control={control}
                  errors={errors}
                  id="attach02"
                  label="첨부파일 2"
                  type="file"
                  required={false}
                />
              </S.InquiryBox>
              <S.InquiryBox className="row">
                <InputSet
                  id="secureCode"
                  label="자동등록방지"
                  type="text"
                  required={true}
                />
              </S.InquiryBox>
              <S.InquiryBox className="row btn">
                <div className="row_btn">
                  <PostBtn
                    title="작성완료"
                    type="submit"
                    color="white"
                  ></PostBtn>
                  <PostBtn title="초기화" type="button" color="blue"></PostBtn>
                </div>
                <InquiryText
                  content="※ 제출된 문의사항은 내용 수정이 불가합니다."
                  className="formSubmitText"
                />
              </S.InquiryBox>
            </S.InquiryBox>
          </S.InquiryBox>
        </ContainerWrapper>
      </form>
    </S.InquiryWrapper>
  );
};

export default InquiryPage;
