# Angular Elements Example (Child App)

Summary of the work done in this repo:

1) Create an Angular application using @nrwl/nx: 
```
npx create-nx-workspace
```

2) Add a Nest.js application to the project: 
```
npm install --save-dev @nrwl/nest#
```
```
npx nx g @nrwl/nest:app api --frontendProject=angular-elements-example-child-app
```

3) Pull Request #1: Create ExampleComponent and configure it as Custom Element: https://github.com/mamunoz-dev/angular-elements-example-child-app/pull/1

4) Pull Request #2: Add package script to allow other apps to use example component as a micro front end: https://github.com/mamunoz-dev/angular-elements-example-child-app/pull/2

5) Pull Request #3: Serve micro front end script as static content in Nest.js app: https://github.com/mamunoz-dev/angular-elements-example-child-app/pull/3

