(function() {
  'use strict';
  var currentKeys = [];
  var CHANGE_EVENT = "CHANGE";

  window.keyStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return currentKeys.slice();
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
    addKey: function(key) {
      currentKeys.push(key);
    },
    findKey: function(key) {
      for(var i = 0; i < currentKeys.length; i ++) {
        if( currentKeys[i] === key) { return  i; }
      }
      return -1;
    },
    lastKey: function() {
      return currentKey[currentKey.length-1];
    },
    removeKey: function(key) {
      var keyIdx = this.findKey(key);

      if( keyIdx > -1) {
        currentKeys.splice(keyIdx,1);
      }
    },
    dispatchID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case "ADD_NOTE":
          window.keyStore.addKey(payload.noteName);
          window.keyStore.changed();
          break;
        case "REMOVE_NOTE":
          window.keyStore.removeKey(payload.noteName);
          window.keyStore.changed();
          break;
        case "HAS_NOTE":
          window.keyStore.findKey(payload.noteName);
          window.keyStore.changed();
          break;
      }

    }.bind(this))


  });

}());
