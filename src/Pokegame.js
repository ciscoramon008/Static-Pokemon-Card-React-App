import React from 'react';
import Pokedeck from './Pokedeck';
// import Pokecard from './Pokecard';

class Pokegame extends React.Component{
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmender', type: 'fire', exp: 62},
            {id: 7, name: 'Squirtle', type: 'water', exp: 63},
            {id: 11, name: 'Metapod', type: 'bug', exp: 72},
            {id: 12, name: 'Butterfree', type: 'flying', exp: 178},
            {id: 25, name: 'Pikachu', type: 'electric', exp: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', exp: 95},
            {id: 94, name: 'Gengar', type: 'poison', exp: 225},
            {id: 133, name: 'Eevee', type: 'normal', exp: 65},
        ]
    }
    render(){
        let hand1 = [];
        let hand2 = [...this.props.pokemon]

        while(hand1.length < hand2.length){
            let i = Math.floor(Math.random() * hand2.length);
            let x = hand2.splice(i, 1)[0];
            hand1.push(x);
        }

        let sum1 = hand1.reduce((exp, pokemon) => exp + pokemon.exp, 0);
        let sum2 = hand2.reduce((exp, pokemon) => exp + pokemon.exp, 0);
        
        return (
            <div>
                <Pokedeck pokemon={hand1} expr={sum1} isWinner={sum1 > sum2}/>
                <Pokedeck pokemon={hand2} expr={sum2} isWinner={sum2 > sum1}/>
            </div>
        );
    }
}

export default Pokegame;