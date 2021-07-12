import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/reset';
import theme from '../styles/theme';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 500,
    });
  });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
