import React from 'react';
import TextAreaWrapper from './textArea.style';

export type textArea_ty = {
    id: any,
    placeholder: any,
    required: any
}

const TextArea = ({
    id,
    placeholder,
    required
}: textArea_ty) => {
    return (
        <TextAreaWrapper>
            <textarea id={id} placeholder={placeholder} required={required}></textarea>
        </TextAreaWrapper>
    );
};

export default TextArea;