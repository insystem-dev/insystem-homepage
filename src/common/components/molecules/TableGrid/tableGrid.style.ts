import styled from 'styled-components';

const TableGridWrapper = styled.table`
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    font-size: 1.4rem;
    letter-spacing: -.5px;
    border-top 1px solid #000;
    border-bottom: 1px solid #000;
    border-collapse: collapse;

    tr {
        height: 45px;

        &+ tr {
            border-top: 1px solid #d9d9d9;
        }

        .tr-nodata {
            height: 250px;
            text-align: center;
        }
    }

    thead {
        background: #F5F5F5;
        border-bottom: 1px solid #D9D9D9;

        th {
            font-weight: 500;
        }
    }
`;

export default TableGridWrapper;