module.exports = {
  siteName: "Leydi van den Braken",
  siteDescription: "Leydi van den Braken's resume.",
  siteUrl: "https://leydi.vandenbraken.com",
  plugins: [
    // {
    //   use: '@gridsome/plugin-google-analytics',
    //   options: {
    //     id: 'UA-72659574-11'
    //   }
    // },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
};
