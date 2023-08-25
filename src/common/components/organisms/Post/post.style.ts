import styled from "styled-components";

export const PostDetailSection = styled.section`
  display: flex;
  width: 100vw;
  min-height: calc(100vh - 680px);
  padding: 70px 0;
  align-items: center;
  justify-content: center;
`;

export const PostDetailBox = styled.div`
  display: flex;
  width: 1240px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const PostTopBtnBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
`;

export const PostBottomBtnBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const PostContentBox = styled.div`
  width: 100%;
`;

export const PostInfoGrid = styled.table`
  width: 100%;
`;

export const InfoTr = styled.tr``;

export const InfoTh = styled.th`
  font-family: Noto Sans KR;
  font-size: 2.8rem;
  font-weight: 600;
  text-align: left;
  letter-spacing: -0.5px;
`;

export const InfoTd = styled.td`
  height: 45px;
  font-family: Noto Sans KR;

  &.td-sm {
    width: 12%;
    text-align: right;
  }

  .label {
    margin-right: 10px;
    color: ${(props) => props.theme.colors.labelTxt};
    font-size: 1.4rem;
    font-weight: 400;
  }

  .post-info {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

export const PostBodyBox = styled.div`
  padding: 30px;
  border-top: 1px solid ${(props) => props.theme.colors.postBorder};
  border-bottom: 1px solid ${(props) => props.theme.colors.postBorder};
`;
