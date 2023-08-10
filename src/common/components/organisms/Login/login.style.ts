import styled from 'styled-components';

const LoginWrapper = styled.section`
    display: flex;
    flex: 1;
    background: #FAFAFD;
    flex-direction: column;

    .container {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;

        .login-box {
            display: flex;
            width: 500px;
            margin: 0 auto;
            padding: 50px;
            background: #fff;
            border-radius: 5px;
            box-shadow: 0px 2px 10px 0px rgba(0,0,0,.1);
            flex-direction: column;

            .login-tit {
                margin-bottom: 40px;
                font-size: 2.8rem;
                font-weight: 500;
                letter-spacing: -1.4px;
            }

            div {
                &+ div {
                    margin-top: 20px;
                }
            }

            button {
                margin-top: 40px;
            }
        }
    }
`;

export default LoginWrapper;