KeyAction = {
  keyPressed: function(key) {
    var payload = {
      actionType: "ADD_NOTE",
      noteName: key
    };
    AppDispatcher.dispatch(payload);
  },

  keyReleased: function(key) {
    var payload = {
      actionType: "REMOVE_NOTE",
      noteName: key
    };
    AppDispatcher.dispatch(payload);
  },

  keyIncluded: function(key) {
    var payload = {
      actionType: "HAS_NOTE",
      noteName: key
    };
    AppDispatcher.dispatch(payload);
  }
};
