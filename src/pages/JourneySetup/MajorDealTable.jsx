import * as React from 'react';
import { Icon } from '@mds/mds-reactjs-library';
import { styled } from '@mui/material/styles';
import estyled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import FilterIcon from 'components/Icons/Filter.svg';
import Outline24Eye from '@mds/mds-icons/icons/svg/outline-16-eye.svg';
import Outline16NEdit from '@mds/mds-icons/icons/svg/outline-16-n-edit.svg';
import Outline16Filter from '@mds/mds-icons/icons/svg/outline-16-filter.svg';

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
    justify-content: space-between;
  `;

  return (
    <StyledTableCell {...props}>
      <InnerWrapper>
        {children}
        <Icon src={FilterIcon} size={32} type="outlined" />
      </InnerWrapper>
    </StyledTableCell>
  );
};

export default function MajorDealTable({ majorDeals }) {
  return (
    <TableContainer component="div">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <HeaderCell>Theme</HeaderCell>
            <HeaderCell align="left">Client</HeaderCell>
            <HeaderCell align="left">ITS Provider</HeaderCell>
            <HeaderCell align="left">TVS ($M)</HeaderCell>
            <HeaderCell align="left">Year of deal</HeaderCell>
            <HeaderCell align="left">Duration</HeaderCell>
            <StyledTableCell>
              <Icon src={Outline16Filter} />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {majorDeals.map((row, index) => (
            <React.Fragment>
              {index !== 0 && (
                <TableRow>
                  <div style={{ width: 34, height: 16 }} />
                </TableRow>
              )}
              <StyledTableRow key={row.theme}>
                <StyledTableCell component="th" scope="row">
                  {row.theme}
                </StyledTableCell>
                <StyledTableCell align="left">{row.client}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.itsProvider}
                </StyledTableCell>
                <StyledTableCell align="left">{row.tvs}</StyledTableCell>
                <StyledTableCell align="left">{row.startYear}</StyledTableCell>
                <StyledTableCell align="left">{row.duration}</StyledTableCell>
                <StyledTableCell>
                  <Icon src={Outline16NEdit} type="outlined" className="mr-3" />
                  <Icon src={Outline24Eye} type="outlined" />
                </StyledTableCell>
              </StyledTableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
