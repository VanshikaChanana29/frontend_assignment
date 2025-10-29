"use client";
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.style.setProperty('--background', theme === 'dark' ? '#0a0a0a' : '#ffffff');
    document.documentElement.style.setProperty('--foreground', theme === 'dark' ? '#ededed' : '#000000');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded"
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;