'use client';
import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0e1116', // Dark industrial grey
      paper: '#161b22', // Slightly lighter
    },
    primary: {
      main: '#238636', // Industrial Green (like status lights)
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#da3633', // Alert Red
    },
    info: {
        main: '#58a6ff', // Blue prints
    },
    text: {
      primary: '#c9d1d9',
      secondary: '#8b949e',
    },
    divider: '#30363d',
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          textTransform: 'uppercase',
          boxShadow: 'none',
          '&:hover': {
             boxShadow: '0px 0px 8px rgba(88, 166, 255, 0.4)',
          }
        },
        containedPrimary: {
            backgroundColor: '#238636',
            '&:hover': {
                backgroundColor: '#2ea043',
            }
        }
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid #30363d',
        },
      },
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: '#161b22',
                borderBottom: '1px solid #30363d',
            }
        }
    }
  },
});

export default theme;
