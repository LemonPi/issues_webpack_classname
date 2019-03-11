## Problem

webpack is mangling class names.

```javascript
export class Test {
    constructor() {
        this.test = 1;
    }
}

Test.name; // should be "Test", but is instead some mangled character like "n"
Test.prototype.constructor.name; // similar to above
```

Test this out with
```
npm run start
```

And use console to evaluate the expressions on the `lib` library.

## Solution

The current webpack configuration solves this issue by explicitly keeping function and class names:

```
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                cache        : true,
                parallel     : true,
                uglifyOptions: {
                    compress: true,
                    ecma    : 6,
                    keep_fnames: true,
                    keep_classnames: true,
                },
                sourceMap    : true
            })

        ]
    },
```

Although UglifyJS only works on ES5, so we have to pull in Babel as well:

```
    module      : {
        rules: [
            {
                test   : /\.js$/,
                include: [/src/],
                use    : {
                    loader : 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
```