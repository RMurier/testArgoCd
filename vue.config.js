const { defineConfig } = require("@vue/cli-service");
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    vuetify: {}
  }
}
