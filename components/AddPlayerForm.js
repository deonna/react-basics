import React from 'react';

let AddPlayerForm = React.createClass({
  propTypes: {
    onAdd: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
      return ({
        name: "",
      });
  },

  onSubmit: function(e) {
      e.preventDefault();

      this.props.onAdd(this.state.name);
  },

  onNameChange: function(e) {
    this.setState({name: e.target.value});
  },

  render: function() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} placeholder="Player name" onChange={this.onNameChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  },
});

export default AddPlayerForm;