const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const MODE = 'production'
const enabledSourceMap = MODE === 'development'
module.exports = {
  mode: MODE,
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'src/main.js',
    assetModuleFilename: 'images/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'src/images/',
        },
      },
      {
        test: /\.(gif|png|jpg|jpeg|webp|eot|wof|woff|ttf|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 100KB以上だったら埋め込まずファイルとして分離する
            maxSize: 100 * 1024,
          },
        },
      },
      {
        test: /\.scss/,
        // ローダー名
        use: [
          // linkタグに出力する機能
          // 'style-loader',
          // CSSをバンドルするための機能
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドを取り込む
              url: true,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          // Sassをバンドルするための機能
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // CSSファイルを外だしにするプラグイン
    new MiniCssExtractPlugin({
      // ファイル名を設定します
      filename: 'src/style.css',
    }),
    new HtmlWebpackPlugin({
      template: '/src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/images/',
          to: 'src/images/',
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.json'],
  },
  target: ['web', 'es5'],
}
