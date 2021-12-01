import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classnames from "classnames";
import {offeringMockDetails,crossCuttingOffering} from "../constant/mockTopOffering";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";


export default function TopOfferingContent() {
const [cardActiveIndex,setCardActiveIndex] = React.useState(0);
  const renderCardPercentageValue = (value) => {
    if (value === 15) {
      return <span>15-25%</span>;
    } else if (value === 25) {
      return <span>25%+</span>;
    }
    return <span>10-15%</span>;
  };
  const handleActiveCard =(index) =>{
      setCardActiveIndex(index)
  }
  return (
      <div>
      <Grid container item spacing={1}>
      <Grid container item spacing={3}>

        {offeringMockDetails.map((offer, index) => {
          return (
              <Grid item xs={3}>
                  <Card className={cardActiveIndex===offer.id ?  "activeCard" : "card"} onClick={()=>handleActiveCard(offer.id)} sx={{ maxWidth: "400px" }}>
                    <CardContent className="cardContentContainer">
                      <Typography sx={{ fontSize: 16 }} gutterBottom>
                        <strong>{offer.title}</strong>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <div className="money-value">
                        <Typography sx={{ fontSize: 20, color: "blue" }}>
                          {offer.value}
                        </Typography>
                      </div>
                      <div className="percentage-wrapper">
                        <div className="cagr-wrapper">
                          <Typography
                            className="cagr-text"
                            sx={{ fontSize: 10 }}
                            >
                            {offer.percentage.date}
                          </Typography>
                        </div>
                        <div
                          className={classnames("percentage-value", {
                            blue: offer.percentage.value === 15,
                            orange: offer.percentage.value === 25,
                            lightBlue: offer.percentage.value === 10,
                          })}
                        >
                          {renderCardPercentageValue(offer.percentage.value)}
                        </div>
                      </div>
                    </CardActions>
                  </Card>
              </Grid>
          );
        })}
      </Grid>
      </Grid>
      <Typography className="cardHeading" tablet>
         Cross cutting offerings
        </Typography>
        <Grid container item spacing={1}>
      <Grid container item spacing={3}>
        {crossCuttingOffering.map((cuttingOffer,index)=>{
            return(
               <Grid item xs={3}>
               <Card className={cardActiveIndex===cuttingOffer.id ?  "activeCard" : "card"} onClick={()=>handleActiveCard(cuttingOffer.id)} sx={{ maxWidth: "400px" }}>
                 <CardContent className="cardContentAutoHeight">
                   <Typography sx={{ fontSize: 16 }} gutterBottom>
                    <strong>{cuttingOffer.name}</strong> {cuttingOffer.content}
                   </Typography>
                 </CardContent>
                 <CardActions className="percentage-wrapper-flex-end" >
                   <div >
                     <div className="cagr-wrapper">
                       <Typography
                         className="cagr-text"
                         sx={{ fontSize: 10 }}
                       >
                         {cuttingOffer.percentage.date}
                       </Typography>
                     </div>
                     <div
                       className={classnames("percentage-value", {
                         blue: cuttingOffer.percentage.value === 15,
                         orange: cuttingOffer.percentage.value === 25,
                         lightBlue: cuttingOffer.percentage.value === 10,
                       })}
                     >
                       {renderCardPercentageValue(cuttingOffer.percentage.value)}
                     </div>
                   </div>
                 </CardActions>
               </Card>
           </Grid>
            )
        })}
        </Grid>
        </Grid>
      </div>
  );
}
