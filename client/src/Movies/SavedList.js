import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// export default class SavedList extends Component {
//   constructor(props) {
//     super(props);
//   }

function SavedList(props) {
  if(props.list.length === 0) {
    return <p>No saved Movies</p>
  }
  // render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map((movie, index) => (
          <span key={index} className="saved-movie">{movie.title}</span>
        ))}
        <div className="home-button"><Link to="/">Home</Link></div>
      </div>
    );
//   }
}

export default SavedList;
