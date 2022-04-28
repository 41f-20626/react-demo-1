import './ListeProduit.css';
import React from 'react';
import Produit from '../Produit/Produit';

export default class ListeProduit extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      items: []

    };
    
    for(let i=0; i< 25; i++){
      this.state.items.push({
        id: i,
        nom: "Lorem_"+ i,
        fabricant : "Ipsum_" + (i % 3)
      });
    }

    //console.log(this.state.items);

  }

  render(){
    console.log(this.state)
    const mesProduits = this.state.items.map((item, index)=>{
                                              //return <Produit key={item.id} nom={item.nom} fabricant={item.fabricant} id={item.id} />
                                              return <Produit key={item.id} produit={item} />
                                              //return <Produit key={item.id} {...item} />
                                              })

    return(
      <article>
        <h1>Liste de produit</h1>
        <section className='listeProduit'>
          <p>Il y a {mesProduits.length} produits</p>
         {mesProduits}

        </section>


      </article>
    );
  }

}
