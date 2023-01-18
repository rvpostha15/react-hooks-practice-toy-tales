import React, {useState} from "react";



function ToyForm({updateToys, url}) {

  const initialState = {
    name: '', image: '',
  }

  const [formData, setFormData] = useState(initialState)
 

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newToy = {
      name: formData.name,
      image: formData.image,
      likes: 0,
    }
    const configObj = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(newToy)
    }
    fetch(url, configObj)
      .then((res) => res.json())
      .then(updateToys)
    
    setFormData(initialState)
  }

  return (
    <div className="container">
      <form 
        onSubmit={handleSubmit}
        className="add-toy-form"
      >
        <h3>Create a toy!</h3>
        <input
          onChange={handleChange}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleChange}
          value={formData.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
