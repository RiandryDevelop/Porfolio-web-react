import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const GOOGLE_FONTS_HREF =
  'https://fonts.googleapis.com/css2' +
  '?family=Bricolage+Grotesque:opsz,wght@12..96,400..800' +
  '&family=Inter:wght@400;500;600;700' +
  '&family=JetBrains+Mono:wght@400;500' +
  '&display=swap';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    // Follow the active locale so screen readers and search engines get the
    // right language instead of a hardcoded one.
    const locale = this.props.__NEXT_DATA__?.locale || 'es';

    return (
      <Html lang={locale}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link href={GOOGLE_FONTS_HREF} rel="stylesheet" />

          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#08090C" />

          {/*
            Scroll reveals render their `hidden` state into the server HTML, so
            without JavaScript the page would be almost entirely invisible.
            This forces every pre-hidden element back into view; it only applies
            when scripting is off, so it never fights the real animation.
          */}
          <noscript>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '[style*="opacity:0"]{opacity:1!important;transform:none!important}',
              }}
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
