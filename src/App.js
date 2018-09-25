import React, { Component } from 'react';
import './App.css';
import AnimalCatalogue from './components/AnimalCatalogue'
import Zoo from './components/Zoo'

class App extends Component {

  state={
    animals:[],
    selected: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/animals')
    .then(res => res.json())
    .then(animals => this.setState({animals}))
  }

  handleClick = (event) =>{
    console.log(event.target.dataset.id)
    let adopted = parseInt(event.target.dataset.id)
    if (this.state.selected.includes(adopted)){
      let temp = this.state.selected.filter(id => id !== adopted )
      return this.setState({selected: temp})
    } else{
    return this.setState({selected: [...this.state.selected, adopted ]})
    }
  }

  animalsForCatalogue = () =>{
    return this.state.animals.filter(animal => !this.state.selected.includes(animal.id))
  }

  animalsForZoo = () =>{
    return this.state.animals.filter(animal => this.state.selected.includes(animal.id))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <AnimalCatalogue animals={this.animalsForCatalogue()} handleClick={this.handleClick} />
        <Zoo animals={this.animalsForZoo()} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
