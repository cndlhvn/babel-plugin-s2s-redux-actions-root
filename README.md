# babel-plugin-s2s-redux-actions-root

> generate redux actions root

Here is the sample repository using this s2s plugin.
[https://github.com/cndlhvn/s2s-redux-actions-sample](https://github.com/cndlhvn/s2s-redux-actions-sample)

## Install

```
$ yarn add --dev babel-plugin-s2s-redux-actions-root
```

## s2s.config.js

s2s-redux-actions plugin watch the `src/actions/(?!.*index).*\.js` files

```js
module.exports = {
  plugins: [
    {
      test: /src\/actions\/(?!.*index).*\.js/,
      output: "index.js",
      plugin: ['s2s-redux-actions-root',
      { input: 'src/actions/*.js', output: "src/actions/index.js" }]
    }
  ]
}
```
## Start s2s

Start the s2s with yarn command

`yarn run s2s`

## Usage

#### When create actions file

When you create a `src/actions/*.js`, this plugin inserts into index.js automatically.

For example you create a `src/actions/user.js`. It inserts into index.js

#### Out:

```js
export * from "./user";
```

# Test

This plugin has two type of test files. \
First is babel plugin main test file named `test.js` on root direcotry. \
Next is `test/*.js` that is test target files.

Run this command.

` npm run test`

Test will run and you can see what happen.
