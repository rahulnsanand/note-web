import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggleButton from '../../components/buttons/ThemeToggleButton'

const Home: React.FC = () => {
  const navigate = useNavigate();

  // State to track whether dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className='homeMaster'>
      <ThemeToggleButton isDarkMode={isDarkMode}  toggleTheme={toggleTheme}></ThemeToggleButton>
    </div>
  );
};

export default Home;
