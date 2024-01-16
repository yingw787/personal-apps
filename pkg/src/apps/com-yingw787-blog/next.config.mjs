// eslint-disable-next-line @typescript-eslint/no-var-requires
import { composePlugins, withNx } from "@nx/next";
import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.ts'
  // ... your Nextra config
})

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

export default composePlugins(...plugins)(withNextra(nextConfig));

// //@ts-check


// const withNextra = require("nextra")({
//   theme: "nextra-theme-blog",
//   themeConfig: "./theme.config.ts",
//   // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
// });

// module.exports = composePlugins(...plugins)(withNextra(nextConfig));
