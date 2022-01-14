import "../styles/globals.css";
import { SWRConfig } from "swr";
import { fetcher } from "helper/swr";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ refreshInterval: 0, fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
