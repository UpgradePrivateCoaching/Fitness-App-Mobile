const MODULE_RESOLVER = [
  "module-resolver",
  {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      "@fonts": "./assets/fonts",
      "@images": "./assets/images",
      "@styles": "./assets/styles",
      "@components": "./components",
      "@screens": "./screens",
      "@constants": "./constants",
      "@store": "./store",
      "@hooks": "./hooks",
      "@lib": "./lib",
    },
  },
];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Required for expo-router
      MODULE_RESOLVER,
      ["expo-router/babel"],
    ],
  };
};
