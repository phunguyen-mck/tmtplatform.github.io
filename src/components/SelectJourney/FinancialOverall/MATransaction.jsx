import * as React from 'react';
import { styled } from '@mui/material/styles';
import estyled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './MATransaction.scss';
import './table.scss';

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
    buyerCompany: 'Text to come',
    targetCompany: 'Text to come',
    comments: 'Text to come',
    announcedDate: 'xxxx',
    closingDate: 'xxxx',
    consideration: 'xxxx',
    marketCap: 'xxxx',
    intensity: 'xxxx',
  },
  {
    buyerCompany: 'Text to come',
    targetCompany: 'Text to come',
    comments: 'Text to come',
    announcedDate: 'xxxx',
    closingDate: 'xxxx',
    consideration: 'xxxx',
    marketCap: 'xxxx',
    intensity: 'xxxx',
  },
  {
    buyerCompany: 'Text to come',
    targetCompany: 'Text to come',
    comments: 'Text to come',
    announcedDate: 'xxxx',
    closingDate: 'xxxx',
    consideration: 'xxxx',
    marketCap: 'xxxx',
    intensity: 'xxxx',
  },
  {
    buyerCompany: 'Text to come',
    targetCompany: 'Text to come',
    comments: 'Text to come',
    announcedDate: 'xxxx',
    closingDate: 'xxxx',
    consideration: 'xxxx',
    marketCap: 'xxxx',
    intensity: 'xxxx',
  },
  {
    buyerCompany: 'Text to come',
    targetCompany: 'Text to come',
    comments: 'Text to come',
    announcedDate: 'xxxx',
    closingDate: 'xxxx',
    consideration: 'xxxx',
    marketCap: 'xxxx',
    intensity: 'xxxx',
  },
  {
    buyerCompany: 'Text to come',
    targetCompany: 'Text to come',
    comments: 'Text to come',
    announcedDate: 'xxxx',
    closingDate: 'xxxx',
    consideration: 'xxxx',
    marketCap: 'xxxx',
    intensity: 'xxxx',
  },
  {
    buyerCompany: 'Text to come',
    targetCompany: 'Text to come',
    comments: 'Text to come',
    announcedDate: 'xxxx',
    closingDate: 'xxxx',
    consideration: 'xxxx',
    marketCap: 'xxxx',
    intensity: 'xxxx',
  },
];
export default function ExecutiveChanges({}) {
  return (
    <TableContainer className="tableContainer" component="div">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className="table-header">
          <TableRow>
            <HeaderCell align="left">Buyer Company</HeaderCell>
            <HeaderCell align="left">Target Company</HeaderCell>
            <HeaderCell align="left">Announce Date</HeaderCell>
            <HeaderCell align="left">Closing Date</HeaderCell>
            <HeaderCell className="comment-cell" align="left">
              Comments
            </HeaderCell>
            <HeaderCell className="consideration-cell" align="left">
              Consideration to SH (in USD m)
            </HeaderCell>
            <HeaderCell className="marketcap-cell" align="left">
              Market Cap(in USD m)
            </HeaderCell>
            <HeaderCell align="left">Intensity</HeaderCell>
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
                <StyledTableCell align="left">
                  {row.buyerCompany}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.targetCompany}
                </StyledTableCell>
                <StyledTableCell className="" align="left">
                  {row.announcedDate}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.closingDate}
                </StyledTableCell>
                <StyledTableCell className="comment-cell" align="left">
                  {row.comments}
                </StyledTableCell>
                <StyledTableCell className="consideration-cell" align="left">
                  {row.consideration}
                </StyledTableCell>
                <StyledTableCell className="marketcap-cell" align="left">
                  {row.marketCap}
                </StyledTableCell>
                <StyledTableCell align="left">{row.intensity}</StyledTableCell>
              </StyledTableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
