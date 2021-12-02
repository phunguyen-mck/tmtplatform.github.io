import React , {useState} from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import "./Tabs.css";
export default function IndustryTabs({tabIndex,handleOnChange,handleTabClick}) {
    const tabLabels = [
        {
          id: 1,
          title: "Overall financials & strategic priorities",
          content: "Test",
        },
        {
          id: 2,
          title: "Top digital offerings",
          content: "Test2",
        },
        {
          id: 3,
          title: "IT spend map",
          content: "Test2",
        },
        {
          id: 4,
          title: "Past deals and upcoming renewals",
          content: "Test2",
        },
        {
          id: 5,
          title: "Major deals by peers",
          content: "Test2",
        },
        {
          id: 6,
          title: "Org and key stakeholders",
          content: "Test2",
        },
      ];
    return (
        <div>
         <Tabs value={tabIndex} key={tabIndex} onChange={handleOnChange} onClick={()=>handleTabClick(tabIndex)} aria-label="icon label tabs example">   
        {tabLabels.map((tab,index)=>{
                  return <Tab className="tabStyle" icon={<CheckCircleOutlinedIcon />} label={tab.title} />
        })}
        </Tabs>
        </div>
    )
}
