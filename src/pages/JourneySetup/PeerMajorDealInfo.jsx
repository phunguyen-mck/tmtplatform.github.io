import React, { useMemo } from 'react';

import MajorDealTable from './MajorDealTable';

const PeerMajorDealInfo = () => {
  const majorDeals = useGetPeerMajorDeals();
  return (
    <div>
      <MajorDealTable majorDeals={majorDeals} />
    </div>
  );
};

export default PeerMajorDealInfo;

const useGetPeerMajorDeals = () => {
  const peerMajorDeals = useMemo(() => getPeerMajorDeals(), []);
  return peerMajorDeals;
};

const getPeerMajorDeals = () => {
  function createData(theme, client, itsProvider, tvs, startYear, duration) {
    return { theme, client, itsProvider, tvs, startYear, duration };
  }

  return [
    createData(
      'Retail - Core banking platform',
      "Williams & Glyn's",
      'Infosys',
      267.08,
      2013,
      5
    ),
    createData(
      'Cap markets - Digital trading',
      'Royal Bank of Scotland',
      'Infosys',
      267.08,
      2012,
      3
    ),
    createData(
      'CIB - Customer journey',
      'SIX Telekurs AG',
      'Atos',
      267.08,
      2011,
      3
    ),
    createData(
      'Retail - Digital bank transformation',
      'Grupo Financiero Banorte Ixe S. A.',
      'IBM',
      534.16,
      2014,
      4
    ),
  ];
};
