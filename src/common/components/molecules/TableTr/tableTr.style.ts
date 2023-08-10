import styled from 'styled-components';

const TrWrapper = styled.tr`
    &:hover {
        background: #F6F6FC;
    }

    &.notice-fixed {
        color: #4E83E7;
        font-weight: 600;
        background: #FAFAFD;

        a {
            color: #4E83E7;
        }

        &:hover {
            background: #F6F6FC;
        }
    }

    td {
        width: 10%;
        padding: 0 10px;
        text-align: center;

        &.td-title {
            width: 66%;
            padding: 0 30px;
            text-align: left;

            &:hover {
                cursor: pointer;
            }
        }

        &.td-id, &.td-views {
            width: 7%;
        }
        
        a {
            display: inline-block;
            width: 100%;
            height: 45px;
            line-height: 45px;
        }
    }
`;

export default TrWrapper;