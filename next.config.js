const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n,
  compiler: {
    // SWC handles the styled-components transform, so no Babel config is
    // needed and builds stay on the fast path.
    styledComponents: true,
  },
};
