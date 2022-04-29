import './DetailsProduit.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function DetailsProduit(props) {
    const params = useParams(); // Récupère les paramètres de l'URL

    const [biere, setBiere] = useState({nom:"test"});
    const [commentaires, setCommentaires] = useState([]);
    //console.log(biere, setBiere);

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
    }, [setBiere, setCommentaires]);
    
    const aCommentaires = commentaires.map((comment, index)=>{
      return <blockquote>{comment.commentaire} par {comment.courriel}</blockquote>;
    })

    
    return(
      <article>
       <p>Nom de la bière : {biere?.nom}</p>
        {aCommentaires}

      </article>
    );
}
