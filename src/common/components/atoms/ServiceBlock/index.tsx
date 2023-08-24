import * as S from "./serviceBlock.style";

interface ServiceBlockProps {
  label?: string;
  title?: string;
  content?: string;
}

export const ServiceBlock = ({ label, title, content }: ServiceBlockProps) => {
  return (
    <S.ServiceBlock>
      <S.ServiceBlockLabel>{label}</S.ServiceBlockLabel>
      <S.ServiceBlockTit>{title}</S.ServiceBlockTit>
      <S.ServiceBlockContent>{content}</S.ServiceBlockContent>
    </S.ServiceBlock>
  );
};
