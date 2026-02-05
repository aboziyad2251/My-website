import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../data/translations';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark'); // 'light', 'dark', 'vibrant'
    const [lang, setLang] = useState('en'); // 'en', 'ar'

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    }, [lang]);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    const toggleLang = () => {
        setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
    };

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[lang];
        for (let k of keys) {
            value = value?.[k];
        }
        return value || key;
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
