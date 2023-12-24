import type { AppProps } from "next/app";
import Main from "@/layouts/main";
// ** Global css styles
import "../../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (component: React.JSX.Element) => <Main>{component}</Main>;

  return (
    <main {...pageProps}>
      {getLayout(<Component {...pageProps}></Component>)}
    </main>
  );
}
