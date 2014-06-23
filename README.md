angular-auto-register-components
================================

An example of a single module architecture for Angular application with automatic component registration

Original code taken from https://github.com/tastejs/todomvc/tree/gh-pages/labs/dependency-examples/angularjs_require


## How to use it
- Run `npm install` to download build dependencies
- Run `gulp inject-amd-deps` to generate a module that registers all components
- Run `gulp dev` to start a watch task that will regenerate the module on every file change