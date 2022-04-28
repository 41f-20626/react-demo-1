import './ListeProduit.css';
import React from 'react';
import Produit from '../Produit/Produit';
import { Link } from 'react-router-dom';

export default class ListeProduit extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      items: []

    };
    
    /*for(let i=0; i< 25; i++){
      this.state.items.push({
        id_biere: i,
        nom: "Lorem_"+ i,
        brasserie : "Ipsum_" + (i % 3)
      });
    }*/

    //console.log(this.state.items);

  }

  componentDidMount(){
    fetch("http://127.0.0.1:8000/webservice/php/biere/")
      .then(reponse => reponse.json())
      .then(donnees => {
        this.setState({items : donnees.data});
        
        console.log(donnees);
      })


  }


  render(){
    console.log(this.state)
    const mesProduits = this.state.items.map((item, index)=>{
                                              //return <Produit key={item.id} nom={item.nom} fabricant={item.fabricant} id={item.id} />
                                              return <Link key={index}  to={"/produit/"+item.id_biere} ><Produit produit={item} /> </Link>
                                              //return <Produit key={item.id} {...item} />
                                              })

    return(
      <article>
        <h1>Liste de produit</h1>
        <p>Il y a {mesProduits.length} produits</p>
        <section className='listeProduit'>
         
         {mesProduits}

        </section>


      </article>
    );
  }

}
