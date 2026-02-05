'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, AppBar, IconButton, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

export default function CoachDashboard() {
    const [workouts, setWorkouts] = useState([]);
    const [meals, setMeals] = useState([]);
    const [macros, setMacros] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const w = localStorage.getItem('workout_logs');
            if (w) setWorkouts(JSON.parse(w));

            const m = localStorage.getItem('nutrition_meals');
            if (m) setMeals(JSON.parse(m));

            const mac = localStorage.getItem('nutrition_macros');
            if (mac) setMacros(JSON.parse(mac));
        }
    }, []);

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <AppBar position="static" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" component={Link} href="/">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1, ml: 2, color: 'primary.main', letterSpacing: '0.1em' }}>
                        COACH DASHBOARD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Box sx={{ mb: 4, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 700 }}>CLIENT OVERSIGHT</Typography>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary' }}>ID: CLIENT-001</Typography>
                </Box>

                {/* Visual Summary */}
                {macros && (
                    <Paper sx={{ mb: 4, p: 3, bgcolor: 'background.paper', border: '1px solid #30363d' }}>
                        <Typography variant="h6" gutterBottom color="primary">TODAY'S MACRO SNAPSHOT</Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box sx={{ flex: 1 }}>
                                <Box sx={{ p: 2, border: '1px solid #238636', borderRadius: 1, textAlign: 'center' }}>
                                    <Typography variant="caption" display="block">PROTEIN</Typography>
                                    <Typography variant="h4" color="primary">{macros.protein}g</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Box sx={{ p: 2, border: '1px solid #58a6ff', borderRadius: 1, textAlign: 'center' }}>
                                    <Typography variant="caption" display="block">CARBS</Typography>
                                    <Typography variant="h4" sx={{ color: '#58a6ff' }}>{macros.carbs}g</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Box sx={{ p: 2, border: '1px solid #da3633', borderRadius: 1, textAlign: 'center' }}>
                                    <Typography variant="caption" display="block">FATS</Typography>
                                    <Typography variant="h4" color="secondary">{macros.fats}g</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                )}

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                    <Box sx={{ flex: { md: 7 }, width: '100%' }}>
                        <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary', borderBottom: '2px solid #238636', display: 'inline-block', mb: 2 }}>WORKOUT LOGS</Typography>
                        <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Exercise</TableCell>
                                        <TableCell>Details</TableCell>
                                        <TableCell align="right">RPE</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {workouts.length === 0 && (
                                        <TableRow>
                                            <TableCell colSpan={4} align="center">No Data</TableCell>
                                        </TableRow>
                                    )}
                                    {workouts.map((row: any) => (
                                        <TableRow key={row.id}>
                                            <TableCell sx={{ color: 'text.secondary', fontFamily: 'monospace' }}>
                                                {new Date(row.date).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.sets} x {row.reps} @ {row.weight}kg</TableCell>
                                            <TableCell align="right">
                                                {row.reliefMode ? <Typography variant="caption" sx={{ color: '#da3633', border: '1px solid #da3633', px: 0.5 }}>RELIEF</Typography> : row.rpe}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <Box sx={{ flex: { md: 5 }, width: '100%' }}>
                        <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary', borderBottom: '2px solid #58a6ff', display: 'inline-block', mb: 2 }}>NUTRITION LOGS</Typography>
                        <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Time</TableCell>
                                        <TableCell>Item</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {meals.length === 0 && (
                                        <TableRow>
                                            <TableCell colSpan={2} align="center">No Data</TableCell>
                                        </TableRow>
                                    )}
                                    {meals.map((row: any) => (
                                        <TableRow key={row.id}>
                                            <TableCell sx={{ color: 'text.secondary', fontFamily: 'monospace' }}>
                                                {new Date(row.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </TableCell>
                                            <TableCell>{row.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
