module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon.png",
      },
    },
  ],
  siteMetadata: {
    title: "",
    titleTemplate: "",
    description:
      "We are Need For Speed, the FTC robotics team from Lake Forest, Illinois",
    url: "https://www.needforspeedrobotics.org",
    image: "src/images/meta-icons/favicon-96x96.png",
    twitterUsername: "team9113",
  },
}
