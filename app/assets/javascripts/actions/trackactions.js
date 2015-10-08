TrackActions = {
  trackSaved: function(track) {
    var payload = {
      actionType: "ADD_TRACK",
      track: track
    };
    AppDispatcher.dispatch(payload);
  }
};
