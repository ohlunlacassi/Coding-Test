import Nav from "../components/Layout/Nav";
import GlobalStyle from "../styles.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
