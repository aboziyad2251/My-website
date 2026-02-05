'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Paper, Grid, CircularProgress } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

interface MealLog {
    id: string;
    date: string;
    description: string;
}

export default function NutritionLog() {
    const [macros, setMacros] = useState({ protein: 0, carbs: 0, fats: 0 });
    const [dailyGoals] = useState({ protein: 200, carbs: 250, fats: 70 });

    const [mealInput, setMealInput] = useState('');
    const [meals, setMeals] = useState<MealLog[]>([]);

    useEffect(() => {
        // Load data
        const savedMeals = localStorage.getItem('nutrition_meals');
        if (savedMeals) setMeals(JSON.parse(savedMeals));

        const savedMacros = localStorage.getItem('nutrition_macros');
        if (savedMacros) setMacros(JSON.parse(savedMacros));
    }, []);

    const updateMacros = (key: 'protein' | 'carbs' | 'fats', value: number) => {
        const newMacros = { ...macros, [key]: Math.max(0, macros[key] + value) };
        setMacros(newMacros);
        localStorage.setItem('nutrition_macros', JSON.stringify(newMacros));
    };

    const addMeal = () => {
        if (!mealInput) return;
        const newMeal = { id: uuidv4(), date: new Date().toISOString(), description: mealInput };
        const updatedMeals = [newMeal, ...meals];
        setMeals(updatedMeals);
        localStorage.setItem('nutrition_meals', JSON.stringify(updatedMeals));
        setMealInput('');
    };

    const MacroCircle = ({ label, value, goal, color, field }: any) => {
        const percentage = Math.min(100, (value / goal) * 100);
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress variant="determinate" value={100} sx={{ color: '#30363d' }} size={80} />
                    <CircularProgress variant="determinate" value={percentage} sx={{ color: color, position: 'absolute', left: 0 }} size={80} />
                    <Box
                        sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="caption" component="div" color="text.secondary">
                            {Math.round(percentage)}%
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="body2" sx={{ mt: 1, fontWeight: 'bold' }}>{label}</Typography>
                <Typography variant="caption" color="text.secondary">{value} / {goal}g</Typography>
                <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                    <Button size="small" variant="outlined" sx={{ minWidth: 30, p: 0.5 }} onClick={() => updateMacros(field, 10)}>+10</Button>
                    <Button size="small" variant="outlined" sx={{ minWidth: 30, p: 0.5 }} onClick={() => updateMacros(field, -10)}>-</Button>
                </Box>
            </Box>
        )
    }

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <Paper sx={{ p: 3, mb: 4 }}>
                <Typography variant="h6" gutterBottom color="primary">DAILY MACROS</Typography>
                <Grid container justifyContent="space-around" spacing={2}>
                    <Grid item>
                        <MacroCircle label="Protein" value={macros.protein} goal={dailyGoals.protein} color="#238636" field="protein" />
                    </Grid>
                    <Grid item>
                        <MacroCircle label="Carbs" value={macros.carbs} goal={dailyGoals.carbs} color="#58a6ff" field="carbs" />
                    </Grid>
                    <Grid item>
                        <MacroCircle label="Fats" value={macros.fats} goal={dailyGoals.fats} color="#da3633" field="fats" />
                    </Grid>
                </Grid>
            </Paper>

            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom color="primary">MEAL LOGGER</Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                    <TextField
                        fullWidth
                        label="Log meal..."
                        value={mealInput}
                        onChange={e => setMealInput(e.target.value)}
                        variant="filled"
                        onKeyPress={(e) => e.key === 'Enter' && addMeal()}
                    />
                    <Button variant="contained" onClick={addMeal} sx={{ minWidth: 80 }}>
                        ADD
                    </Button>
                </Box>

                <Box>
                    {meals.length === 0 && <Typography variant="caption" color="text.secondary">No meals logged today.</Typography>}
                    {meals.map(meal => (
                        <Box key={meal.id} sx={{ p: 1.5, borderBottom: '1px solid #30363d', display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body1">{meal.description}</Typography>
                            <Typography variant="caption" color="text.secondary">
                                {new Date(meal.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Paper>
        </Box>
    );
}
