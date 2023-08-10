'use client'

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import * as yup from "yup";
import Box from "../Box";
import * as B from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import Container from "../UI/Container";
import CheckBoxWrapper from "../../atoms/CheckBox/checkBox.style";
import InputWrapper from "../../atoms/Input/input.style";
import InputSetWrapper from "../../atoms/InputSet/inputSet.style";
import EditorWrapper from "./editor.style";

const EditorImport = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    return ({ forwardedRef, ...props }: any) => <RQ ref={forwardedRef} {...props} />;
  },
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export type editor_ty = {
  theme: any,
  editorWrap: object,
  editorHeadWrap: object,
  editorHeading: object,
  editorHeaderDivider: object,
  editorTitle: object,
  btnEditor: object,
  data: any,
}

const Editor = ({
  theme,
  editorWrap,
  editorHeadWrap,
  editorHeading,
  editorHeaderDivider,
  editorTitle,
  btnEditor,
  data,
}: editor_ty) => {
  const [value, setValue] = useState("");
  const quillRef : any = useRef(null);

  const imageHandler = (e: any) => {
    // 1. 이미지를 저장할 input type=file DOM을 만든다.
    const input: any = document.createElement("input");
    // 속성 써주기
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
    // input이 클릭되면 파일 선택창이 나타난다.

    // input에 변화가 생긴다면 = 이미지를 선택
    input.addEventListener("change", async () => {
      const file = input.files[0];
      // multer에 맞는 형식으로 데이터 만들어준다.
      const formData = new FormData();
      formData.append("img", file); // formData는 키-밸류 구조
      // 백엔드 multer라우터에 이미지를 보낸다.
      try {
        const result = await axios.post(
          "http://localhost:3000/api/img",
          formData
        );

        const IMG_URL = result.data.url;
        // 이 URL을 img 태그의 src에 넣은 요소를 현재 에디터의 커서에 넣어주면 에디터 내에서 이미지가 나타난다
        // src가 base64가 아닌 짧은 URL이기 때문에 데이터베이스에 에디터의 전체 글 내용을 저장할 수있게된다
        // 이미지는 꼭 로컬 백엔드 uploads 폴더가 아닌 다른 곳에 저장해 URL로 사용하면된다.

        // 이미지 태그를 에디터에 써주기 - 여러 방법이 있다.

        const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
        // 1. 에디터 root의 innerHTML을 수정해주기
        // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
        // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
        // editor.root.innerHTML =
        //   editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.

        // 2. 현재 에디터 커서 위치값을 가져온다
        const range = editor.getSelection();

        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range.index, "image", IMG_URL);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          [{ color: [] }, { background: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: false,
      },
    };
  }, []);

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
    if (data) {
      reset({
        title: data.title,
        fixed: data.fixed === 1 ? true : false,
      });
      setValue(data.content);
    }
  }, []);

  return (
    <EditorWrapper>
      <Container>
        <Box className="editor-wrap" {...editorWrap}>
          <Box {...editorHeadWrap}>
            <Heading content="게시글 작성" {...editorHeading} />
            <div className="editor-header-divider" />
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputSetWrapper className="input-wrap">
              <InputWrapper>
                <label htmlFor="editor-title" className="label-title">
                  제목
                  <span>*</span>
                </label>
                <input
                  className="post-title"
                  id="editor-title"
                  type="text"
                  required={true}
                  {...register("title")}
                />
              </InputWrapper>
            </InputSetWrapper>

            <EditorImport
              theme={theme}
              value={value}
              onChange={setValue}
              modules={modules}
              formats={formats}
              forwardedRef={quillRef}
            />
            <Box className="row checkbox">
              <CheckBoxWrapper>
                <input id="fixed" type="checkbox" {...register("fixed")} />
                <label htmlFor="fixed">
                  중요공지 등록<span></span>
                </label>
              </CheckBoxWrapper>
            </Box>
            <Box className="row btn">
              <B.AskSection_btn
                title="게시글 등록"
                variant="filled"
                type="submit"
                {...btnEditor}
              ></B.AskSection_btn>
              <Link href="/notice">
                <B.AskSection_btn
                  title="취소"
                  variant="lined"
                  type="button"
                  {...btnEditor}
                ></B.AskSection_btn>
              </Link>
            </Box>
          </form>
        </Box>
      </Container>
    </EditorWrapper>
  );
};

// Editor default style
Editor.defaultProps = {
  // Editor wrap default style
  editorWrap: {
    padding: "50px",
    backgroundColor: "#ffffff",
  },
  // Editor Head default style
  editorHeadWrap: {
    maxWidth: "1000px",
    margin: "0 auto 50px",
  },
  // Editor Head Title default style
  editorHeading: {
    textAlign: "center",
    fontSize: "2.4rem",
    fontWeight: "500",
    letterSpacing: "-.5px",
  },
  // Editor post title-input default style
  editorTitle: {
    maxWidth: "1000px",
    margin: "0 auto 50px",
  },
  // Editor submit or cancel button default style
  btnEditor: {
    width: "190px",
    fontSize: "1.8rem",
  },
};

export default Editor;
