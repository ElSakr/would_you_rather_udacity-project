import React, { useState } from 'react';
import { connect } from 'react-redux';
import User from './user';
import AppHeader from './../../components/header';

const LeaderBoard = props => {
  const { users } = props;
  const names = users ? Object.keys(users) : null;
  const [formated, setFormated] = useState(
    names !== null
      ? names
          .map(name => ({
            id: users[name].id,
            name: users[name].name,
            asked: users[name].questions.length,
            answered: Object.keys(users[name].answers).length,
            total:
              Object.keys(users[name].answers).length +
              users[name].questions.length,
            avatar: users[name].avatarURL
          }))
          .sort((a, b) => b.total - a.total)
      : []
  );

  return (
    <div>
      <AppHeader />
      {!formated.length
        ? null
        : formated.map(name => (
            <div key={name?.id}>
              <User name={name} />
            </div>
          ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    current_user: state?.login?.user,
    questions: state?.questions,
    users: state?.login?.users
  };
};
export default connect(mapStateToProps, {})(LeaderBoard);
