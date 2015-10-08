var Recorder = React.createClass({
  getInitialState: function() {
    return { isRecording: false, track: new Track() };
  },
  componentDidMount: function() {
    keyStore.addChangeHandler(this.inputChanged);
    this.recording = false;
  },
  inputChanged: function() {
    if(this.recording) {
      this.state.track.addNotes(keyStore.all());
    }
  },
  startRecording: function() {
    this.state.track.startRecording.bind(this.state.track)();
    this.recording = true;

  },
  stopRecording: function() {
    this.state.track.stopRecording.bind(this.state.track)();
    this.recording = false;
    this.track.name = prompt("input track name: ")
    TrackActions.trackSaved(this.state.track);
    this.setState({track: new Track() });
  },
  render: function() {
    return (
      <div className="Recorder">
        <input type="Button" onClick={this.state.track.startRecording.bind(this.state.track)} value="Start Recording"></input>
        <input type="Button" onClick={this.stopRecording} value="Stop Recording"></input>
        <input type="Button" onClick={this.state.track.play.bind(this.state.track)} value="Play"></input>
      </div>
    );
  }
});
