import React from "react";
import { ModalBtn, PostBtn } from "../Button";
import * as S from "./modal.style";

export type modal_ty = {
  open?: any;
  modal?: any;
  onClose?: any;
  title?: any;
  content?: any;
  edit?: any;
  clickBtn?: any;
  onClick?: any;
};

const Modal = ({
  open,
  onClose,
  title,
  content,
  edit,
  clickBtn,
  onClick,
}: modal_ty) => {
  return (
    <S.ModalBackground className={`${open && "open"}`}>
      <S.ModalBox>
        <S.ModalTit>{title}</S.ModalTit>
        <S.ModalContent>{content}</S.ModalContent>
        <S.ModalFooter>
          {edit && (
            <ModalBtn
              type="button"
              onClick={onClick}
              title={clickBtn}
              color="secondary"
            />
          )}
          <ModalBtn type="button" onClick={onClose} title="닫기" />
        </S.ModalFooter>
      </S.ModalBox>
    </S.ModalBackground>
  );
};

export default Modal;
