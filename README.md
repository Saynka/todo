# LAB - class 34

## Project: TODO app

### Author: Kale Lesko

### Links and Resources

- [ci/cd](http://xyz.com) (GitHub Actions)
- [back-end server url](http://xyz.com) (when applicable)
- [front-end application](http://xyz.com) (when applicable)

### Setup

- .
  ├── LICENSE
  ├── README.md
  ├── **tests**
  │ ├── App.test.js
  │ ├── Counter.test.js
  │ └── setupTests.js
  ├── package-lock.json
  ├── package.json
  ├── public
  │ ├── favicon.ico
  │ ├── index.html
  │ ├── logo192.png
  │ ├── logo512.png
  │ ├── manifest.json
  │ └── robots.txt
  └── src
  ├── App.js
  ├── App.scss
  ├── components
  │ ├── auth
  │ │ ├── Auth.js
  │ │ ├── Content.js
  │ │ ├── Context.js
  │ │ └── Login.js
  │ ├── form
  │ │ ├── Todo.js
  │ │ ├── TodoForm.js
  │ │ ├── TodoList.js
  │ │ ├── todo-connected.js
  │ │ └── todo.scss
  │ └── header
  │ ├── Footer.js
  │ └── Header.js
  ├── context
  │ ├── Site.js
  │ └── Theme.js
  ├── hooks
  │ └── form.js
  ├── index.js
  └── reportWebVitals.js

#### `.env` requirements (where applicable)

- `"@testing-library/jest-dom": "^5.13.0",`
- `"@testing-library/react": "^11.2.7",`
- `"@testing-library/user-event": "^12.8.3",`
- `"axios": "^0.21.1",`
- `"axios-hooks": "^2.6.3",`
- `"bootstrap": "^5.0.1",`
- `"jest": "^26.6.0",`
- `"jsonwebtoken": "^8.5.1",`
- `"msw": "^0.29.0",`
- `"node-sass": "^6.0.0",`
- `"react": "^17.0.2",`
- `"react-bootstrap": "^1.6.1",`
- `"react-cookies": "^0.1.1",`
- `"react-dom": "^17.0.2",`
- `"react-icons": "^4.2.0",`
- `"react-if": "^4.0.1",`
- `"react-scripts": "4.0.3",`
- `"sass": "^1.34.1",`
- `"superagent": "^6.1.0",`
- `"web-vitals": "^1.1.2"`

#### How to initialize/run your application (where applicable)

- `npm start`

<!-- #### How to use your library (where applicable) -->

#### Tests

- How do you run tests?
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc

#### UML

![UML Example](./reference/uml-1.png)

#### refrences

- https://github.com/briancodex/react-todo-app-v1/blob/master/src/App.js
- https://www.youtube.com/watch?v=E1E08i2UJGI

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
