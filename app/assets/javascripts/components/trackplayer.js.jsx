/* global React */
var TrackPlayer = React.createClass({
  render: function() {
    return (
      <div className="TrackPlayer">
          <input type="button"
                 onClick={this.props.track.play}
                 value={this.props.track.name}>
          </input>
      </div>
    );
  }


});
