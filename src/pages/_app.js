import Theme from "../styles/Theme";
import { appWithTranslation } from "next-i18next";
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

export default appWithTranslation(MyApp);
