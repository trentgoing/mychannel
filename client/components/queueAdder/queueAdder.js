angular.module('my-channel')
.controller('QueueAdderController', function() {
  this.link = {
    url: '',
    notes: ''
  }

  this.handleSubmit = () => {
    this.postLink(this.link);
    this.link.url = '';
    this.link.notes = '';
  }
})
.component('queueAdder', {
  bindings: {
    postLink: '<'
  },
  controller: 'QueueAdderController',
  templateUrl: './components/queueAdder/queueAdder.html'
});