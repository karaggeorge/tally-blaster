module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      // List native deps here if they don't work
      // If you are using Yarn Workspaces, you may have multiple node_modules folders
      // List them all here so that VCP Electron Builder can find them
      nodeModulesPath: [
          '../../node_modules',
          './node_modules'
      ],
      nodeIntegration: true,
      preload: 'src/preload.js'
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}