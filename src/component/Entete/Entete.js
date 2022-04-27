import './Entete.css';
import React from 'react';

export default class Entete extends React.Component{
  constructor(props){
    super(props);



    /*
    this.state = {compteur : props.nombre};

    this.moins = this.moins.bind(this)
    this.plus = this.plus.bind(this)*/
  }

  /*plus(){
      this.setState({
          compteur : this.state.compteur + 1
      });
  }

  moins(){
    this.setState({
        compteur : this.state.compteur - 1
    });
  }*/
  render(){
    const titre = this.props.titre || "Titre de l'application";
    // Il peut y avoir du code ici...

    return(
      <header>
        <h1>{titre}</h1>
        {/*
        <p>Compteur : {this.state.compteur}</p> <button onClick={this.moins}>moins</button><button onClick={this.plus}>plus</button>
        <p>Nombre : {this.props.nombre}</p>
        <button onClick={this.props.fctDecroitre}>Décroître les trucs</button>
      */}
      </header>
    );
  }

}
