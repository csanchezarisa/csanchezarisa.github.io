# Personal portfolio web app

<img height="128" alt="Csanchezarisa + React" src="Csanchezarisa+React.png">

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
It's made with React, using very cool and fancy libraries such as [fullpage.js](https://alvarotrigo.com/fullPage/), [Chakra UI](https://chakra-ui.com/), [React-Bootstrap](https://react-bootstrap.github.io/) and [EmailJS](https://www.emailjs.com/). 

You can check all other dependencies by going to [package.json](package.json) file.


## 1. How to use this project

### 1.1. Add `licenses.js` file

First of all, you'll need to duplicate the [licenses.js.example](src/config/licenses.js.example) and rename it by removing the `.example` sufix. It should be named as: `licenses.js`.

This project uses `fullpage.js` library to visually set up the user interface and `EmailJS` to send emails easily and correctly. So if you want to reuse this project and build a production React app, **you'll need the licenses for both libraries** first. But it is **not necessary for testing and development purposes**.

You can get the fullpage.js license and create a free user in EmailJS services by following this links:
- **fullpage.js:** https://alvarotrigo.com/fullPage/pricing/
- **EmailJS:** https://www.emailjs.com/

### 1.2. Execute `npm install`

Secondly, execute `npm install`, so npm will install all the dependencies needed to run and build this React App.


## 2. Available Scripts

In the project directory, you can run:

### 2.1. `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### 2.2. `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 2.3. `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 2.4. `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### 2.5. `npm run deploy`

Using [gh-pages](https://github.com/tschaub/gh-pages) package, the React App is built and deployed to your repository, in a new `gh-pages` branch, so you can serve it by using [GitHub Pages](https://pages.github.com/).


## 3. Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### 3.1. Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### 3.2. Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### 3.3. Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### 3.4. Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### 3.5. Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### 3.6. `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
