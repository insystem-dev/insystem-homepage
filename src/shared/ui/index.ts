// shared/ui에서 재사용 가능한 기본 컴포넌트들을 export
// 기존 atoms 컴포넌트들이 여기로 이동할 예정

export {
  BackBtn,
  InquiryBtn,
  BusinessBtn,
  PostBtn,
  AskSectionBtn,
} from "../../common/components/atoms/Button";
export { default as Input } from "../../common/components/atoms/Input";
export { default as Modal } from "../../common/components/atoms/Modal";
export { Icon } from "../../common/components/atoms/Icon";
export { Heading, PageHeading } from "../../common/components/atoms/Heading";
export { PageHeader } from "../../common/components/organisms/PageHeader";
export { Paging } from "../../common/components/atoms/Paging";
