key_listener = {
  handleKeyDown: function(e) {
    var keyDown = String.fromCharCode(e.keyCode);
      if (window.keyStore.findKey(keyDown) === -1) {
        KeyAction.keyPressed(keyDown);
      }
  },

  handleKeyRelease: function(e) {
    KeyAction.keyReleased(String.fromCharCode(e.keyCode));
  }
};
$(function() {
  $(document).on("keydown", key_listener.handleKeyDown);
  $(document).on("keyup", key_listener.handleKeyRelease);
});
