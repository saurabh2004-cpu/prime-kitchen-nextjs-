import React from 'react';
import { Box, CardContent, Typography } from '@mui/material';
import { Grid } from '@mui/material';

// import icon1 from '/assets/images/svgs/icon-connect.svg';
// import icon2 from '../../../../public/assets/images/svgs/icon-user-male.svg';
// import icon3 from '../../../../public/assets/images/svgs/icon-briefcase.svg';
// import icon4 from '../../../../public/assets/images/svgs/icon-mailbox.svg';
// import icon5 from '../../../../public/assets/images/svgs/icon-favorites.svg';
// import icon6 from '../../../../public/assets/images/svgs/icon-speech-bubble.svg';

const topcards = [
  {
    icon: '/images/assets/images/svgs/icon-connect.svg',
    title: 'Employees',
    digits: '96',
    bgcolor: 'primary',
  },
  {
    icon: '/images/assets/images/svgs/icon-user-male.svg',
    title: 'Clients',
    digits: '3,650',
    bgcolor: 'warning',
  },
  {
    icon: '/images/assets/images/svgs/icon-briefcase.svg',
    title: 'Projects',
    digits: '356',
    bgcolor: 'secondary',
  },
  {
    icon: '/images/assets/images/svgs/icon-mailbox.svg',
    title: 'Events',
    digits: '696',
    bgcolor: 'error',
  },
  {
    icon: '/images/assets/images/svgs/icon-favorites.svg',
    title: 'Payroll',
    digits: '$96k',
    bgcolor: 'success',
  },
  {
    icon: '/images/assets/images/svgs/icon-speech-bubble.svg',
    title: 'Reports',
    digits: '59',
    bgcolor: 'info',
  },
];

const TopCards = () => {
  return (
    <Grid container spacing={3}>
      {topcards.map((topcard, i) => (
        <Grid size={{ xs: 12, sm: 4, lg: 2 }} key={i}>
          <Box  bgcolor={`${topcard.bgcolor}.light`}   borderRadius={2}    textAlign="center">
            <CardContent>
              <img src={topcard.icon} alt={topcard.icon} width="50" />
              <Typography
                color={'white'}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >
                {topcard.title}
              </Typography>
              <Typography color={'white'} variant="h4" fontWeight={600}>
                {topcard.digits}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
