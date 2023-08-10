import styled from 'styled-components';

export const InquiryWrapper = styled.section`
    background: #FAFAFD;

    .container {
        padding: 70px 0; 

        .form {
            box-shadow: 0px 2px 10px 0px rgba(0,0,0,.1);

            &+ .form {
                margin-top: 30px;
            }
        }

        .row {
            display: flex;
            width: 100%;
            margin-top: 36px;
            gap: 88px;

            &+ .row {
                margin-top: 20px;
            }

            &.mt-50 {
                margin-top: 50px;
            }

            &.btn {
                width: 390px;
                margin: 50px auto 0;
                flex-direction: column;
                gap: 0;
            }
        }
    }
`;

export const InquiryBox = styled.div`
    .formWrap {
      padding: 50px;
      background-color: #ffffff;
    }

    .form {
      max-width: 727px;
      margin: 0 auto;
    }

    .row_btn {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
`
