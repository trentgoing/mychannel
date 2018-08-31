angular.module('my-channel', [])
.config(function($sceDelegateProvider){
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://**',
    'http://**'
  ]);
})