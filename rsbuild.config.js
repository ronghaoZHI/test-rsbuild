import { defineConfig } from '@rsbuild/core';
import { pluginVue2 } from '@rsbuild/plugin-vue2';

export default defineConfig({
  output: {
    inlineStyles: true,
    injectScripts: /.js$/,
  },
  plugins: [pluginVue2()],
  source: {
    entry: {
      index: './src/index.ts',
    }
  },
  performance: {
    // chunkSplit: {
    //   // strategy: 'all-in-one'
    // },
  }
});
