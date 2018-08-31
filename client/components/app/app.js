angular.module('my-channel')
.controller('AppController', function(routerToServer) {

  this.currentLink = '';

  this.handleQueueResults = (queueData) => {
    this.queue = queueData;
    this.currentLink = this.queue[0];
    console.log(this.currentLink);
  };
  
  this.postNewLink = (link) => {
    console.log("Posted" + JSON.stringify(link));
    routerToServer.addLink(link, () => {
      routerToServer.getQueue(this.handleQueueResults);
    });
  };
  
  routerToServer.getQueue(this.handleQueueResults);
})
.component('app', {
  controller: 'AppController',
  templateUrl: './components/app/app.html'
});