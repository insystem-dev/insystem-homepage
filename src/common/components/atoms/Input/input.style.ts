import styled from 'styled-components';
import { input_ty } from '.';

const InputWrapper = styled.div<input_ty>`
    display: flex;
    align-items: center;

    .label-title {
        display: inline-block;
        width: 105px;
        font-size: 1.6rem;
        letter-spacing: -.8px;

        span {
            font-size: 1.6rem;
            color: #D30065;
        }
    }

    .label-btn {
        display: inline-block;
        width: 82px;
        padding: 5px 15px;
        color: #fff;
        height: 40px;
        line-height: 30px;
        font-size: 1.4rem;
        background: #6194F4;
        border-radius: 2px;
        cursor: pointer;

        &:hover {
            background: #4076DD;
        }
    }

    input {
        width: calc(100% - 105px);
        height: 40px;
        padding: 5px 15px;
        font-size: 1.6rem;
        background: #F8F8FC;
        border: none;
        border-radius: 2px; 

        &.file {
            width: calc(100% - 192px);
            margin-left: 5px;
            font-size: 1.4rem;
            line-height: 30px;
            color: #757575;

            &::file-selector-button {
                display: none;
            }
        }

        &.post-title {
            background: none;
            border: 1px solid #ccc;
        }
    }
`;

export default InputWrapper;