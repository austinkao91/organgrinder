(function() {
  'use strict';
  var currentTracks = [];
  var CHANGE_EVENT = "CHANGE";

  window.trackStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return currentTracks.slice();
    },
    addChangeHandler: function(handler) {
      this.on(CHANGE_EVENT, handler);
    },
    removeChangeHandler: function(handler) {
      this.removeListener(CHANGE_EVENT, handler);
    },
    changed: function() {
      this.emit(CHANGE_EVENT);
    },
    addTrack: function(track) {
      currentTracks.push(track);
    },
    findTrack: function(track) {
      for(var i = 0; i < currentTracks.length; i ++) {
        if( currentTracks[i] === track) { return  i; }
      }
      return -1;
    },
    lastTrack: function() {
      return currentTrack[currentTrack.length-1];
    },
    removeTrack: function(track) {
      var trackIdx = this.findTrack(track);

      if( trackIdx > -1) {
        currentTracks.splice(trackIdx,1);
      }
    },
    dispatchID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case "ADD_TRACK":
          window.trackStore.addTrack(payload.track);
          window.trackStore.changed();
          break;
        case "REMOVE_TRACK":
          window.trackStore.removeTrack(payload.track);
          window.trackStore.changed();
          break;
      }

    }.bind(this))


  });

}());
