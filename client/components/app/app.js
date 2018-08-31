angular.module('my-channel')
.controller('AppController', function(routerToServer) {
  
  this.handleQueueResults = (queueData) => {
    this.queue = queueData;
  }
  this.postNewLink = (evt) => {
    console.log("Posted" + JSON.stringify(evt));
    
    routerToServer.getQueue(this.handleQueueResults);
  }
  
  routerToServer.getQueue(this.handleQueueResults);
})
.component('app', {
  controller: 'AppController',
  templateUrl: './components/app/app.html'
});