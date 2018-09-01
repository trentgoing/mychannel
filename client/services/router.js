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

  this.addLink = function(link, callback) {
    $http.post('/links', {
      url: link.url,
      note: link.notes
    })
    .then((res) => {
      if (res) {
        console.log(res);
      }
      callback();
    })
    .catch(({data}) => {
      data.error.errors.forEach((err) => {
        console.log(err);
      })
    })
  };

  this.removeLink = function(link, callback) {
    $http.put('/links', link)
    .then((res) => {
      if (res) {
        console.log(res);
      }
      callback();
    })
    .catch(({data}) => {
      data.error.errors.forEach((err) => {
        console.log(err);
      })
    })
  };

});