import './mck-bootstrap.min.css';
import React from 'react';
import './ActiveEngagement.scss'
import _ from 'lodash';
import {
    Container, Grid, HEADING_SIX, Icon, Input, Table, ThemeProvider, TYPE_OUTLINE, Typography,
} from '@mds/mds-reactjs-library';


const GroupedInput = function (props) {
    return (<div className="input-group">
        <div className="input-group-prepend">
            <div className="input-group-text">
                <Icon src={props.iconSrc} type={TYPE_OUTLINE} size={16}/>
            </div>
        </div>
        <Input type="text" className="form-control" id={props.id} placeholder={props.placeholder}/>
    </div>)
}

const EngagementCard = function (props) {
    const engagement = props.engagement;
    return (<div className="engagement-card">
        <div className="engagement-code">{engagement.code}</div>
        <div className="engagement-company-name">{engagement.companyName}</div>
        <div className="engagement-status">{engagement.status}</div>
    </div>);
}

const CodeCellRenderer = args => {
    const {value} = args;
    return (<div className="code-cell">{value}</div>);
};

const TextCellRenderer = args => {
    const {value} = args;
    return (<div className="text-cell">{value}</div>);
};


const HeaderRenderer = args => {
    const {columnData} = args;
    return (<div className="header-cell">{columnData.label}</div>);
}

const ActiveEngagements = function () {


    const engagements = [{
        companyName: "Company A", code: "1234AB", status: "Completed",
    }, {
        companyName: "Company A", code: "1234AB", status: "Completed",
    }, {
        companyName: "Company A", code: "1234AB", status: "Completed",
    }, {
        companyName: "Company A", code: "1234AB", status: "Completed",
    }]

    const columns = [{
        dataKey: 'chargeCode', label: 'Charge code', width: 120, CellRenderer: CodeCellRenderer, HeaderRenderer,
    }, {
        dataKey: 'client', label: 'Client', width: 100, flexGrow: true, CellRenderer: TextCellRenderer, HeaderRenderer,
    }, {
        dataKey: 'projectName',
        label: 'Project name',
        width: 100,
        flexGrow: true,
        CellRenderer: TextCellRenderer,
        HeaderRenderer,
    }, {
        dataKey: 'requestor',
        label: 'Requestor',
        width: 100,
        flexGrow: true,
        CellRenderer: TextCellRenderer,
        HeaderRenderer,
    }, {
        dataKey: 'stage', label: 'Stage', width: 100, flexGrow: true, CellRenderer: TextCellRenderer, HeaderRenderer,
    }, {
        dataKey: 'status', label: 'Status', width: 100, CellRenderer: TextCellRenderer, HeaderRenderer,
    }];
    const rows = [{
        chargeCode: "1234AB",
        client: "TechM",
        projectName: "E2E growth diagnostic",
        requestor: "Saurabh",
        stage: "New project creation",
        status: 39,
    }, {
        chargeCode: "1234AB",
        client: "TechM",
        projectName: "E2E growth diagnostic",
        requestor: "Saurabh",
        stage: "New project creation",
        status: 39,
    }, {
        chargeCode: "1234AB",
        client: "TechM",
        projectName: "E2E growth diagnostic",
        requestor: "Saurabh",
        stage: "New project creation",
        status: 39,
    }];

    return (<ThemeProvider customTheme={{
        table: {
            rowBgColor: '#FFFFFF',
            rowBorderBottom: '#D0D0D0',
            cellTextColor: '#000000',
            lightHeaderTextColor: '#000000',
            lightHeaderBgColor: '#FFFFFF',
        }
    }}>
        <Container responsive>
            <Grid container style={{height: '100vh'}}>
                <Grid item span={12}>
                    <div className="d-flex flex-row">
                        <div className="engagement-container">
                            <Typography type={HEADING_SIX} className="engagement-title">Past
                                engagements</Typography>
                            {_.map(engagements, engagement => {
                                return <EngagementCard engagement={engagement}/>
                            })}
                        </div>
                        <div className="active-engagements-container">
                            <Typography className="active-engagements-title">Active Engagements</Typography>
                            <Table
                                className="active-engagements-table"
                                dark={false} columns={columns}
                                striped={false}
                                rows={rows}
                                rowHeight={80}
                                height={"auto"}
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </ThemeProvider>);
};
export default ActiveEngagements;
