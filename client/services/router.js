angular.module('my-channel')
.service('routerToServer', function($http) {

  this.getQueue = function(callback) {
    $http.get('/links')
    .then(({data}) => {
      if (callback) {
        callback(data);
      }
    })
    .catch(({data}) => {
      data.error.errors.forEach((err) => {
        console.log(err);
      })
    })
  };

});