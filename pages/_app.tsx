import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import useTracking from "hooks/useTracking";
import theme from "styles/theme";
import "styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  useTracking();

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
