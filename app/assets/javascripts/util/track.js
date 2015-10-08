var Track = function(name, roll) {

  this.name = name;
  this.roll = roll || [];
  this.interval = false;
};

Track.prototype.startRecording = function () {
  console.log("recording");
  this.roll = [];
  this.currentTime = new Date();

};

Track.prototype.addNotes = function (notes) {
  this.roll.push({time: new Date() - this.currentTime, notes: notes});
};

Track.prototype.stopRecording = function () {
  console.log("stop recording");
  console.log(this.roll);
  this.roll.push([]);
};

Track.prototype.play = function() {
  if(this.interval === false) {
    this.interval = true;
    this.playbackTime = new Date();
    var i = 0;
    var callback = function() {
      if(i < this.roll.length) {
        var elapsedTime = new Date() - this.playbackTime;
        var notes;
        if (elapsedTime >= this.roll[i].time) {
          for (var property in TONES) {
            if (TONES.hasOwnProperty(property)) {
                KeyAction.keyReleased(property);
            }
          }

          notes = this.roll[i].notes;
          notes.forEach(function(note) {
            KeyAction.keyPressed(note);
          });
          i++;
        }
      } else {
        this.interval = false;
        clearInterval(intervalId);
      }
    }.bind(this);
    var intervalId = setInterval(callback, 100);
  }
};
