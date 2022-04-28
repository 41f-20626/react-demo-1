import './App.css';
import React from 'react';
import Entete from '../Entete/Entete';
import ListeProduit from '../ListeProduit/ListeProduit';
import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Accueil from '../Accueil/Accueil';
import DetailsProduit from '../DetailsProduit/DetailsProduit';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {  // État
      compteur : 0  
    };

    /*this.augmenter = this.augmenter.bind(this);
    this.decroitre = this.decroitre.bind(this);
    */
  }

  /*augmenter(){
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


  }*/
  render(){

    // Il peut y avoir du code ici...

    return(
      <Router>
        <Entete titre="Mon application react"/>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/produit" element={<ListeProduit/>} />
          <Route path="/produit/:id_biere" element={<DetailsProduit/>} />
             
          <Route path="*" element={<p>Page non trouvée</p>} />
        </Routes>

      </Router>
      
      
    
 
    );
  }

}
