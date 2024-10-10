'use client';
import { useEffect, useState } from 'react';

import style from '@/components/css/style.module.css'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  // Carregar o tema salvo no localStorage ou o padrão do sistema
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
      document.documentElement.classList.add(systemTheme);
    }
  }, []);

  // Função para alternar o tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    /* From Uiverse.io by juanpabl0svn */ 
    <label htmlFor="switch" className={style.switch}>
      <input id="switch" onClick={toggleTheme} type="checkbox" />
      <span className={style.slider}></span>
      <span className={style.decoration}></span>
    </label>
  
  );
}
