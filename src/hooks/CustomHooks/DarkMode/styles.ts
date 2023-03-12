import styled, { createGlobalStyle } from "styled-components";

export interface Theme {
  body: string;
  text: string;
  toggleBorder: string;
  gradient: string;
  btnstyle: string;
  title: string;
  textprimary: string;
  borderinput: string;
}
export const lightTheme: Theme = {
  body: '#ffff',
  text: '#363537',
  textprimary: '',
  borderinput: '',
  title: '',
  toggleBorder: '#fff',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  btnstyle: ""

};

export const darkTheme: Theme = {
  body: '#363537',
  text: '#FAFAFA',
  textprimary: 'rgb(145 144 144)',
  borderinput: 'none',
  title: 'rgb(83 152 253) ',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  btnstyle: `#212529;`
};

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  // *,
  // *::after,
  // *::before {
  //   box-sizing: border-box;
  // }

  body {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    // padding: 0;
    // margin: 0;
    // font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  // footer {
  //   position: absolute;
  //   bottom: 5%;
  //   left: 50%;
  //   transform: translateX(-50%);
  // }

  // small {
  //   display: block;
  // }

  .btn {
    background-color:${({ theme }) => theme.btnstyle}!important;
    border-color:${({ theme }) => theme.textprimary};
    
  }
  .dropdown-menu{
    background-color:${({ theme }) => theme.btnstyle};
    color:${({ theme }) => theme.text};
  }
  .w-100 >input {
    background-color:${({ theme }) => theme.btnstyle} !important;
    border:${({ theme }) => theme.borderinput};
    
  }

  .btn>a {
    color: ${({ theme }) => theme.text}!important;
  }
  .btn:hover {
    >a{
    color: ${({ theme }) => theme.body}!important;
    }
  }
  .nav-link {
    color: ${({ theme }) => theme.textprimary}!important;
  }
  p {
    color: ${({ theme }) => theme.textprimary}!important;
  }
  small {
    color: ${({ theme }) => theme.textprimary}!important;
  }
  .text-dark {
    color: ${({ theme }) => theme.textprimary}!important;
  }
  
  a {
    color: ${({ theme }) => theme.text}!important;
  }
  .evjwQc {
    color: ${({ theme }) => theme.title}!important;
  }
`;




interface ToggleContainerProps {
  lightTheme: boolean;
  theme: {
    gradient: string;
    toggleBorder: string;
  };
}

const ToggleContainer = styled.button<ToggleContainerProps>`

  position: absolute;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 4rem;
  height: 2rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 5px;
  overflow: hidden;
  cursor: pointer;
  z-index:1;
  margin: 1px 18px;
  box-shadow: 0px 1px 6px 0px #888888;
  svg {
    max-width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) =>
    lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
    lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

export default ToggleContainer;