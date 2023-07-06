import React from 'react';

function Tweet(props) {
  return (
    <div>
      <h2>{props.name} (@{props.username})</h2>
      <h3>{props.date}</h3>
      <p>{props.message}</p>
    </div>
  );
}

export default Tweet;
