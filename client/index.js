angular.module('my-channel', ['ngSanitize'])
.config(function($sceDelegateProvider){
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://**',
    'http://**'
  ]);
})