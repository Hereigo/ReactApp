## Useful commands

### Project init:

```ps1

npm install create-react-app

cd ....[correct path]

# --scripts-version 1.1.5 - is a version of app structure
npx create-react-app my-react-app-1 --scripts-version 1.1.5

# Installing react, react-dom, and react-scripts.......

npm start

# ...

# To allow using pseudo classes and media-queries in React app.
npm install --save radium

# To modify app structure to .... ???????
npm run eject # (added by react-scripts)
```
### To support Css-Modules 
- in webpak.config.dev.js
- in webpak.config.prod.js
```json
{
  test: /\.css$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
        modules: true,       // <=== !!!!!!!!
        localIdentName: '[name]__[local]__[hash:base65:5]' // <== !!!!!!!
      },
```

## Useful links:

- create-react-app: https://github.com/facebookincubator/create-react-app
- Introducing JSX: https://reactjs.org/docs/introducing-jsx.html
- Rendering Elements: https://reactjs.org/docs/rendering-elements.html
- Components & Props: https://reactjs.org/docs/components-and-props.html
- Listenable Events: https://reactjs.org/docs/events.html
