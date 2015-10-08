var Key = React.createClass({
  componentDidMount: function(){
    var noteName = this.props.noteName;

    this.note = new Note(TONES[noteName]);
    keyStore.addChangeHandler(this.inputChanged);
  },
  inputChanged: function(){
    var played = keyStore.findKey(this.props.noteName);
    if (played > -1) {
      this.note.start();
    } else {
      this.note.stop();
    }
  },
  render: function() {
    return (
      <div className={this.props.noteName}></div>
    );
  }
});
