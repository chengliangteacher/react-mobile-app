const { override, fixBabelImports } = require("customize-cra")
module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd-mobile",
        style: true
    }),
    config => {
        const oneOf_loc = config.module.rules.findIndex(n => n.oneOf);
        config.module.rules[oneOf_loc].oneOf = [
            {
                test: /\.less$/,
                use: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            javascriptEnabled: true,
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                            ],
                        },
                    },
                    {
                        loader: require.resolve('less-loader'),
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                                
                            }
                        }
                    },
                ]
            },
            ...config.module.rules[oneOf_loc].oneOf
        ]
        return config
    }
)