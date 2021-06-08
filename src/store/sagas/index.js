import { all, call } from 'redux-saga/effects';
import { questionsSaga } from './questions';

export function* watchSagas() {
  yield all([call(questionsSaga)]);
}
