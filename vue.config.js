const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/scss/variables.scss` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        // 将当前文件添加到组件的style 中
        additionalData: `@import "~@/scss/variables.scss";`,
      },
    },
  },
});
