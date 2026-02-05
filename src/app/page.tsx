'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from 'next/link';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '90vh',
          textAlign: 'center',
          backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(35, 134, 54, 0.1) 0%, rgba(0,0,0,0) 70%)',
        }}
      >
        <SettingsSuggestIcon sx={{ fontSize: 100, color: 'primary.main', mb: 2, opacity: 0.8 }} />
        <Typography variant="h1" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
          IRON LOGIC
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 6, color: 'text.secondary', maxWidth: '600px' }}>
          Industrial Grade Performance Tracking
        </Typography>

        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            component={Link}
            href="/client"
            variant="contained"
            color="primary"
            size="large"
            sx={{ py: 2, px: 6, fontSize: '1.2rem', minWidth: '250px' }}
          >
            Client Portal
          </Button>

          <Button
            component={Link}
            href="/coach"
            variant="outlined"
            color="secondary"
            size="large"
            sx={{ py: 2, px: 6, fontSize: '1.2rem', minWidth: '250px' }}
          >
            Coach Dashboard
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
