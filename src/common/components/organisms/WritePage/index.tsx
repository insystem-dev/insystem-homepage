"use client";

import { useEffect, useRef, useState } from "react";
import Router from "next/router";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BackBtn, InquiryBtn } from "../../atoms/Button";
import Input from "../../atoms/Input";
import InputText from "../../atoms/Input/InputText";
import InputFile from "../../atoms/Input/InputFile";
import InputCheckbox from "../../atoms/Input/InputCheckbox";
import * as S from "./writePage.style";
import Editor from "../../atoms/Editor";

export type WriteProps = {
  data?: any;
};

const WritePage = ({ data }: WriteProps) => {
  const [value, setValue] = useState("");
  const [htmlStr, setHtmlStr] = useState<string>("");

  const viewContainerRef = useRef<HTMLDivElement>(null);

  const schema = yup.object().shape({
    title: yup.string().required("제목을 입력해주세요"),
    fixed: yup.boolean(),
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

  const onSubmit = async (inputs: any) => {
    try {
      if (data) {
        update(inputs);
      } else {
        create(inputs);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const create = async (inputs: any) => {
    try {
      const result = await axios.post("http://localhost:3000/api/board", {
        content: value,
        ...inputs,
      });

      if (result?.status === 200) {
        Router.push("/notice");
      }
    } catch (err) {
      console.log(err);
      alert("오류");
    }
  };

  const update = async (inputs: any) => {
    const result = await axios.put("http://localhost:3000/api/board", {
      id: data.id,
      content: value,
      ...inputs,
    });

    if (result?.status === 200) {
      Router.push(`/notice/post/${data.id}`);
    }
  };

  useEffect(() => {
    if (viewContainerRef.current) {
      viewContainerRef.current.innerHTML =
        "<h2>html 코드를 이용하여 만들어지는 view 입니다.</h2>";
      viewContainerRef.current.innerHTML += htmlStr;
    }
  }, [htmlStr]);

  useEffect(() => {
    if (data) {
      reset({
        title: data.title,
        fixed: data.fixed === 1 ? true : false,
      });
      setValue(data.content);
    }
  }, []);

  const onError = (err: any) => {
    console.log(err);
  };

  return (
    <S.WriteSection>
      <S.WriteForm onSubmit={handleSubmit(onSubmit, onError)}>
        <S.InputGroupRow>
          <S.WriteFormTit>
            공지사항 작성
            <BackBtn />
          </S.WriteFormTit>
        </S.InputGroupRow>
        <S.InputGroupRow>
          <InputText
            control={control}
            errors={errors}
            id="editor-title"
            label="제목"
            type="text"
            required={true}
            {...register("title")}
          />
        </S.InputGroupRow>
        <S.InputGroupRow>
          <Editor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
        </S.InputGroupRow>
        <S.InputGroupRow>
          <InputCheckbox
            control={control}
            errors={errors}
            id="fixed"
            label="중요공지 등록"
            type="checkbox"
            required={false}
            {...register("fixed")}
          />
        </S.InputGroupRow>
        <S.InputGroupRow>
          <InputFile
            control={control}
            errors={errors}
            id="attach01"
            label="첨부파일-1"
            type="file"
            required={false}
          />
          <InputFile
            control={control}
            errors={errors}
            id="attach02"
            label="첨부파일-2"
            type="file"
            required={false}
          />
        </S.InputGroupRow>
        <S.InputGroupRow>
          <Input
            id="secureCode"
            label="자동등록방지"
            type="text"
            required={true}
          />
        </S.InputGroupRow>
        <S.InputBtnRow>
          <div>
            <InquiryBtn title="작성완료" type="submit" color="primary" />
            <InquiryBtn title="초기화" type="button" color="white" />
          </div>
        </S.InputBtnRow>
      </S.WriteForm>
    </S.WriteSection>
  );
};

export default WritePage;
