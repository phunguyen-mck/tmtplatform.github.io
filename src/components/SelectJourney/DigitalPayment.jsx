import * as React from 'react';
import css from './DigitalPayment.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Icon, Typography, BODY_DEFAULT } from '@mds/mds-reactjs-library';
import ProfileWithBlackSVG from '../../images/profile-blackground.svg';
import ProfileWithGreySVG from   '../../images/profile-greybackground.svg';

export default function DigitalPayment({ dashboardTitle }) {
	return (
		<div>
			<div>
				<Typography className="cardHeading" type={BODY_DEFAULT} tablet>
					Digital payments architecture enablement and management
				</Typography>
			</div>
			<Box className="wrapper" sx={{ flexGrow: 1 }}>
				<Grid container spacing={3}>
					<Grid className="wrapper-grid" item xs="4">
						<div>
							<Typography className="cardHeading" type={BODY_DEFAULT} tablet>
								Top use cases for Citi Bank
							</Typography>
						</div>
						<span className="free-flow-text"> Degree of importance </span>
						<div className="box-container">
							<p className="box-content">
								Monitoring
								<Icon
									className="icon-container"
									name="f-info"
									type={'outline'}
									size={24}
								/>
							</p>
						</div>
						<div className="box-container-cloud">
							<p className="box-content">
								Cloud
								<Icon
									className="icon-container"
									name="f-info"
									type={'outline'}
									size={24}
								/>
							</p>
						</div>
						<div className="box-container-automation">
							<p className="box-content">
								Automation
								<Icon
									className="icon-container"
									name="f-info"
									type={'outline'}
									size={24}
								/>
							</p>
						</div>
						<div className="box-container-api">
							<p className="box-content-black-text">
								API Enablement
								<Icon
									className="icon-container"
									name="f-info"
									type={'outline'}
									size={24}
								/>
							</p>
						</div>
						<div className="box-container-pm">
							<p className="box-content-black-text">
								Product management
								<Icon
									className="icon-container"
									name="f-info"
									type={'outline'}
									size={24}
								/>
							</p>
						</div>
						<div className="box-container-ts">
							<p className="box-content-black-text">
								Transaction security
								<Icon
									className="icon-container"
									name="f-info"
									type={'outline'}
									size={24}
								/>
							</p>
						</div>
						<div className="box-container-compliance">
							<p className="box-content-black-text">
								Compliance & fraud detection
								<Icon
									className="icon-container"
									name="f-info"
									type={'outline'}
									size={24}
								/>
							</p>
						</div>
					</Grid>
					<Grid item xs={4}>
						<div>
							<Typography className="cardHeading" type={BODY_DEFAULT} tablet>
								Impact Metrics
							</Typography>
							<div className="box-grey">
								<p>Reduced cost per transaction</p>
								<p>Increase in total no of transactions </p>
								<p>Increase in revenue from third party partners </p>
								<p>Increase in customer base </p>
								<p>Increase in avg. revenue per customer</p>
							</div>
							<div>
								<Typography className="cardHeading" type={BODY_DEFAULT} tablet>
									Skills and competencies
								</Typography>
							</div>
							<div className="box-grey">
								<span>
									Legacy Modernization, Mobile, UI/UX, Big Data/analytics, AI/
									ML, Cloud (IaaS), Cloud (SaaS), Cyber Security, Blockchain
								</span>
							</div>
							<div>
								<Typography className="cardHeading" type={BODY_DEFAULT} tablet>
									Marquee Deals
								</Typography>
							</div>
							<div className="box-grey">
								<span>
									Janalakshmi Financial Services (JFS) (IBM, 125M USD, 2014)
									Morgan Stanley (TCS, 90M USD, 2012)
								</span>
							</div>
						</div>
					</Grid>
					<Grid item xs={4}>
						<div>
                            <Typography className="cardHeading" type={BODY_DEFAULT} tablet>
                             Expert Network
							</Typography>
                            <div className="table-wrapper" >
                            <div className="table-container">
                                <div className="profile-with-black">
                                    <div className="icon-profile-container">
                                       <img src={ProfileWithBlackSVG} />
                                     </div>  
                                     <div className="title-container">
                                         Ex-Account Expert
                                         </div> 
                                </div>
                                <div className="profile-container-column">
                                <div className="profile-with-grey">
                                <div className="icon-margin">
                                        <img src={ProfileWithGreySVG} />
                                    </div>
                                    <div className="profile-container">
                                        <span>
                                        Lowell McAdam
                                        </span>
                                        <br/>
                                        <span>
                                        Ex-CEO, Citi
                                        </span>
                                    </div>
                                </div>    
                                <div className="profile-with-grey">
                                    <div className="icon-margin">
                                        <img src={ProfileWithGreySVG} />
                                    </div>
                                    <div className="profile-container">
                                        <span>
                                        Lowell McAdam
                                        </span>
                                        <br/>

                                        <span>
                                        Ex-CEO, Citi
                                        </span>
                                    </div>
                                </div>   
                                <div className="profile-with-grey">
                                <div className="icon-margin">
                                        <img src={ProfileWithGreySVG} />
                                    </div>
                                    <div>
                                        <span>
                                        Lowell McAdam
                                        </span>
                                        <br/>

                                        <span>
                                        Ex-CEO, Citi
                                        </span>
                                    </div>
                                </div>   
                                </div>
                            </div>
                            <hr className="break-line"/>
                            <div className="table-container">
                                <div className="profile-with-black">
                                    <div className="icon-profile-container">
                                       <img src={ProfileWithBlackSVG} />
                                     </div>  
                                     <div className="title-container">
                                         Ex-Account Expert
                                         </div> 
                                </div>
                                <div className="profile-container-column">
                                <div className="profile-with-grey">
                                <div className="icon-margin">
                                        <img src={ProfileWithGreySVG} />
                                    </div>
                                    <div className="profile-container">
                                        <span>
                                        Lowell McAdam
                                        </span>
                                        <br/>
                                        <span>
                                        Ex-CEO, Citi
                                        </span>
                                    </div>
                                </div>    
                                <div className="profile-with-grey">
                                    <div className="icon-margin">
                                        <img src={ProfileWithGreySVG} />
                                    </div>
                                    <div className="profile-container">
                                        <span>
                                        Lowell McAdam
                                        </span>
                                        <br/>

                                        <span>
                                        Ex-CEO, Citi
                                        </span>
                                    </div>
                                </div>   
                                <div className="profile-with-grey">
                                <div className="icon-margin">
                                        <img src={ProfileWithGreySVG} />
                                    </div>
                                    <div>
                                        <span>
                                        Lowell McAdam
                                        </span>
                                        <br/>

                                        <span>
                                        Ex-CEO, Citi
                                        </span>
                                    </div>
                                </div>   
                                </div>
                            </div>
                        </div>
                        </div>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}
