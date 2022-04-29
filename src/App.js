import { useState } from 'react';
import './App.css';
import Page from './components/Page.js';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {
  const [isDark, setIsDark] = useState(true);
  
  return (
    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
