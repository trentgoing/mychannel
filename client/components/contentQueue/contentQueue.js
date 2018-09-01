angular.module('my-channel')
.controller('QueueController', function() {
  
})
.component('contentQueue', {
  bindings: {
    queue: '<',
    changeSite: '<',
    removeLink: '<'
  },
  controller: 'QueueController',
  templateUrl: './components/contentQueue/contentQueue.html'
});