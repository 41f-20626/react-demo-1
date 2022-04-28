import './Entete.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
        <nav>
          <ul>
            <li><a href='/'>Accueil (a)</a></li>
            <li><Link exact to='/'>Accueil (Link)</Link></li>
            <li><NavLink exact to='/'>Accueil (NavLink)</NavLink></li>
            <li><a href='/produit'>Liste des produits (a)</a></li>
            <li><Link exact to='/produit'>Liste des produits (link)</Link></li>
            <li><NavLink exact to='/produit'>Liste des produits (NavLink)</NavLink></li>
           
          </ul>

        </nav>
      </header>
    );
  }

}
