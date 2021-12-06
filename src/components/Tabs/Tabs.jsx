import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import classnames from 'classnames';
import { Container } from '@mds/mds-reactjs-library';
import './Tabs.scss';
export default function IndustryTabs({
  tabIndex,
  handleOnChange,
  handleTabClick,
  isWithIcon,
  tabLabels,
  tabsSelected,
}) {
  const renderTabIcon = (index) => {
    if (isWithIcon && tabsSelected !== null) {
      if (tabsSelected.includes(index)) {
        return <CheckCircleOutlinedIcon />;
      }
    }
  };
  return (
    <Container>
      <Tabs
        value={tabIndex}
        key={tabIndex}
        onChange={handleOnChange}
        onClick={() => handleTabClick(tabIndex)}
        aria-label="icon label tabs example"
        className="tabContainer"
      >
        {tabLabels.map((tab, index) => {
          return (
            <Tab
              className={classnames('tabStyle', {
                isActiveTab: tabIndex === index,
              })}
              icon={renderTabIcon(index)}
              label={
                <div>
                  <span
                    className={classnames({
                      subTab: !isWithIcon,
                      tabTitle: tabIndex !== index,
                    })}
                  >
                    {tab.title}
                  </span>
                </div>
              }
            />
          );
        })}
      </Tabs>
    </Container>
  );
}
