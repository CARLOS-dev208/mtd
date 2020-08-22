const webpack = require("webpack");

module.exports = {
    // baseUrl: '/mtd/',
    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            new webpack.ProvidePlugin({
                'window.PIC': 'PIC'
            })
        ]
    }
};

// # or passed in via docker build arg and env
// # var (see below dockerfile)# baseUrl: process.env.APP_BASEPATH,