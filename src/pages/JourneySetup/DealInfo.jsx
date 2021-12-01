import React, { useMemo } from 'react';
import { Grid } from '@mds/mds-reactjs-library';

import DealCard from './DealCard';

// List the past & upcoming deals
const DealInfo = () => {
  const pastDeals = useGetPastDeals();
  const upcomingDeals = useGetUpcomingDeals();
  return (
    <Grid container spacing={48} className="m-auto">
      <Grid item>
        <Grid container spacing={48}>
          {pastDeals.map((deal) => (
            <Grid item>
              <DealCard deal={deal} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item>
        <DealCard upcoming={true} deal={upcomingDeals[0]} />
      </Grid>
    </Grid>
  );
};

export default DealInfo;

const useGetPastDeals = () => {
  const deals = useMemo(() => getPastDeals(), []);
  return deals;
};

const getPastDeals = () => [
  {
    vendorName: 'HCL',
    year: '2012',
    theme: 'Next-gen ADM & IT outsourcing',
    tcv: '$220M',
    expirationDate: '02-2018',
  },
  {
    vendorName: 'Wipro',
    year: '2012',
    theme: 'Cloud and infra modernization',
    tcv: '$550M',
    expirationDate: '02-2019',
  },
];

const useGetUpcomingDeals = () => {
  const deals = useMemo(() => getUpcomingDeals(), []);
  return deals;
};

const getUpcomingDeals = () => [
  {
    vendorName: 'NIIT',
    year: 2017,
    theme: 'Managed infrastructure outsourcing',
    tcv: '$15M',
    expirationDate: '02-2022',
  },
];
