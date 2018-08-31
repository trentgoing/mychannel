angular.module('my-channel')
.controller('DisplayController', function() {
  this.getUrl = () => {
    return this.currentUrl ? this.currentUrl.url : '' ;
  }
})
.component('contentDisplay', {
  bindings: {
    currentUrl: '<'
  },
  controller: 'DisplayController',
  templateUrl: './components/contentDisplay/contentDisplay.html'
});