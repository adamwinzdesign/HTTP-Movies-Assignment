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
      setItem(itemToEdit);
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
      props.updateMovie
    })
  }
  
}

export default UpdateMovie;