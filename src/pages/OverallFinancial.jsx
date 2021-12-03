import React from 'react';
import IndustryTabs from '../components/Tabs/Tabs';
import { overAllFinanceTabLabels } from '../constant/TabLabels';
import {
  FINANCIAL_PERFOMANCE_TAB,
  COMPARISION_PEERS_TAB,
  RECENT_DEVELOPMENT_TAB,
  MATransactions_TAB,
  EXECUTIVE_CHANGES_TAB,
} from '../constant/mockFinancialOverall';
import ComparisionPeers from 'components/SelectJourney/FinancialOverall/ComparisionPeers';
import FinancialPerformance from 'components/SelectJourney/FinancialOverall/FinancialPerformance';
import ExecutiveChanges from 'components/SelectJourney/FinancialOverall/ExecutiveChanges';
import MATransaction from 'components/SelectJourney/FinancialOverall/MATransaction';
import RecentDevelopment from 'components/SelectJourney/FinancialOverall/RecentDevelopment';
export default function OverallFinancial() {
  const [tabIndex, setTabIndex] = React.useState(3);
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  const handleTabClick = (event, newValue) => {
    return;
  };
  const renderTabContent = () => {
    if (tabIndex === FINANCIAL_PERFOMANCE_TAB) {
      return <FinancialPerformance />;
    } else if (tabIndex === COMPARISION_PEERS_TAB) {
      return <ComparisionPeers />;
    } else if (tabIndex === RECENT_DEVELOPMENT_TAB) {
      return <RecentDevelopment />;
    } else if (tabIndex === MATransactions_TAB) {
      return <MATransaction />;
    }
    return <ExecutiveChanges />;
  };
  console.log('tabIndex', tabIndex);
  return (
    <div>
      <IndustryTabs
        tabIndex={tabIndex}
        handleOnChange={handleTabChange}
        handleTabClick={handleTabClick}
        isWithIcon={false}
        tabLabels={overAllFinanceTabLabels}
      />
      {renderTabContent()}
    </div>
  );
}
