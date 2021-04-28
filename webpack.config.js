const path = require("path");
const glob = require("glob");

const entries = {};
const srcJsDir = "./src/js";

//entriesオブジェクト作成
glob.sync("**/*{.ts,.js}", {
  ignore: ['**/_*.ts','**/_*.js'],
  cwd: srcJsDir
}).map(function (file) {
  const key = file.replace("src/js/", "").replace(/\.ts$/, "").replace(/\.js$/, "");
  entries[key] = srcJsDir + '/' + file;
});

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: entries,
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, "dist/assets/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [".ts",".js"],
    // Webpackで利用するときの設定
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
};