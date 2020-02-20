const webpack = require("webpack");

const config = require("./webpack.prod.conf");

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error("error: ");
    console.error(err);
    return;
  }

  console.error("normal log: ");
  console.log(
    stats.toString({
      chunks: false,
      colors: true
    })
  );
});
