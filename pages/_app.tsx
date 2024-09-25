import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider theme={{ globalStyles: true, normalizeCSS: true }}>
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default MyApp;
