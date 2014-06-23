/*global require*/
'use strict';

require.config({
	paths: {
		angular: '../bower_components/angular/angular'
	},
	shim: {
		angular: {
			exports: 'angular'
		}
	}
});

require(['angular', 'app', 'register-angular-injects'], function (angular, app, registerAll) {
    registerAll(app);
    angular.bootstrap(document, ['todomvc']);
});
