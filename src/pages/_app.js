import Theme from "../styles/Theme";
import { SearchProvider } from "../context/SearchContext";

function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </SearchProvider>
  );
}

export default MyApp;
