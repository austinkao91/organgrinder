var Organ = React.createClass({
  render: function() {
    var tones = [];
    for (var property in TONES) {
      if (TONES.hasOwnProperty(property)) {
          tones.push(property);
      }
    }

    return (
      <div>
        <Recorder />
        {
          tones.map(function(note) {
            return <Key noteName={note}/>
          })
        }
        <JukeBox />

      </div>
    )
  }
})
