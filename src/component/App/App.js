import './App.css';
import React from 'react';
import Entete from '../Entete/Entete';


export default class App extends React.Component{
  constructor(){
    super();
  }

  render(){

    // Il peut y avoir du code ici...

    return(
      <main>
        <Entete />

        <article>
          <h1>Allo le monde</h1>
        </article>
      </main>
      
    );
  }

}
