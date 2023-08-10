import styled from 'styled-components';

const CheckBoxWrapper = styled.div`
    display: flex;
    height: 30px;
    font-size: 1.6rem;
    align-items: center;

    label {
        display: flex;
        cursor: pointer;
        position: relative;
        align-items: center;

        &:hover {
            span {
                &::before {
                    width: 5px;
                    transition: width 100ms ease;
                }

                &::after {
                    width: 10px;
                    transition: width 150ms ease 100ms;
                }
            }
        }
    }

    input[type="checkbox"] {
        display: none;

        &:checked {
            &+ label {
                span {
                    border: 1px solid #6194F4;
                    background-color: #6194F4;
                    transform: scale(1.25);
                    
                    &::after {
                        width: 10px;
                        background: #fff;
                        transition: width 150ms ease 100ms;
                    }

                    &::before {
                        width: 5px;
                        background: #fff;
                        transition: width 150ms ease 100ms;
                    }
                }

                &:hover {
                    span {
                        border: 1px solid #6194F4;
                        background: #6194F4;
                        transform: scale(1.25);

                        &::after {
                            width: 10px;
                            background: #fff;
                            transition: width 150ms ease 100ms;
                        }

                        &::before {
                            width: 5px;
                            background: #fff;
                            transition: width 150ms ease 100ms
                        }
                    }
                }
            }
        }
    }

    span {
        position: relative;
        display: inline-block;
        width: 23px;
        height: 23px;
        background-color: transperant;
        transform-object: center;
        border: 1px solid #ddd;
        border-radius: 50%;
        vertical-align: -6px;
        margin-left: 15px;
        transition: background-color 150ms 200ms, transform 350ms cubic-bezier(.78, -1.22, .17, 1.89);

        &::before {
            content: "";
            width: 0;
            height: 2px;
            border-radius: 2px;
            background: #6194F4;
            position: absolute;
            transform: rotate(45deg);
            top: 10px;
            left: 7px;
            transition: width 50ms ease 50ms;
            transform-origin: 0% 0%;
        }

        &::after {
            content: "";
            width: 0;
            height: 2px;
            border-radius: 2px;
            background: #6194F4;
            position: absolute;
            transform: rotate(305deg);
            top: 14px;
            left: 8px;
            transition: width 50ms ease;
            transform-origin: 0% 0%;
        }
    }
`;

export default CheckBoxWrapper;