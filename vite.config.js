import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import optimizer from 'vite-plugin-optimizer';
import commonjsExternals from 'vite-plugin-commonjs-externals';
const externals = ['path', /^electron(\/.+)?$/];

let getReplacer = () => {
  let externalModels = ["os", "fs", "path", "events", "child_process", "crypto", "http", "buffer", "url", "better-sqlite3", "knex"];
  let result = {};
  for (let item of externalModels) {
    result[item] = () => ({
      find: new RegExp(`^${item}$`),
      code: `const ${item} = require('${item}');export { ${item} as default }`,
    });
  }
  result["electron"] = () => {
    let electronModules = ["clipboard", "ipcRenderer", "nativeImage", "shell", "webFrame"].join(",");
    return {
      find: new RegExp(`^electron$`),
      code: `const {${electronModules}} = require('electron');export {${electronModules}}`,
    };
  };
  return result;
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build:{
    sourcemap:true
  },
  // optimizeDeps: {
  //   exclude: externals,
  // },
  esbuild: {
    loader: 'js',
    target: 'es2015'
  },
  plugins: [
    vue(),
    optimizer(getReplacer())
    // commonjsExternals({
    //   externals,
    // }),
    // optimizer({
    //   path: () => ({
    //     find: /^path$/,
    //     code: `const path = require('path'); export { path as default }`,
    //   }),
    //   electron: () => ({
    //     find: /^electron$/,
    //     code: `const electron = require('electron'); export { electron as default }`,
    //   })
      
    // })
  ],

})