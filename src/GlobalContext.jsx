//1.- AppContext, 2.- AppProvider, 3.- setGlobalContext
//Imports
import { createContext, useContext, useState, useEffect } from 'react';

//New context instance

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  let userPreference = localStorage.getItem('darkTheme'); //False

  // Si userPreference es null, es decir, no hay preferencia guardada,
  // entonces retornamos prefersDarkMode, que es la preferencia del sistema.

  if (userPreference === null) {
    return prefersDarkMode;
  }
  // Aquí, estás comparando si userPreference es igual a la cadena 'true'.
  // Si es así, retornas true, indicando que el tema oscuro debe estar activado.
  // Si userPreference es cualquier otra cosa (en este caso, 'false' o cualquier otra cadena),
  // retornas false, indicando que el tema oscuro no debe estar activado.
  console.log(userPreference === 'true');
  return userPreference === 'true';
};
console.log(getInitialDarkMode());
//Context data
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('cat');
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
    // const body = document.querySelector('body');
    // body.classList.toggle('dark-theme', newDarkTheme);
    // , "toggle" puede ser un término un poco confuso en este contexto. La función classList.toggle() en realidad alterna la presencia de una clase en un elemento. Si la clase ya está presente, la elimina, y si no está presente, la agrega. Entonces, en el contexto de cambiar un tema oscuro o claro, la función está agregando la clase "dark-theme" si no está presente y eliminándola si ya está presente
  };
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);
  const updateSearchTerm = (text) => {
    setSearchTerm(text);
  };

  //Función para cambiar el estado de el modo nocturno o diurno

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, updateSearchTerm, searchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Create hook
export const useSetGlobalContext = () => {
  return useContext(AppContext);
};
