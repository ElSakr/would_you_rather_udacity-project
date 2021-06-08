import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Tabs } from 'antd';
import Pool from './../../components/pool';
import { _getQuestions, _getUsers } from './../../utils/_DATA';
import {
  _getAnsweredQuestions,
  _getUnAnsweredQuestions
} from './../../utils/shared';
import { setAllQuestions } from './../../store/actions/questions';
import { set_users } from './../../store/actions/login';
import AppHeader from './../../components/header';

const Home = props => {
  const { current_user, questions } = props;
  const { TabPane } = Tabs;
  const [users, setUsers] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [unAnsweredQuestions, setUnAnsweredQuestions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    _getUsers().then(allUsers => {
      setUsers(allUsers);
      dispatch(set_users(allUsers));
    });

    _getQuestions().then(questions => {
      dispatch(setAllQuestions(questions));
      _getAnsweredQuestions(
        current_user?.id,
        questions
      ).then(answeredQuestions => setAnsweredQuestions(answeredQuestions));

      _getUnAnsweredQuestions(
        current_user?.id,
        questions
      ).then(unAnsweredQuestions =>
        setUnAnsweredQuestions(unAnsweredQuestions)
      );
    });
  }, []);

  useEffect(() => {
    _getAnsweredQuestions(current_user?.id, questions).then(answeredQuestions =>
      setAnsweredQuestions(answeredQuestions)
    );

    _getUnAnsweredQuestions(
      current_user?.id,
      questions
    ).then(unAnsweredQuestions => setUnAnsweredQuestions(unAnsweredQuestions));
  }, [questions]);

  return (
    <>
    <AppHeader />
    <Tabs defaultActiveKey="1">
      <TabPane tab="Unanswered" key="1">
        {unAnsweredQuestions?.length ? (
          unAnsweredQuestions.map(answered => (
            <Pool
              key={answered?.id}
              question={answered}
              author={users[answered?.author]}
              isAnswered={false}
              authedUser={current_user?.id}
            />
          ))
        ) : (
          <p>No Questions</p>
        )}
      </TabPane>
      <TabPane tab="Answered" key="2">
        {answeredQuestions?.length ? (
          answeredQuestions.map(answered => (
            <Pool
              key={answered?.id}
              question={answered}
              author={users[answered?.author]}
              isAnswered={true}
              authedUser={current_user?.id}
            />
          ))
        ) : (
          <p>No Questions</p>
        )}
      </TabPane>
    </Tabs>
    </>
  );
};

const mapStateToProps = state => {
  return {
    current_user: state?.login?.user,
    questions: state?.questions
  };
};

export default connect(mapStateToProps, {})(withRouter(Home));
