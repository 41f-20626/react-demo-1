import './ListeProduit.css';
import React from 'react';

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
    const mesProduits = this.state.items.map((item, index)=>{
                                              return <li key={item.id}>{item.nom}</li>
                                              });

    return(
      <article>
        <h1>Liste de produit</h1>
        <section>
          <ul>
          {mesProduits} 
        </ul>

        </section>


      </article>
    );
  }

}
