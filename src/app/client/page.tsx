'use client';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import WorkoutLog from '../../components/Client/WorkoutLog';
import NutritionLog from '../../components/Client/NutritionLog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function ClientPage() {
    const [value, setValue] = useState(0);
    const theme = useTheme();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="home" component={Link} href="/">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2, letterSpacing: '0.1em' }}>
                        CLIENT PORTAL
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="md" sx={{ mt: 2 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} centered textColor="primary" indicatorColor="primary">
                        <Tab icon={<FitnessCenterIcon />} label="WORKOUT" iconPosition="start" />
                        <Tab icon={<RestaurantIcon />} label="NUTRITION" iconPosition="start" />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <WorkoutLog />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <NutritionLog />
                </CustomTabPanel>
            </Container>
        </Box>
    );
}
