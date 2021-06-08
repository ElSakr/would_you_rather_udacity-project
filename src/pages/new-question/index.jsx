import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { _saveQuestion, _getQuestions } from './../../utils/_DATA';
import { setAllQuestions } from './../../store/actions/questions';
import { Button } from 'antd';
import AppHeader from './../../components/header';

const NewQuestion = ({ authedUser, history }) => {
  const [optionOne, setOptionOne] = useState(null);
  const [optionTwo, setOptionTwo] = useState(null);
  const dispatch = useDispatch();
  const handelSubmit = e => {
    e.preventDefault();
    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    };

    if (!optionOne || !optionTwo) {
      alert('Please fill in the questions!');
    } else {
      _saveQuestion(question).then(() => {
        _getQuestions().then(all => dispatch(setAllQuestions(all)));
        history.push('/');
      });
    }
  };

  return (
    <div className="form-wrapper">
    <AppHeader />
      <h2>Create a New Question</h2>
      <h4>Would you rather...</h4>
      <form onSubmit={handelSubmit}>
        <div className="input-wrapper m-5">
          <input
            type="text"
            name="optionOne"
            id="option1"
            placeholder="Enter option one"
            onChange={e => setOptionOne(e.target.value)}
          />
        </div>

        <div className="input-wrapper m-5">
          <input
            type="text"
            name="optionTwo"
            id="option2"
            placeholder="Enter option two"
            onChange={e => setOptionTwo(e.target.value)}
          />
        </div>

        <Button type="primary" htmlType="submit" className="login-form-button">
          Submit
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authedUser: state?.login?.user?.id
  };
};
export default connect(mapStateToProps, {})(withRouter(NewQuestion));
