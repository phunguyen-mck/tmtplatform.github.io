import * as React from 'react';
import { styled } from '@mui/material/styles';
import estyled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../../SelectJourney/FinancialOverall/table.scss';
import './OppourtunityMap.scss';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import {
  ThemeProvider,
  Button,
  SECONDARY_BUTTON,
} from '@mds/mds-reactjs-library';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
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
const ButtonStyled = styled(Button)`
  margin-right: 12px;
  margin-bottom: 12px;
`;

const rowsData = [
  {
    oppourtunity: (
      <div className="oppoutunity-wrapper">
        <div className="oppurtunity-container">
          <strong>
            <p className="oppoutunity-heading">Cloud Infra</p>
          </strong>
          <p>(Top digital priority)</p>
        </div>
      </div>
    ),

    stakeholder: <div className="stakeholder-cell">I</div>,
    tcv: <div className="tcv-cell" />,
    pursuitOwner: <div className="pursuit-cell">I</div>,
    timeline: <div className="timeline-cell">I</div>,
    action: (
      <div className="action-cell">
        {' '}
        <DeleteIcon />{' '}
      </div>
    ),
  },
  {
    oppourtunity: (
      <div className="oppoutunity-wrapper">
        <div className="oppurtunity-container">
          <strong>
            <p className="oppoutunity-heading">Cloud Infra</p>
          </strong>
          <p>(Top digital priority)</p>
        </div>
      </div>
    ),

    stakeholder: <div className="stakeholder-cell">I</div>,
    tcv: <div className="tcv-cell" />,
    pursuitOwner: <div className="pursuit-cell">I</div>,
    timeline: <div className="timeline-cell">I</div>,
    action: (
      <div className="action-cell">
        {' '}
        <DeleteIcon />{' '}
      </div>
    ),
  },
  {
    oppourtunity: (
      <div className="oppoutunity-wrapper">
        <div className="oppurtunity-container">
          <strong>
            <p className="oppoutunity-heading">Cloud Infra</p>
          </strong>
          <p>(Top digital priority)</p>
        </div>
      </div>
    ),

    stakeholder: <div className="stakeholder-cell">I</div>,
    tcv: <div className="tcv-cell" />,
    pursuitOwner: <div className="pursuit-cell">I</div>,
    timeline: <div className="timeline-cell">I</div>,
    action: (
      <div className="action-cell">
        {' '}
        <DeleteIcon />{' '}
      </div>
    ),
  },
  {
    oppourtunity: (
      <div className="oppoutunity-wrapper">
        <div className="oppurtunity-container">
          <strong>
            <p className="oppoutunity-heading">Cloud Infra</p>
          </strong>
          <p>(Top digital priority)</p>
        </div>
      </div>
    ),

    stakeholder: <div className="stakeholder-cell">I</div>,
    tcv: <div className="tcv-cell" />,
    pursuitOwner: <div className="pursuit-cell">I</div>,
    timeline: <div className="timeline-cell">I</div>,
    action: (
      <div className="action-cell">
        {' '}
        <DeleteIcon />{' '}
      </div>
    ),
  },
  {
    oppourtunity: (
      <div className="oppoutunity-wrapper">
        <div className="oppurtunity-container">
          <strong>
            <p className="oppoutunity-heading">Cloud Infra</p>
          </strong>
          <p>(Top digital priority)</p>
        </div>
      </div>
    ),

    stakeholder: <div className="stakeholder-cell">I</div>,
    tcv: <div className="tcv-cell" />,
    pursuitOwner: <div className="pursuit-cell">I</div>,
    timeline: <div className="timeline-cell">I</div>,
    action: (
      <div className="action-cell">
        {' '}
        <DeleteIcon />{' '}
      </div>
    ),
  },
  {
    oppourtunity: (
      <div className="oppoutunity-wrapper">
        <div className="oppurtunity-container">
          <strong>
            <p className="oppoutunity-heading">Cloud Infra</p>
          </strong>
          <p>(Top digital priority)</p>
        </div>
      </div>
    ),

    stakeholder: <div className="stakeholder-cell">I</div>,
    tcv: <div className="tcv-cell" />,
    pursuitOwner: <div className="pursuit-cell">I</div>,
    timeline: <div className="timeline-cell">I</div>,
    action: (
      <div className="action-cell">
        {' '}
        <DeleteIcon />{' '}
      </div>
    ),
  },
];
export default function OppourtunityMap({}) {
  return (
    <ThemeProvider>
      <TableContainer className="tableContainer" component="div">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead className="table-header">
            <TableRow>
              <HeaderCell className="oppurtunity-th" align="left">
                Opportunity
              </HeaderCell>
              <HeaderCell className="stakeholder-th" align="left">
                Stakeholder
              </HeaderCell>
              <HeaderCell className="tcv-th" align="left">
                TCV
              </HeaderCell>
              <HeaderCell className="pursuit-th" align="left">
                {' '}
                Pursuit owner
              </HeaderCell>
              <HeaderCell className="timeline-th" align="left">
                Timeline
              </HeaderCell>
              <HeaderCell className="action-th" align="left"></HeaderCell>
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
                  <StyledTableCell
                    className="oppourtunity-cell-wrapper"
                    align="left"
                  >
                    {row.oppourtunity}
                  </StyledTableCell>
                  <StyledTableCell
                    className="stakeholder-cell-wrapper"
                    align="left"
                  >
                    {row.stakeholder}
                  </StyledTableCell>
                  <StyledTableCell className="tcv-cell-wrapper " align="left">
                    {row.tcv}
                  </StyledTableCell>
                  <StyledTableCell
                    className="pursuitOwner-cell-wrapper"
                    align="left"
                  >
                    {row.pursuitOwner}
                  </StyledTableCell>
                  <StyledTableCell
                    className="timeline-cell-wrapper"
                    align="left"
                  >
                    {row.timeline}
                  </StyledTableCell>
                  <StyledTableCell className="action-cell-wrapper" align="left">
                    {row.action}
                  </StyledTableCell>
                </StyledTableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="footer-container">
        <div className="add-row-wrapper">
          <div className="icon-container-plus">
            <AddCircleOutlineRoundedIcon />
          </div>
          <div className="add-row-text">Add row</div>
        </div>
        <div className="download-container">
          <ButtonStyled appearance={SECONDARY_BUTTON}>
            Download a/c plan
            <FileUploadOutlinedIcon />
          </ButtonStyled>
        </div>
      </div>
    </ThemeProvider>
  );
}
