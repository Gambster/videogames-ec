import { Fragment } from "react";
import type { AppProps } from "next/app";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      {children}
      xxx
    </div>
  );
};

export default Main;
