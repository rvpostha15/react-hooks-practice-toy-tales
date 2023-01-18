import React from "react";

function ToyCard({toy, handleDelete, url, handleLike}) {

  const {id, name, image, likes,} = toy

  const handleDeleteClick = () => {
    const configObj = {
      method: 'DELETE',
    }
    fetch(`${url}/${id}`, configObj)
      .then((res) => res.json())
      .then(()=>handleDelete(toy))
  }

  const handleLikeClick = () => {
    const likedToy = {likes: toy.likes+1}

    const configObj = {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(likedToy)
    }
    fetch(`${url}/${id}`, configObj)
      .then((res) => res.json())
      .then(handleLike)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button 
        onClick={handleLikeClick}
        className="like-btn"
      >Like {"<3"}</button>
      <button
        onClick={handleDeleteClick} 
        className="del-btn"
      >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
