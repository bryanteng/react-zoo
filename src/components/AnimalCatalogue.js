import React, { Component } from 'react';
import AnimalCard from './AnimalCard'

class AnimalCatalogue extends Component {
  render() {
    return (
      <div>
        <h2>Animal Catalogue</h2>
        <div className="container row">
          {this.props.animals.map(animal => <AnimalCard animal={animal} handleClick={this.props.handleClick} /> )}
        </div>
      </div>
    );
  }
}

export default AnimalCatalogue;
