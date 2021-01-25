# Angular Elements Example (Child App)

Summary of the work done in this repo:

Create an Angular application using @nrwl/nx: 
```
npx create-nx-workspace
```

Add a Nest.js application to the project: 
```
npm install --save-dev @nrwl/nest#
```
```
npx nx g @nrwl/nest:app api --frontendProject=angular-elements-example-child-app
```

**Pull Request #1**: Create ExampleComponent and configure it as Custom Element: https://github.com/mamunoz-dev/angular-elements-example-child-app/pull/1

**Pull Request #2**: Add package script to allow other apps to use example component as a micro front end: https://github.com/mamunoz-dev/angular-elements-example-child-app/pull/2

**Pull Request #3**: Serve micro front end script as static content in Nest.js app: https://github.com/mamunoz-dev/angular-elements-example-child-app/pull/3

After all this job is done, we're ready to load the Micro Front End script from a parent app and use the Custom Element from there. You can find how to do it in Angular Elements Example Parent App repository: https://github.com/mamunoz-dev/angular-elements-example-parent-app
