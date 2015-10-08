/* global React */
var JukeBox = React.createClass({
  getInitialState: function() {
    return { allTracks: trackStore.all() };
  },
  componentDidMount: function() {
    trackStore.addChangeHandler(this.inputChanged);
  },
  inputChanged: function() {
    this.setState({allTracks: trackStore.all()});
  },
  render: function(){
    var tracks = trackStore.all();

    return (
      <div className="JukeBox">
        {
          this.state.allTracks.map(function(track,idx) {
              return <li><TrackPlayer track={track} key={idx}/></li>;
          })
        }
      </div>
    )
  }
});
