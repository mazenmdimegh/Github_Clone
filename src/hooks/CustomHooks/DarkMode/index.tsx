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
      {/* <img src="https://image.flaticon.com/icons/svg/1164/1164954.svg" width="224" height="224" alt="Sun free icon" title="Sun free icon"/>
      <img src="https://image.flaticon.com/icons/svg/2033/2033921.svg" width="224" height="224" alt="Moon free icon" title="Moon free icon"/> */}
      <Icon icon="tabler:sun-filled"  width={20} />
      <Icon icon="tabler:sun-filled"  width={20} color="#fff"/>
      {/* <Icon icon="tabler:sun" width={20}/> */}
    </ToggleContainer>
  );
};