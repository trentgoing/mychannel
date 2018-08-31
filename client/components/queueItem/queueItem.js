angular.module('my-channel')
.controller('QueueItemController', function() {
  
})
.component('queueItem', {
  bindings: {
    link: '<'
  },
  controller: 'QueueItemController',
  templateUrl: './components/queueItem/queueItem.html'
});