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


    return(
      <article>
        <h1>Liste de produit</h1>
        <section>
          <ul>
          {this.state.items.map((item)=>{
            return <li>{item.nom}</li>
          })} 
        </ul>

        </section>


      </article>
    );
  }

}
