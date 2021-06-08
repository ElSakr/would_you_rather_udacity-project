import { QUESTIONS_ACTION_TYPES } from './../types/questions';
const INITIAL_STATE = {};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTIONS_ACTION_TYPES.setQuesitions:
      return {
        ...state,
        ...action.payload
      };

    case QUESTIONS_ACTION_TYPES.answerQuestion:
      return {
        ...state,
        [action.payload.qid]: {
          ...state[action.payload.qid],
          [action.payload.answer]: {
            ...state[action.payload.qid][action.payload.answer],
            votes: state[action.payload.qid][
              action.payload.answer
            ].votes.concat(action.payload.authedUser)
          }
        }
      };
    default:
      return state;
  }
};

export default questions;
