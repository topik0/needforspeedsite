"use strict";

module.exports = {
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-react-helmet", "gatsby-plugin-offline", "gatsby-plugin-no-sourcemaps", "gatsby-transformer-sharp", "gatsby-plugin-sharp", {
    resolve: "gatsby-plugin-manifest",
    options: {
      icon: "src/images/favicon.png"
    }
  }],
  siteMetadata: {
    defaultTitle: "Need For Speed Robotics",
    titleTemplate: "%s - Need For Speed Robotics",
    description: "We are Need For Speed, the FTC robotics team from Lake Forest, Illinois",
    url: "https://www.needforspeedrobotics.org",
    defaultImage: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg1.wikia.nocookie.net%2F__cb20140415180431%2Frunescape%2Fimages%2F8%2F84%2FGorilla.png&f=1&nofb=1",
    twitterUsername: "team9113"
  }
};