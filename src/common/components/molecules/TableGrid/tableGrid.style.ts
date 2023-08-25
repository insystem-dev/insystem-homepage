import styled from "styled-components";

export const TableBox = styled.table`
  width: 100%;
  font-size: 1.6rem;
  border-collapse: collapse;
  border-top: 1px solid ${(props) => props.theme.colors.tableBorder};
  border-bottom: 1px solid ${(props) => props.theme.colors.tableBorder};
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  height: 50px;
  background: ${(props) => props.theme.colors.tableHeaderBg};
  border-bottom: 1px solid ${(props) => props.theme.colors.tableInnerBorder};
`;

export const NodataTr = styled.tr``;

export const NodataTd = styled.td``;

export const TableGridWrapper = styled.table`
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    font-size: 1.4rem;
    letter-spacing: -.5px;
    border-top 1px solid #000;
    border-bottom: 1px solid #000;
`;
