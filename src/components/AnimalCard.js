import React, { Component } from 'react';

class AnimalCard extends Component {
  render() {
    return (
      <div >
        <img className="animal-card" src={this.props.animal.img} onClick={this.props.handleClick} data-id={this.props.animal.id} />
        <h3>{this.props.animal.name}</h3>
        <h3>{this.props.animal.type}</h3>
        <h3>{this.props.animal.sex}</h3>
      </div>
    );
  }
}

export default AnimalCard