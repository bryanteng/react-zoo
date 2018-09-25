import React, { Component } from 'react';
import AnimalCard from './AnimalCard'

class Zoo extends Component {
  render() {
    return (
      <div>
        <h2>My Zoo</h2>
        <div className="container row">
          {this.props.animals.map(animal => <AnimalCard animal={animal} handleClick={this.props.handleClick}/>)}
        </div>
      </div>
    );
  }
}

export default Zoo;
