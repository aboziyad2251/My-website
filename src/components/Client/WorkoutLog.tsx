'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Switch, FormControlLabel, Slider, Paper, Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

interface ExerciseLog {
    id: string;
    date: string;
    name: string;
    sets: number;
    reps: number;
    weight: number;
    rpe: number | null;
    reliefMode: boolean;
}

export default function WorkoutLog() {
    const [exercises, setExercises] = useState<ExerciseLog[]>([]);
    const [reliefMode, setReliefMode] = useState(false);

    // Form state
    const [name, setName] = useState('');
    const [sets, setSets] = useState(3);
    const [reps, setReps] = useState(10);
    const [weight, setWeight] = useState(40);
    const [rpe, setRpe] = useState(7);

    useEffect(() => {
        const saved = localStorage.getItem('workout_logs');
        if (saved) {
            try {
                setExercises(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse logs", e);
            }
        }
    }, []);

    const saveLog = (newLog: ExerciseLog) => {
        const updated = [newLog, ...exercises];
        setExercises(updated);
        localStorage.setItem('workout_logs', JSON.stringify(updated));
    }

    const handleSubmit = () => {
        const log: ExerciseLog = {
            id: uuidv4(),
            date: new Date().toISOString(),
            name,
            sets,
            reps,
            weight,
            rpe: reliefMode ? null : rpe,
            reliefMode
        };
        saveLog(log);
        setName('');
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <FormControlLabel
                control={<Switch checked={reliefMode} onChange={(e) => setReliefMode(e.target.checked)} color="secondary" />}
                label={
                    <Box>
                        <Typography variant="subtitle1" fontWeight="bold" color={reliefMode ? 'secondary' : 'text.primary'}>
                            RELIEF MODE
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            Simplify tracking when fatigued
                        </Typography>
                    </Box>
                }
                sx={{ mb: 3, border: '1px solid #30363d', p: 1, borderRadius: 2, width: '100%', mx: 0 }}
            />

            <Paper sx={{ p: 3, mb: 4, border: reliefMode ? '1px solid #da3633' : '1px solid #238636' }}>
                <Typography variant="h6" gutterBottom color="primary">
                    {reliefMode ? 'LIGHT SESSION LOG' : 'LOG SET'}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box>
                        <TextField
                            fullWidth
                            label="Exercise Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            variant="filled"
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                            type="number"
                            label="Sets"
                            fullWidth
                            value={sets}
                            onChange={e => setSets(Number(e.target.value))}
                            variant="filled"
                        />
                        <TextField
                            type="number"
                            label="Reps"
                            fullWidth
                            value={reps}
                            onChange={e => setReps(Number(e.target.value))}
                            variant="filled"
                        />
                        <TextField
                            type="number"
                            label="Kg"
                            fullWidth
                            value={weight}
                            onChange={e => setWeight(Number(e.target.value))}
                            variant="filled"
                        />
                    </Box>
                    {!reliefMode && (
                        <Box sx={{ mt: 1 }}>
                            <Typography gutterBottom variant="body2" color="text.secondary">RPE (Rate of Perceived Exertion)</Typography>
                            <Box sx={{ px: 2 }}>
                                <Slider
                                    value={rpe}
                                    onChange={(e, v) => setRpe(v as number)}
                                    step={1} marks min={1} max={10}
                                    valueLabelDisplay="auto"
                                    color="secondary"
                                />
                            </Box>
                        </Box>
                    )}
                    <Box sx={{ mt: 1 }}>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleSubmit}
                            disabled={!name}
                            size="large"
                        >
                            ADD WORKOUT
                        </Button>
                    </Box>
                </Box>
            </Paper>

            <Typography variant="h6" sx={{ mb: 2, opacity: 0.7 }}>RECENT LOGS</Typography>
            <Box>
                {exercises.length === 0 && (
                    <Typography variant="body2" color="text.secondary" textAlign="center">No logs yet.</Typography>
                )}
                {exercises.map(ex => (
                    <Paper key={ex.id} sx={{ p: 2, mb: 2, bgcolor: 'background.paper', borderLeft: `4px solid ${ex.reliefMode ? '#da3633' : '#238636'}` }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Box>
                                <Typography variant="subtitle1" fontWeight="bold">{ex.name}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                    {ex.sets} sets x {ex.reps} reps @ {ex.weight}kg
                                </Typography>
                            </Box>
                            {!ex.reliefMode && ex.rpe && (
                                <Box sx={{ textAlign: 'right' }}>
                                    <Typography variant="caption" display="block" color="text.secondary">RPE</Typography>
                                    <Typography variant="h6" color="secondary">{ex.rpe}</Typography>
                                </Box>
                            )}
                            {ex.reliefMode && (
                                <Box sx={{ textAlign: 'right' }}>
                                    <Typography variant="caption" sx={{ color: '#da3633', border: '1px solid #da3633', px: 1, py: 0.5, borderRadius: 1 }}>RELIEF</Typography>
                                </Box>
                            )}
                        </Box>
                        <Typography variant="caption" display="block" sx={{ mt: 1, opacity: 0.5 }}>
                            {new Date(ex.date).toLocaleDateString()} {new Date(ex.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
}
