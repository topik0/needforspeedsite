"use strict";

module.exports = {
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-react-helmet", "gatsby-plugin-offline", "gatsby-plugin-no-sourcemaps", "gatsby-transformer-sharp", "gatsby-plugin-sharp", {
    resolve: "gatsby-plugin-manifest",
    options: {
      icon: "src/images/favicon.png"
    }
  }],
  siteMetadata: {
    title: "Need For Speed Robotics",
    titleTemplate: "%s - Need For Speed Robotics",
    description: "We are Need For Speed, the FTC robotics team from Lake Forest, Illinois",
    url: "https://www.needforspeedrobotics.org",
    image: "src/images/favicon.png"
  }
};