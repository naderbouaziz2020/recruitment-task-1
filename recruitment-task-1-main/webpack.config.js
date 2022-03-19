const webpack = require('webpack');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const browserSync = new BrowserSyncPlugin({
	host: 'localhost',
	port: 3000,
	proxy: 'http://localhost:8080/'
});

const isProduction = process.env.NODE_ENV === 'production';

const miniCss = new MiniCssExtractPlugin({
	filename: 'css/[name].[contenthash].css'
});

const notifier = new WebpackBuildNotifierPlugin({
	title: 'Webpack build',
	suppressSuccess: true
});

const moduleReplacement = new webpack.HotModuleReplacementPlugin();
const noEmit = new webpack.NoEmitOnErrorsPlugin();


module.exports = {
	entry: [`${__dirname}/js/main.js`, `${__dirname}/sass/app.scss`],

	output: {
		path: `${__dirname}/dist`,
		filename: 'js/main.js'
	},

	devServer: {
		hot: true,
		contentBase: './dist'
	},

	devtool: devMode ? 'inline-source-map' : false,

	performance: {
		hints: false
	},

	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
						}
					},
					{
						loader: 'css-loader',
						options: { sourceMap: devMode, url: true }
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: devMode }
					}
				]
			},
			{
				test: /\.(eot|ttf|woff|woff2|otf)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]'
					}
				}
			},
			{
				test: /\.pug$/,
				use: {
					loader: 'pug-loader'
				}
			},
			{
				test: /\.(jp?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'img/[name].[ext]'
						}
					},
					{
						loader: 'img-loader',
						options: {
							enabled: isProduction,
							gifscale: {
								interlaced: false
							},
							mozjpeg: {
								progressive: true,
								arithmetic: false
							},
							optipng: false,
							pngquant: {
								floyd: 0.5,
								speed: 2
							},
							svgo: {
								plugins: [
									{ removeTitle: true },
									{ covertPathData: false }
								]
							}
						}
					}
				]
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(),
		browserSync,
		miniCss,
		noEmit,
		moduleReplacement,
		notifier,
		new HtmlWebpackPlugin({
			template: `views/index.pug`,
			inject: 'body',
			mobile: true,
			filename: `index.html`
		})
	]
};


function addSlide(name) {
	return new HtmlWebpackPlugin({
		template: `views/${name}.pug`,
		inject: 'body',
		mobile: true,
		filename: `${name}.html`
	});
}

