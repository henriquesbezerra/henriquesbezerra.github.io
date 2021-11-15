module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteUrl: "https://henriquesbezerra.github.io/",
    title: "Henrique Silva",
    description: "Teste teste",
    github: "https://github.com/henriquesbezerra",
    linkedin: "https://www.linkedin.com/in/henriquesbezerra/",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `./src/content`,
      }
    }
  ],
};