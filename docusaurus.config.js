const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Perpetual Protocol",
  tagline: "On-chain perpetual futures DEX with deep liquidity and builder-ready composability.",
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
          editUrl: "https://github.com/perpetual-protocol/perp-docs/tree/main/",
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
          { to: "docs/contract-overview", label: "Contracts", position: "left" },
          { to: "docs/guides/data-source", label: "Usage Guide", position: "right" },
          {
            href: "https://perpprotocol.mirror.xyz/",
            label: "Blog",
            position: "right",
          },
          {
            href: "https://github.com/perpetual-protocol/perp-docs",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        // style: "dark",
        links: [
          {
            title: "Product",
            items: [
              {
                label: "Launch App",
                to: "https://app.perp.com",
              },
              {
                label: "Tokenomics",
                to: "https://token.perp.com",
              },
              { label: "Vaults", to: "https://perp.com/featured-partners" },
              // NOTE: these 2 links are broken. Wait for update from marketing team
              // { label: "Leaderboard", to: "https://perpetual.io/leaderboard" },
              // { label: "Analytics", to: "https://perpetual.io/analytics" },
            ],
          },
          {
            title: "Protocol",
            items: [
              { label: "About", to: "https://perp.com" },
              { label: "Blog", to: "https://blog.perp.fi/" },
              { label: "Newsletter", to: "https://www.getrevue.co/profile/perpprotocol/" },
              { label: "Jobs", to: "https://jobs.perp.fi/" },
              { label: "Shop", to: "https://shop.perp.fi/" },
            ],
          },
          {
            title: "Resources",
            items: [
              { label: "FAQ", to: "http://support.perp.com/" },
              { label: "Developers", to: "https://perp.com/developers" },
              { label: "Learn", to: "https://perp.com/learn" },
              { label: "Ecosystem", to: "https://perp.com/ecosystem" },
              { label: "Perpvangelist", to: "https://perp.com/perpvangelist" },
              { label: "Governance", to: "https://perp.com/governance" },
              { label: "Brand", to: "https://perp.com/branding" },
            ],
          },
          {
            title: "Social Media",
            items: [
              { label: "Twitter", to: "https://twitter.com/perpprotocol", img: "twitterIcon" },
              { label: "YouTube", to: "https://www.youtube.com/c/PerpetualProtocol", img: "youtubeIcon" },
              { label: "Discord", to: "https://discord.com/invite/Dq9mTmCaBb", img: "discordIcon" },
              { label: "Telegram", to: "https://t.me/perpetualprotocol", img: "telegramIcon" },
              { label: "Medium", to: "https://perpetualprotocol.medium.com/", img: "mediumIcon" },
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
        apiKey: "9f3501510e023882845791911e5c113a",
        indexName: "perp-docs",
        appId: "3TBGQBHK03",
        contextualSearch: false,
      },
    }),
}
