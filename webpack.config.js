module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loder: "babel-loader",
        },
      },
    ],
  },
};
