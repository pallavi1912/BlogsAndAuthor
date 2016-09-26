'use strict';
var API = require('./config/api'),
    blogsApp = angular.module('blogsApp', [
        'ui.router',
        'ui.bootstrap',
        // 'sun.scrollable',
        'toastr',
        'ngFacebook',
        // 'angular-ui-validator',
        // 'ngMessages',
        // 'ngFileUpload',
        // 'gm.datepickerMultiSelect',
        // 'ngSanitize',
        // 'ui.select',
        require('./config').name,
        require('./common').name,
        require('./modules').name
    ])
    //require('./common').name

// require('./shared').name])
.config(['$urlRouterProvider', '$facebookProvider', function($urlRouterProvider, $facebookProvider) {
        $facebookProvider.setAppId(1691445461182634);
        $urlRouterProvider.when('', '/blogList');
        $urlRouterProvider.when('/', '/blogList');
        console.log("in config");
    }])
    .run(['$rootScope', '$state', function($rootScope, $state) {
        if (document.getElementById('facebook-jssdk')) {
            return;
        }
        var firstScriptElement = document.getElementsByTagName('script')[0];
        console.log("in run");
        var facebookJS = document.createElement('script');
        facebookJS.id = 'facebook-jssdk';
        facebookJS.src = '//connect.facebook.net/en_US/all.js';
        firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
    }]);

function bootstrapApplication() {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ["blogsApp"]);
    });
}
bootstrapApplication();
