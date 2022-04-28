import './DetailsProduit.css';
import React from 'react';



export default class DetailsProduit extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      items: []

    };
    console.log("constructeur");

  }

  componentDidMount(){
    
    console.log(this.props);
    /*fetch("http://127.0.0.1:8000/webservice/php/biere/")
      .then(reponse => reponse.json())
      .then(donnees => {
        this.setState({items : donnees.data});
        
        console.log(donnees);
      })*/


  }


  render(){
    
    return(
      <article>
        un Produit avec ses détails
      </article>
    );
  }

}
