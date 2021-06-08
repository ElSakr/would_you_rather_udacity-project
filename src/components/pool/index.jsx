import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, Avatar } from 'antd';
import { Radio, Button } from 'antd';
import { answerQuestion } from './../../store/actions/questions';

const Pool = props => {
  const { Meta } = Card;
  const { question, author, isAnswered, authedUser, history, key } = props;
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();
  const onChange = e => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (!isAnswered) {
      if (value) {
        const answerInfo = {
          authedUser,
          qid: question?.id,
          answer: value
        };
        dispatch(answerQuestion(answerInfo));
      }
    } else {
      history.push(`/results/${question?.id}`);
    }
  };
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  };

  const renderValue = () =>
    question.optionOne.votes.includes(authedUser) ? 'optionOne' : 'optionTwo';

  return (
    <Card
      key={key}
      className="pool-card"
      actions={[
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onClick={handleClick}
        >
          {isAnswered ? 'View question' : 'Answer question'}
        </Button>
      ]}
    >
      <Meta
        avatar={<Avatar src={author?.avatarURL} />}
        title={`${question?.author} asked :`}
        description="Would you rather"
      />
      <Radio.Group
        onChange={onChange}
        value={isAnswered ? renderValue() : value}
      >
        <Radio style={radioStyle} value="optionOne">
          {question?.optionOne?.text}
        </Radio>
        <Radio style={radioStyle} value="optionTwo">
          {question?.optionTwo?.text}
        </Radio>
      </Radio.Group>
    </Card>
  );
};

export default withRouter(Pool);
