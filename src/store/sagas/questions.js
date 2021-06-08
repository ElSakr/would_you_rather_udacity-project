import { call, takeLatest } from 'redux-saga/effects';
import { QUESTIONS_ACTION_TYPES } from './../types/questions';
import { _getQuestions, _saveQuestionAnswer } from './../../utils/_DATA';

export function* save_answer({ payload }) {
  try {
    yield call(_saveQuestionAnswer, payload);
  } catch (e) {
    console.log(e);
  }
}

export function* questionsSaga() {
  yield takeLatest(QUESTIONS_ACTION_TYPES.answerQuestion, save_answer);
}
