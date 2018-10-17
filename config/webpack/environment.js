const { environment } = require("@rails/webpacker");
const path = require("path");

module: {
  rules: [
    {
      test: /\.js(\.erb)?$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        presets: [["env", { modules: false }]],
      },
    },
    {
      test: /\.(scss)$/,
      use: [
        {
          loader: "style-loader", // inject CSS to page
        },
        {
          loader: "css-loader", // translates CSS into CommonJS modules
        },
        {
          loader: "postcss-loader", // Run post css actions
          options: {
            plugins: function() {
              // post css plugins, can be exported to postcss.config.js
              return [require("precss"), require("autoprefixer")];
            },
          },
        },
        {
          loader: "sass-loader", // compiles Sass to CSS
        },
      ],
    },
  ];
}

environment.loaders.get("sass").use.splice(-1, 0, {
  loader: "resolve-url-loader",
  options: {
    attempts: 1,
  },
});

module.exports = environment;
