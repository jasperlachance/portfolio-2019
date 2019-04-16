const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Jasper LaChance | UX Designer and Front-End Developer', // Navigation and Site Title
  siteTitleAlt: 'Jasper LaChance', // Alternative Site title for SEO
  siteTitleShort: 'Jasper LaChance', // short_name for manifest
  siteHeadline: 'Creating marvelous art & blazginly fast websites and apps.', // Headline for schema.org JSONLD
  siteUrl: 'http://jasperlachance.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Creating marvelous art & blazginly fast websites and apps.',
  author: 'Jasper LaChance', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@jaythechance', // Twitter Username
  ogSiteName: 'Jasper LaChance', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  // googleAnalyticsID: 'UA-0',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
