function dirname(url) {
  return url.slice("file://".length).split("/").slice(0, -1).join("/");
}

export default {
  mode: "production",
  experiments: {
    outputModule: true
  },
  entry: "./src/index.js",
  output: {
    filename: "sqrt.js",
    library: {
      type: "module"
    },
    path: `${dirname(import.meta.url)}/dist`
  }
};
