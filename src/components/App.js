import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  
  const [toys, setToys] = useState([])
  const [showForm, setShowForm] = useState(false);
  
  const url = 'http://localhost:3001/toys'

  useEffect(() => {
    fetch(url)
  .then((res) => res.json())
  .then((toys) => setToys(toys))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const updateToys = (newToy) => {
    const toysToDisplay = [...toys, newToy]
    setToys(toysToDisplay)
  }

  const handleDelete = (toyToDelete) => (
    setToys(toys.filter(toy => toyToDelete.id !== toy.id))
  )

  const handleLike = (toyToLike) => {
    const toysToDisplay = toys.map(toy=>
      toyToLike.id === toy.id ? toyToLike: toy)
    
    setToys(toysToDisplay)
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm updateToys={updateToys} url={url}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys}
        handleDelete={handleDelete}
        handleLike={handleLike}
        url={url}
      />
    </>
  );
}

export default App;
