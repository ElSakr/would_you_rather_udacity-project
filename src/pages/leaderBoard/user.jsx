import React from 'react';

const User = ({ name }) => {
  return (
    <div className="user-info">
      <div>
        <img src={name.avatar} alt={`${name.name}'s avatar`} width="80" />
      </div>
      <div>
        <h3>{name.name}</h3>
        <p>
          <span>Answered questions</span>
          <span>{name.answered}</span>
        </p>
        <p>
          <span>Created questions</span>
          <span>{name.asked}</span>
        </p>
      </div>
      <div className="score">
        <p>score</p>
        <div>{name.total}</div>
      </div>
    </div>
  );
};

export default User;
