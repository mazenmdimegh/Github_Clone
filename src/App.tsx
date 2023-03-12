import './App.css';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/profile';
import NotFound from './components/NotFound';
import { Toggle, useDarkMode } from './hooks/CustomHooks/DarkMode';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './hooks/CustomHooks/DarkMode/styles';



function App() {

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/NotFound" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
