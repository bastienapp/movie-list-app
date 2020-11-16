import React from "react";

function MovieDetails(props) {
  const id = props.match.params.id;
  // récupérer la liste des films (appeler l'API)
  // trouver (find) le film dont l'identifiant est id

  return (
    <div>
      <div>{id}</div>
      <div>Title</div>
    </div>
  );
}

export default MovieDetails;
