import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react"; // 新增：引入统计功能

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics /> {/* 新增：在页面底部添加统计组件 */}
    </>
  );
}