import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import UpdateMovie from './Movies/UpdateMovie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        path='/update-movie/:id'
        component={UpdateMovie}
      />
    </>
  );
};

export default App;

// steps for MVP:

// Part 1: Update a movie
// create a route at the path /update-movie/:id
// create a component with a form to update the chosen movie
// add a button in the movie component that routes the user to that movie's update form
// form makes a PUT request to the server when submitted
// when call comes back successfully, reset form state and route user to /movies where they see the updated movie in the list

// Part 2: Delete a movie
// add a delete button to the movie list that makes a delete request
// when call comes back successfully, route user to /movies where they see the list without the deleted movie

// --//--//--//--
// from AH guided walkthrough
// const App = () => {
//   const [savedList, setSavedList] = useState([]);
//   const addToSavedList = movie => {
//     setSavedList([...savedList, movie])
//   }
//   return(
//     <div>
//       <SavedList list={savedList} />
//       <Route exact path='/' component={MovieList} />
//       <Route path='/update-movie/:id' component={UpdateMovie} />
//       <Route path='/movies/:id'
//         render={props => {
//           return <Movie {...props} addToSavedList={addToSavedList}/>
//         }}
//       />
//     </div>
//   )
// }
