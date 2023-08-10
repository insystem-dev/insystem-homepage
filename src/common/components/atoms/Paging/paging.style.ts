import styled from 'styled-components';

const PageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .pagination {
        display: flex;
        height: 30px;
        margin-top: 20px;
        justify-content: center;
        align-items: center;
        
        li {
            display: flex;
            width: 24px;
            height: 24px;
            font-size: 1.4rem;
            font-weight: 500;
            justify-content: center;
            align-items: center;

            &+ li {
                margin-left: 10px;
            }

            a {
                display: flex;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
            }

            &:hover {
                a {
                    background: #eee;
                    border-radius: 2px;
                }
            }

            &.active {
                a {
                    color: #fff;
                    font-weight: 600;
                    background: #6194F4;
                    border-radius: 2px;
                }

                &:hover {
                    a {
                        background: #6194F4;
                    }
                }
            }

            &.disabled {
                a {
                    color: #ddd;
                    cursor: default;
                }

                &:hover {
                    a {
                        background: none;
                    }
                }
            }
        }
    }
`;

export default PageWrapper;