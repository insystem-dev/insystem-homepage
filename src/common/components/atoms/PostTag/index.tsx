import React from "react";
import * as S from "./postTag.style";

const PostTag = ({ type }: any) => {
  return <S.TagBox>{type === "new" && "NEW"}</S.TagBox>;
};

export default PostTag;
