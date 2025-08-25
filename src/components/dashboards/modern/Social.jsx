import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography, Avatar, Box, AvatarGroup } from '@mui/material';
import { IconMessage2 } from '@tabler/icons-react';

import DashboardCard from '../../shared/DashboardCard';
import ProfileImg from '../../../../public/images/assets/images/profile/user-1.jpg';
import User1Img from '../../../../public/images/assets/images/profile/user-2.jpg';
import User2Img from '../../../../public/images/assets/images/profile/user-3.jpg';
import User3Img from '../../../../public/images/assets/images/profile/user-4.jpg';
import User4Img from '../../../../public/images/assets/images/profile/user-5.jpg';

const Social = () => {
    return (
        <DashboardCard>
            <>
                <Stack direction="row" spacing={2} >
                    <Avatar
                        src={'/images/assets/images/profile/user-1.jpg'}
                        alt={ProfileImg}
                        sx={{ borderRadius: '8px', width: 70, height: 70 }}
                    />
                    <Box>
                        <Typography variant="h5">Super awesome, Vue coming soon!</Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            22 March, 2025
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" justifyContent="space-between" mt={5}>
                    <AvatarGroup max={4}>
                        <Avatar alt="Remy Sharp" src={'/images/assets/images/profile/user-2.jpg'} />
                        <Avatar alt="Travis Howard" src={'/images/assets/images/profile/user-3.jpg'} />
                        <Avatar alt="Cindy Baker" src={'/images/assets/images/profile/user-4.jpg'} />
                        <Avatar alt="Agnes Walker" src={'/images/assets/images/profile/user-5.jpg'} />
                    </AvatarGroup>
                    <a href="/">
                        <Box
                            width="40px"
                            height="40px"
                            bgcolor="primary.light"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                             borderRadius={2}
                        >
                            <Typography
                                color="white"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                               
                            >
                                <IconMessage2 width={22} />
                            </Typography>
                        </Box>
                    </a>
                </Stack>
            </>
        </DashboardCard>
    );
};

export default Social;
