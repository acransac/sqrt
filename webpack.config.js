function dirname(url) {
  return url.slice("file://".length).split("/").slice(0, -1).join("/");
}

export default {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "sqrt.js",
    path: `${dirname(import.meta.url)}/dist`
  }
};
