angular.module('my-channel')
.controller('DisplayController', function($sce) {
  
  this.getUrl = () => {
    return this.currentUrl ? this.currentUrl.url : '' ;
  }

  this.explicitlyTrust = () => {
    return this.currentUrl ? $sce.trustAsHtml(this.currentUrl.content): '';
  }
  // this.explicitlyTrustedHTML = this.currentUrl ? $sce.trustAsHtml(this.currentUrl.content): '';

})
.component('contentDisplay', {
  bindings: {
    currentUrl: '<'
  },
  controller: 'DisplayController',
  templateUrl: './components/contentDisplay/contentDisplay.html'
});