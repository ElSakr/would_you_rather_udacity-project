import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, Progress } from 'antd';
import AppHeader from './../../components/header';

const Results = props => {
  const { questions, authedUser } = props;
  const [userAnswer, setUserAnswer] = useState();
  let { id } = useParams();
  const question = questions[id];
  console.log('id', questions[id]);
  const { Meta } = Card;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;

  const totalVotes = optionOneVotes + optionTwoVotes;

  const optionOnePersent =
    optionOneVotes === 0 ? 0 : Math.round((optionOneVotes / totalVotes) * 100);
  const optionTwoPersent =
    optionTwoVotes === 0 ? 0 : Math.round((optionTwoVotes / totalVotes) * 100);

  if (question.optionOne.votes.includes(authedUser)) {
    setUserAnswer('optionOne');
  }
  if (question.optionTwo.votes.includes(authedUser)) {
    setUserAnswer('optionTwo');
  }

  return (
    <>
    <AppHeader />
    <Card style={{ width: 300, margin: 20 }} actions={[]}>
      <Meta
        title={`${question?.author} asks: `}
        description={`
      Results:
      Would you rather`}
      />
      <div className="info mt-5">
        <div className="option1">
          <p>{question?.optionOne?.text}</p>
          <div className="progress-tab">
            <Progress percent={optionOnePersent} />
            {optionOneVotes} of {totalVotes} votes
          </div>
        </div>
        <div className="option2 mt-5">
          <p>{question?.optionTwo?.text}</p>
          <div className="progress-tab">
            <Progress percent={optionTwoPersent} status="active" />
            {optionTwoVotes} of {totalVotes} votes
          </div>
        </div>
      </div>
    </Card>
    </>
  );
};

const mapStateToProps = state => {
  return {
    authedUser: state?.login?.user,
    questions: state?.questions
  };
};
export default connect(mapStateToProps, {})(Results);
