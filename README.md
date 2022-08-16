# Personal portfolio web app

<div style="margin-bottom: 1rem">
  <img width="128" alt="csanchezarisa icon" src="https://gravatar.com/avatar/9fe92a893b3879a72ea0c451d504a3fb?s=128" style="border-radius: 50%; vertical-align: middle; inline-block"/>
  &emsp;
  <img width="64" alt="plus icon" src="https://cdn.iconscout.com/icon/free/png-256/plus-106-444919.png" style="vertical-align: middle; inline-block" />
  &emsp;
  <img width="128" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" style="vertical-align: middle; inline-block" />
</div>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
It's made with React, using very cool and fancy libraries such as [fullpage.js](https://alvarotrigo.com/fullPage/), [Chakra UI](https://chakra-ui.com/), [React-Bootstrap](https://react-bootstrap.github.io/) and [EmailJS](https://www.emailjs.com/). 

You can check all other dependencies by going to [package.json](package.json) file.

## How to use this project

First of all, you'll need to duplicate the [licenses.js.example](src/config/licenses.js.example) and rename it by removing the `.example` sufix. It should be named as: `licenses.js`.

This project uses `fullpage.js` library to visually set up the user interface and `EmailJS` to send emails easily and correctly. So if you want to reuse this project and build a production React app, **you'll need the licenses for both libraries** first. But it is **not necessary for testing and development purposes**.

You can get the fullpage.js license and create a free user in EmailJS services by following this links:
- **fullpage.js:** https://alvarotrigo.com/fullPage/pricing/
- **EmailJS:** https://www.emailjs.com/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run deploy`

Using [gh-pages](https://github.com/tschaub/gh-pages) package, the React App is built and deployed to your repository, in a new `gh-pages` branch, so you can serve it by using [GitHub Pages](https://pages.github.com/).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
