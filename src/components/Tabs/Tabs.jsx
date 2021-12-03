import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import './Tabs.css';
export default function IndustryTabs({
  tabIndex,
  handleOnChange,
  handleTabClick,
  isWithIcon,
  tabLabels,
}) {
  console.log('tabIndex', tabIndex);
  return (
    <div>
      <Tabs
        value={tabIndex}
        key={tabIndex}
        onChange={handleOnChange}
        onClick={() => handleTabClick(tabIndex)}
        aria-label="icon label tabs example"
      >
        {tabLabels.map((tab, index) => {
          return (
            <Tab
              className="tabStyle"
              icon={isWithIcon && <CheckCircleOutlinedIcon />}
              label={tab.title}
            />
          );
        })}
      </Tabs>
    </div>
  );
}
