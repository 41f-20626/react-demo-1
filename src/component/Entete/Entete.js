import './Entete.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Entete extends React.Component{
  constructor(props){
    super(props);
    this.state = {courriel : ""};
    
    this.login = this.login.bind(this);
    this.changeCourriel = this.changeCourriel.bind(this);

  }


  login(){
    console.log(this.state.courriel);
    // Il pourrait y avoir des conditions ici... comme une validation de courriel avant d'appeler this.props.fctLogin... tsé un if...
    this.props.fctLogin(this.state.courriel);
  }

  changeCourriel(evt){
    this.setState({courriel : evt.target.value})
  }
  render(){
    const titre = this.props.titre || "Titre de l'application";
    // Il peut y avoir du code ici...

    return(
      <header>
        <h1>{titre}</h1>
        <nav>
          <ul>
            {/*<li><a href='/'>Accueil (a)</a></li>
            <li><Link to='/'>Accueil (Link)</Link></li> */}
            <li><NavLink to='/'>Accueil (NavLink)</NavLink></li>
            {/*<li><a href='/produit'>Liste des produits (a)</a></li>
            <li><Link to='/produit'>Liste des produits (link)</Link></li>*/}
            <li><NavLink to='/produit'>Liste des produits (NavLink)</NavLink></li>
           
          </ul>

        </nav>
        <input onChange={this.changeCourriel} type="text" name="courriel"></input>
        <button onClick={this.login}>Login</button>
      </header>
    );
  }

}
