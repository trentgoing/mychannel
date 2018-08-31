angular.module('my-channel')
.controller('QueueController', function() {
  
})
.component('contentQueue', {
  bindings: {
    queue: '<'
  },
  controller: 'QueueController',
  templateUrl: './components/contentQueue/contentQueue.html'
});