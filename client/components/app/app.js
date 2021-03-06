angular.module('my-channel')
.controller('AppController', function(routerToServer) {

  this.currentLink = '';

  this.handleQueueResults = (queueData) => {
    this.queue = queueData;
    this.changeSite(this.queue[0]);
  };
  
  this.postNewLink = (link) => {
    if (link.url === '') {
      return;
    }
    console.log("Posted" + JSON.stringify(link));
    routerToServer.addLink(link, () => {
      routerToServer.getQueue(this.handleQueueResults);
    });
  };
  
  this.changeSite = (link) => {
    console.log('Changing!' + link);
    this.currentLink = link;
    if (this.currentLink.xframe === true) {
      console.log('This site cannot be displayed live, the version you see now is saved');
    }
  }

  this.removeLink = (link) => {
    link.content = '';
    console.log('Marked as read' + JSON.stringify(link));
    routerToServer.removeLink(link, () => {
      routerToServer.getQueue(this.handleQueueResults);
    });
  }

  routerToServer.getQueue(this.handleQueueResults);
})
.component('app', {
  controller: 'AppController',
  templateUrl: './components/app/app.html'
});