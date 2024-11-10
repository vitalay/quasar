// //* eslint-env node */
const { defineConfig } = require("quasar");

module.exports = defineConfig({
  build: {
    publicPath: "/",
    css: ["app.scss"],
    target: {
      browser: ["es2019", "edge88", "firefox78", "chrome87", "safari13.1"],
      node: "node20",
    },
    vueRouterMode: "hash", // доступные значения: 'hash' или 'history'
    vitePlugins: [
      [
        "vite-plugin-checker",
        {
          eslint: {
            lintCommand: 'eslint "./**/*.{js,mjs,cjs,vue}"',
          },
        },
        { server: false },
      ],
    ],
  },
  devServer: {
    open: true,
  },
  framework: {
    config: {},
    extras: ["roboto-font", "material-icons"],
    plugins: [],
  },
  animations: [],
  ssr: {
    pwa: false,
    prodPort: 3000,
    middlewares: ["render"],
  },
  pwa: {
    workboxMode: "generateSW",
    injectPwaMetaTags: true,
    swFilename: "sw.js",
    manifestFilename: "manifest.json",
    useCredentialsForManifestTag: false,
  },
  capacitor: {
    hideSplashscreen: true,
  },
  electron: {
    inspectPort: 5858,
    bundler: "packager",
    builder: {
      appId: "quasar-project",
    },
  },
  bex: {
    contentScripts: ["my-content-script"],
  },
});
