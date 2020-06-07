import React from 'react';
import Pokecard from './Pokecard';
import './Pokedeck.css'

class Pokedeck extends React.Component{
    render(){
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pokedeck-Winner">Winning Hand</h1>
        } else {
            title = <h1 className="Pokedeck-Loser">Losing Hand</h1>
        }
        return (
            <div className="Pokedeck">
                {title}
                <p>Total Experience: {this.props.expr}</p>
                <div className="Pokedeck-cards">
                    {this.props.pokemon.map(p => (
                        <Pokecard id={p.id} type={p.type} name={p.name} exp={p.exp}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedeck;