import { QUESTIONS_ACTION_TYPES } from './../types/questions';

export const setAllQuestions = payload => ({
  type: QUESTIONS_ACTION_TYPES.setQuesitions,
  payload
});

export const answerQuestion = payload => ({
  type: QUESTIONS_ACTION_TYPES.answerQuestion,
  payload
});
