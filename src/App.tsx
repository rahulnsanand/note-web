import React, { useState }  from 'react';
import './App.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/Default/NotFound';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Archive from './pages/Archive/Archive';
import Trash from './pages/Trash/Trash';
import Search from './pages/Search/Search';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Ensures your theme is applied globally */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/search" element={<Search />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
