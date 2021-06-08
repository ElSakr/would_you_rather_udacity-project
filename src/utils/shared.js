import { _getQuestions } from './_DATA';

export const _getAnsweredQuestions = (authedUser, questions) => {
  return new Promise((res, rej) => {
    setTimeout(
      () =>
        res(
          !authedUser
            ? []
            : Object.keys(questions)
                .filter(
                  key =>
                    questions[key].optionOne.votes.includes(authedUser) ||
                    questions[key].optionTwo.votes.includes(authedUser)
                )
                .map(ques => questions[ques])
                .sort((a, b) => b.timestamp - a.timestamp)
        ),
      1000
    );
  });
};

export const _getUnAnsweredQuestions = (authedUser, questions) => {
  return new Promise((res, rej) => {
    setTimeout(
      () =>
        res(
          !authedUser
            ? []
            : Object.keys(questions)
                .filter(
                  key =>
                    !questions[key].optionOne.votes.includes(authedUser) &&
                    !questions[key].optionTwo.votes.includes(authedUser)
                )
                .map(ques => questions[ques])
                .sort((a, b) => b.timestamp - a.timestamp)
        ),
      1000
    );
  });
};
