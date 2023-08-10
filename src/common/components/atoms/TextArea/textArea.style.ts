import styled from 'styled-components';

const TextAreaWrapper = styled.div`
    width: 100%;

    textarea {
        width: 100%;
        height: 300px;
        padding: 20px;
        resize: none;
        font-size: 1.6rem;
        font-family: 'Noto Sans KR', 'Roboto', sans-serif;
        letter-spacing: -.6px;
        border-radius: 2px;
        border: 1px solid #EDEDED;
    }
`;

export default TextAreaWrapper;