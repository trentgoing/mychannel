angular.module('my-channel')
.controller('QueueItemController', function() {

})
.component('queueItem', {
  bindings: {
    link: '<',
    changeSite: '<',
    removeLink: '<'
  },
  controller: 'QueueItemController',
  templateUrl: './components/queueItem/queueItem.html'
});