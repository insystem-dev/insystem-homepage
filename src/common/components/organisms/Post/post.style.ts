import styled from 'styled-components';

export const PostWrapper = styled.section`
    .container {
        padding: 70px 0;

        .post-edit {
            display: flex;
            max-width: 1170px;
            margin: 0 auto;
            justify-content: flex-end;
        }

        .post-wrap {
            margin: 0 auto;
            width: 100%
            max-width: 1170px;

            .post-body {
                font-size: 1.6rem;
                border-top: 1px solid #000;
                border-bottom: 1px solid #000;
                min-height: 300px;
                padding: 30px;
            }
        }

        .post-button {
            display: flex;
            width: 100%;
            max-width: 1170px;
            margin: 10px auto 0;
            justify-content: space-between;
        }
    }
`;

export const PostBox = styled.div`
    .post-head {
        width: 100%;

        tr {

            th {
                font-size: 2.8rem;
                font-weight: 600;
                text-align: left;
                letter-spacing: -.5px;
            }

            td {
                height: 45px;

                &.td-sm {
                    width: 12%;
                    text-align: right;
                }

                .label {
                    margin-right: 10px;
                    color: #7C7C7C;
                    font-size: 1.4rem;
                    font-weight: 400;
                }

                .post-info {
                    font-size: 1.4rem;
                    font-weight: 500;
                }
            }
        }
    }
`