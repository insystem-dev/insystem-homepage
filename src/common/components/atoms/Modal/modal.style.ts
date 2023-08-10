import styled from 'styled-components';

export const ModalWrapper = styled.div`
    display: none;

    &.open {
        overflow: hidden;
        position: fixed;
        display: block;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.7);
        z-index: 10000;

        .modal {
            position: relative;
            display: flex;
            width: 400px;
            margin: 0 auto;
            padding: 40px 45px;
            top: calc(50% - 100px);
            background: #fff;
            border-radius: 5px;
            box-shadow: 0px 4px 20px 0px rgba(0,0,0,.3);
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .modal-content {
                font-size: 1.6rem;
            }

            .modal-btn-set {
                display: flex;
                width: 100%;
                margin-top: 40px;
                align-items: center;
                justify-content: center;

                button {
                    width: 100%;
                }
            }
        }
    }
`;

export const ModalBox = styled.div`
`