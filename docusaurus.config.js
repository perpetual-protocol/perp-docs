const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Perpetual Protocol",
    tagline:
      "On-chain perpetual futures DEX with deep liquidity and builder-ready composability.",
    url: "https://docs.perp.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "perpetual-protocol", // Usually your GitHub org/user name.
    projectName: "perp-docs", // Usually your repo name.
    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            // TODO: need to update his link after we make this repo public accessible
            editUrl:
              "https://github.com/perpetual-protocol/perp-docs/tree/main/",
          },
          // blog: {
          //   showReadingTime: true,
          //   // Please change this to your repo.
          //   editUrl:
          //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
          // },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Perpetual Protocol",
          logo: {
            alt: "Perpetual Protocol Logo",
            src: "img/logo.png",
          },
          items: [
            { to: 'docs/contract-overview', label: 'Contracts', position: 'left' },
            // NOTE: uncomment this when sdk doc is ready
            // { to: 'docs/guides/data-source', label: 'SDK', position: 'left' },
            { to: 'docs/guides/data-source', label: 'Usage Guide', position: 'right' },
            {
              href: "https://perpprotocol.mirror.xyz/",
              label: "Blog",
              position: "right",
            },
            {
              // TODO: need to update his link after we make this repo public accessible
              href: 'https://github.com/perpetual-protocol/perp-docs',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository',
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Contract",
                  to: "/docs/contract-overview",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Discord",
                  href: "https://discord.com/invite/SxK4Zw9NgQ",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/perpprotocol",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "GitHub",
                  // TODO: need to update his link after we make this repo public accessible
                  href: "https://github.com/perpetual-protocol/perp-docs",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Perpetual Protocol docs, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["solidity"],
        },
        algolia: {
          apiKey: '9f3501510e023882845791911e5c113a',
          indexName: 'perp-docs',
          appId: '3TBGQBHK03',
          contextualSearch: false,
        },
      }),
  }
);
