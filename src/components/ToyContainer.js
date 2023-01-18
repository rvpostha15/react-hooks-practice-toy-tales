import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDelete, url, handleLike}) {
  // console.log(toys);
  
  const renderToys = toys.map(toy => (
    <ToyCard 
      key={toy.id}
      toy={toy}
      handleDelete={handleDelete}
      handleLike={handleLike}
      url={url}
    />
  ))
  
  return (
    <div id="toy-collection">
      {renderToys}
    </div>
  );
}

export default ToyContainer;
