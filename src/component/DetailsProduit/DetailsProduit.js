import './DetailsProduit.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function DetailsProduit(props) {
    const params = useParams(); // Récupère les paramètres de l'URL

    const [biere, setBiere] = useState({nom:"test"});
    const [commentaires, setCommentaires] = useState([]);
    const [monCommentaire, setMonCommentaire] = useState("");
    //console.log(biere, setBiere);

    function changeCommentaire(evt){
      setMonCommentaire(evt.target.value);
    }
    function soumettreCommentaire(){
      const oCommentaire = {courriel : props.courriel, commentaire : monCommentaire};
      console.log(oCommentaire);
      // Faire un fetch en PUT!
      const reqOptions = {
        method: "PUT",
        headers : {
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa("biero:biero")
        },
        body : JSON.stringify(oCommentaire)
      }
      fetch("http://127.0.0.1:8000/webservice/php/biere/"+params.id_biere + "/commentaire", reqOptions)
        .then((reponse)=>{
          reponse.json();
          // Dois-je faire autre chose après avoir envoyé un nouveau commentaire ? Mystère...
        })


    }


    console.log(params);

    useEffect(()=>{
      fetch("http://127.0.0.1:8000/webservice/php/biere/"+params.id_biere)
        .then(reponse => reponse.json())
        .then(donnees => {
          setBiere(donnees.data)
        })

      fetch("http://127.0.0.1:8000/webservice/php/biere/"+params.id_biere+ "/commentaire")
        .then(reponse => reponse.json())
        .then(donnees => {
          setCommentaires(donnees.data)
          console.log(donnees.data)
        })
    }, []);
    
    const aCommentaires = commentaires.map((comment, index)=>{
      return <blockquote>{comment.commentaire} par {comment.courriel}</blockquote>;
    })

    let blocCommentaire;
    if(props.courriel != ""){
      blocCommentaire = <article>
                          <input onChange={changeCommentaire} type="text"></input>
                          <button onClick={soumettreCommentaire}>Soumettre le commentaire</button>
                        </article>;
    }
    




    return(
      <article>
        <h1>{props.courriel}</h1>
       <p>Nom de la bière : {biere?.nom}</p>
        {blocCommentaire}
        {aCommentaires}

      </article>
    );
}
