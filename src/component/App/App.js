import './App.css';
import React from 'react';
import Entete from '../Entete/Entete';


export default class App extends React.Component{
  constructor(){
    super();
    this.state = {  // État
      compteur : 0  
    };

    this.augmenter = this.augmenter.bind(this);
    this.decroitre = this.decroitre.bind(this);
  }

  augmenter(){
    console.log("+1");
    //this.state.compteur++;
    this.setState(  {
                      compteur : this.state.compteur+1
                    }
                  );
    console.log(this.state.compteur);
  }

  decroitre(){
    console.log("-1");
    //this.state.compteur++;
    this.setState({
        compteur : this.state.compteur - 1
    })
    //this.props.nombre--;


  }
  render(){

    // Il peut y avoir du code ici...

    return(
      <main>
        <Entete titre="Mon application react" fctDecroitre={this.decroitre} nombre={this.state.compteur}/>
        <Entete titre="Mon application react" fctDecroitre={this.decroitre} nombre={this.state.compteur}/>

        <article>
          <h1>Allo le monde</h1>
          <p>Nombre de truc</p>
          <p>{this.state.compteur}</p>
          <button onClick={this.augmenter}>Augmenter les trucs</button>

        </article>
      </main>
      
    );
  }

}
