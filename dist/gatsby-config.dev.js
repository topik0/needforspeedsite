"use strict";

var _favicon = _interopRequireDefault(require("../images/favicon.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-react-helmet", "gatsby-plugin-offline", "gatsby-plugin-no-sourcemaps", "gatsby-transformer-sharp", "gatsby-plugin-sharp", {
    resolve: "gatsby-plugin-manifest",
    options: {
      icon: "https://www.needforspeedsite.vercel.app".concat(_favicon["default"])
    }
  }],
  siteMetadata: {
    defaultTitle: "Need For Speed Robotics",
    titleTemplate: "%s - Need For Speed Robotics",
    description: "We are Need For Speed, the FTC robotics team from Lake Forest, Illinois",
    url: "https://www.needforspeedrobotics.org",
    image: "https://www.needforspeedsite.vercel.app".concat(_favicon["default"]),
    twitterUsername: "team9113"
  }
};