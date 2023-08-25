import React from "react";
import * as S from "./modal.style";
import * as B from "../Button";

export type modal_ty = {
  open?: any;
  modal?: any;
  setShow?: any;
  title?: any;
  content?: any;
  edit?: any;
  clickBtn?: any;
  onClick?: any;
};

const Modal = ({
  open,
  setShow,
  title,
  content,
  edit,
  clickBtn,
  onClick,
}: modal_ty) => {
  return (
    <S.ModalWrapper className={`${open && "open"}`}>
      <S.ModalBox className="modal">
        <span className="modal-title">{title}</span>
        <span className="modal-content">{content}</span>
        {edit ? (
          <div className="modal-btn-set">
            <B.PostBtn variant="filled" onClick={() => onClick()}>
              {clickBtn}
            </B.PostBtn>
            <B.PostBtn variant="lined" onClick={() => setShow(false)}>
              닫기
            </B.PostBtn>
          </div>
        ) : (
          <div className="modal-btn-set">
            <B.PostBtn variant="lined" onClick={() => setShow(false)}>
              닫기
            </B.PostBtn>
          </div>
        )}
      </S.ModalBox>
    </S.ModalWrapper>
  );
};

export default Modal;
