import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useSetGlobalContext } from './GlobalContext';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useSetGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle">
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" onClick={toggleDarkTheme} />
        ) : (
          <BsFillSunFill className="toggle-icon" onClick={toggleDarkTheme} />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
