# React - Webpack Dev Server - Server Side Rendering - Starter project

A Webpack Dev Server starter with a custom structure of Webpack for React together with Firebase support for server side rendering with functions.

## Includes

- Firebase Cloud Functions
- Firebase Hosting
- Webpack
- Webpack Dev Server
- CSS Hot Loader
- Babel
- Express
- React

## Installation without SSR(server side rendering)

```console
npm i
npm start
```

Localhost serving on: [http://localhost:8081](http://localhost:8081)

## Installation with SSR(server side rendering)

Install node_modules and run start
```console
npm i
npm run firebase-start
```

Localhost serving on: [http://localhost:5000](http://localhost:5000)

## Deploy on Firebase hosting

Install node_modules and run babel
```console
npm i
npm run babel
```

Login to the Firebase system.
``` 
npm run firebase-login
```

Run the init command to choose the hosting plan.
``` 
npm run firebase-init
```
Choose `Hosting` and select which project you want to use or select `create a new one`. <br />
This will generate the following files: `firebase.json` and `.firebaserc`.

If you make a new project you should visit the Google platform [https://console.firebase.google.com](https://console.firebase.google.com) and create a new project. Run `npm run firebase-init` and choose the project you made.


Deply your project to Firebase. (This can take a while)
```
npm run firebase-deploy
```

Run your project with
```
npm run firebase-open
```


## Author

Pieter-Jan Sas<br />
Twitter: [http://twitter.com/pieterjansas](http://twitter.com/pieterjansas)<br />
Email: [mailto:pieter_jansas@hotmail.com](pieter_jansas@hotmail.com)