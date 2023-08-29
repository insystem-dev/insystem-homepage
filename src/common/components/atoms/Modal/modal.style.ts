import styled from "styled-components";

export const ModalBackground = styled.div`
  display: none;

  &.open {
    overflow: hidden;
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    align-items: center;
    justify-content: center;
    z-index: 10000;
  }
`;

export const ModalBox = styled.div`
  position: relative;
  display: flex;
  padding: 40px 45px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ModalTit = styled.div`
  font-family: Noto Sans KR;
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.06rem;
`;

export const ModalContent = styled.div`
  overflow: auto;
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 60vh;
  padding: 0 10px;
  font-family: Noto Sans KR;
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 5px;

  button {
    width: 100%;
  }
`;
