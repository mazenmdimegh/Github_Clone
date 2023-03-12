import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import ToggleContainer from "./styles";

type Theme = 'light' | 'dark';

export const useDarkMode = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme as Theme);
    } else {
      window.localStorage.setItem('theme', 'light');
    }
  }, [])

  return [theme, toggleTheme]
};

type ToggleProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export const Toggle = ({ theme, toggleTheme }: ToggleProps) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <Icon icon="tabler:sun-filled"  width={20} />
      <Icon icon="tabler:sun-filled"  width={20} color="#fff"/>
    </ToggleContainer>
  );
};