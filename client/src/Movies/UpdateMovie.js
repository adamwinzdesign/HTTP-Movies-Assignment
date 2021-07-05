import React, { useState, useEffect } from 'react';
import axios from 'axios';
import e from 'express';

const initialItem = {
  title: '',
  director: '',
  metascore: ''
}

const UpdateMovie = props => {
  const [movie, setMovie] = useState(initialItem);
  useEffect(() => {
    const itemToEdit = props.items.find(
      item => `${item.id}` === props.match.params.id
    );
    console.log(props.items, itemToEdit);
    if(itemToEdit) {
      setMovie(itemToEdit);
    }
  }, [props.items, props.match.params.id]);

  const changeHandler = event => {
    event.persist();
    let value = event.target.value;
    if(event.target.name === 'price') {
      value = parseInt(value, 10);
    }

    setItem({
      ...item,
      [event.target.name]: value
    })
  }

  const handleSubmit = event => {
    e.preventDefault();
    axios
    .put(`http.//http://localhost:5000/api/movies/${movie.id}`, item)
    .then(res => {
      props.updateMovie(res.data);
      props.history.push('/movies');
    })
    .catch(error => console.log(error.response));
  };

  return (
    <div>
      <h2>Update Movie!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          onChange={changeHandler}
          placeholder='name'
          value={item.name}
        />
        <input 
          type='text'
          name='director'
          onChange={changeHandler}
          placeholder='director'
          value={item.director}
        />
        <input
          type='number'
          name='metascore'
          onChange={changeHandler}
          value={item.metascore}
        />
      </form>
    </div>
  )
  
}

export default UpdateMovie;