import React from 'react';
import CheckBoxWrapper from './checkBox.style';

const CheckBox = ({
    id
}: any) => {
    return (
        <CheckBoxWrapper>
            <input id={id} type="checkbox" />
            <label htmlFor={id}>
                중요공지 등록<span></span>
            </label>
        </CheckBoxWrapper>
    );
};


export default CheckBox;