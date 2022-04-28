import './Produit.css';
import React from 'react';

export default class Produit extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
    
  }

  render(){
    return(
      <article className='unProduit'>
        <p>Nom : {this.props.produit.nom}</p>
        <p>Fabricant : {this.props.produit.brasserie}</p>
      </article>
    );
  }

}
