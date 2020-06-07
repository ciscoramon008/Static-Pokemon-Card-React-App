import React, {Component} from 'react';
import './Pokecard.css';
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let PadToThree = num => num <= 999 ? `00${num}`.slice(-3) : num;

class Pokecard extends Component{
    render(){

        let imgSrc = `${POKE_API}${PadToThree(this.props.id)}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokcecard-title">{this.props.name}</h1>
                <div className="Pokecard-Image">
                    <img src={imgSrc} alt={this.props.name}/>
                </div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Exp: {this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;