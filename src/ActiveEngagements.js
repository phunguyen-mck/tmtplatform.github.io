import './mck-bootstrap.min.css';
import React from 'react';
import './ActiveEngagement.scss'
import _ from 'lodash';
import {
    Container, DISPLAY_SIX, Grid, HEADING_SIX, Icon, Input, Table, ThemeProvider, TYPE_OUTLINE, Typography,
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

    const columns = [{dataKey: 'name', label: 'Name', width: 100, sortable: true}, {
        dataKey: 'surname', label: 'Surname', width: 100, flexGrow: true
    }, {dataKey: 'age', label: 'Age', width: 100, flexGrow: true},];
    const rows = [{name: 'John', surname: 'Lennon', age: 40}, {name: 'Paul', surname: 'McCartney', age: 38},];

    return (<ThemeProvider className="ActiveEngagements">
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
                        <div style={{flexGrow: 1}}>
                            <Typography type={DISPLAY_SIX} mobile>Active Engagements</Typography>
                            <Table className="mt-4" responsive columns={columns} rows={rows}/>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </ThemeProvider>);
};
export default ActiveEngagements;
