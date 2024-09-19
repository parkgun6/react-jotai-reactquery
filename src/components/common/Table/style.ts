import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
  text-align: left;
`;

export const TableHeader = styled.thead`
  background-color: #f4f4f4;
`;

export const TableHeaderCell = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  font-weight: bold;
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #ffffff;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  cursor: pointer;
`;
