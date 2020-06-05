const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BabelPlugin = require('babel-webpack-plugin');
//var extractPlugin = new ExtractTextPlugin({
//	filename: 'main.css'
//});


module.exports = {

	// output: {
	// 	path: path.join(__dirname, 'dist'),
	// 	filename: 'bundle.js'
	// 	publicPath: 'http://localhost:3000',
	// 	globalObject: 'this'
	//   },

	entry: './pages/index.js',
	output: {// where our compiled code will go
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
		publicPath: 'http://localhost:3000',
		globalObject: 'this'
//		publicPath: '/dist'
	},	
//	},
	module: {
		rules: [
			{
				 test: /\.scss$/i,
			        use: [
			          // Creates `style` nodes from JS strings
			          'style-loader',
			          // Translates CSS into CommonJS
			          // Compiles Sass to CSS
			          'sass-loader',
			        ],
				
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
			    loader: "babel-loader", 
			    query:
			      {
					presets: ['@babel/react', '@babel/es2015'],
				     plugins: ['@babel/proposal-class-properties']
			      }			
			},
			{ 
	           test: /\.css$/i,
                   
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // in v2 it throws error
                                sourceMap: true
                            },
                        }]
               
			},
			{
			  test: /\.(gif|png|jpe?g|svg)$/i,
			  use: [
			    'file-loader',
			    {
			      loader: 'image-webpack-loader',
			      options: {
			        bypassOnDebug: true, // webpack@1.x
			        disable: true, // webpack@2.x and newer
			      },
			    },
			  ],
			}
		]
	},
	node: {
		  fs: 'empty',
		  net: 'empty'
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 3000,
		stats: "errors-only"//,
		//open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			//title: 'New Title',
			template: './src/testWebpack.html',
			hash: true // if you want to use a custom template
//			filename: 'index2.html'
//			minify: {
//				collapseWhitespce: true
//			}
			// Might want to consider using RimRaf to clean up files
		}),
		new ExtractTextPlugin("test.css"),//name of your css
	    new BabelPlugin({
	        test: /\.js$/,
	        presets: ['es2015'],
	        sourceMaps: false,
	        compact: false
	    })
	]

}