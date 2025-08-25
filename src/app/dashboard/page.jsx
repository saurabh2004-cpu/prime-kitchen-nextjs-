'use client';

import React from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';

import TopCards from '../../components/dashboards/modern/TopCards.jsx';
import RevenueUpdates from '../../components/dashboards/modern/RevenueUpdates';
import YearlyBreakup from '../../components/dashboards/modern/YearlyBreakup';
import MonthlyEarnings from '../../components/dashboards/modern/MonthlyEarnings.jsx';
import EmployeeSalary from '../../components/dashboards/modern/EmployeeSalary';
import Customers from '../../components/dashboards/modern/Customers.jsx';
import Projects from '../../components/dashboards/modern/Projects.jsx';
import Social from '../../components/dashboards/modern/Social';
import SellingProducts from '../../components/dashboards/modern/SellingProducts.jsx';
import WeeklyStats from '../../components/dashboards/modern/WeeklyStats.jsx'
import TopPerformers from '../../components/dashboards/modern/TopPerformers.jsx';


const page = () => {
  return (
    <Box sx={{ px: 12, py: 1, backgroundColor: 'background.default' } }>
      <Grid container spacing={3}>
        {/* column */}
        <Grid size={12}>
          <TopCards />
        </Grid>
        {/* column */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <RevenueUpdates />
        </Grid>
        {/* column */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Grid spacing={3} container columns={{ xs: 12, sm: 6 }}>
            <Grid size={12}>
              <YearlyBreakup />
            </Grid>
            <Grid size={12}>
              <MonthlyEarnings />
            </Grid>
          </Grid>
        </Grid>
        {/* column */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <EmployeeSalary />
        </Grid>
        {/* column */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Grid spacing={3} container columns={{ xs: 12, sm: 6 }}>
            <Grid size={{ xs: 12, md: 6, lg: 'grow' }}>
              <Customers />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 'grow' }}>
              <Projects />
            </Grid>
            <Grid size={12}>
              <Social />
            </Grid>
          </Grid>
        </Grid>
        {/* column */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <SellingProducts />
        </Grid>
        {/* column */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <WeeklyStats />
        </Grid>
        {/* column */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <TopPerformers />
        </Grid>
      </Grid>
{/* column */ }
{/* <Welcome /> */ }
    </Box >
  );
};

export default page;
