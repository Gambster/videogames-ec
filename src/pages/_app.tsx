import type { AppProps } from "next/app";
// ** Global css styles
import "../../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
