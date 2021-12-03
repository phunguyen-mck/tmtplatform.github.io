import * as React from 'react';
import { styled } from '@mui/material/styles';
import estyled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './RecentDevelopment.scss';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: '#7F7F7F',
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  'box-shadow': '0px 0px 8px rgba(21, 21, 21, 0.08)',
  opacity: 1,
}));

const HeaderCell = ({ children, ...props }) => {
  const InnerWrapper = estyled.div`
    display: flex;
  `;

  return (
    <StyledTableCell {...props}>
      <InnerWrapper>{children}</InnerWrapper>
    </StyledTableCell>
  );
};
const rowsData = [
  {
    news: 'Text to come',
    change: 'xxxx',
    link: 'xxxx',
  },
  {
    news: 'Text to come',
    change: 'xxxx',
    link: 'xxxx',
  },
  {
    news: 'Text to come',
    change: 'xxxx',
    link: 'xxxx',
  },
  {
    news: 'Text to come',
    change: 'xxxx',
    link: 'xxxx',
  },
  {
    news: 'Text to come',
    change: 'xxxx',
    link: 'xxxx',
  },
  {
    news: 'Text to come',
    change: 'xxxx',
    link: 'xxxx',
  },
  {
    news: 'Text to come',
    change: 'xxxx',
    link: 'xxxx',
  },
  {
    news: 'Text to come',
    change: 'xxxx',
    link: 'xxxx',
  },
  {
    news: 'Text to come',
    change: 'xxxx',
    link: 'xxxx',
  },
  {
    news: 'Text to come',
    change: 'xxxx',
    link: 'xxxx',
  },
  {
    news: 'Text to come',
    change: 'xxxx',
    link: 'xxxx',
  },
  {
    news: 'Text to come',
    change: 'xxxx',
    link: 'xxxx',
  },
  {
    news: 'Text to come',
    change: 'xxxx',
    link: 'xxxx',
  },
];
export default function ExecutiveChanges({}) {
  return (
    <TableContainer className="tableContainer" component="div">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className="table-header">
          <TableRow>
            <HeaderCell align="left">Developments/news</HeaderCell>
            <HeaderCell align="left">Change</HeaderCell>
            <HeaderCell align="left">Link</HeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((row, index) => (
            <React.Fragment>
              {index !== 0 && (
                <TableRow>
                  <div style={{ width: 34, height: 16 }} />
                </TableRow>
              )}
              <StyledTableRow className="table-row" key={index}>
                <StyledTableCell align="left">{row.news}</StyledTableCell>
                <StyledTableCell align="left">{row.change}</StyledTableCell>
                <StyledTableCell className="link-cell" align="left">
                  {row.link}
                </StyledTableCell>
              </StyledTableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
