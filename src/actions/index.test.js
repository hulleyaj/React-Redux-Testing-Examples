import {
  DECREMENT_COUNT,
  INCREMENT_COUNT,
} from '../constants/actions';
import {
  decrementCountAction,
  incrementCountAction,
} from '.';

describe('actions', () => {
  it('should decrementCountAction', () => {
    const action = decrementCountAction();

    expect(action.type).toEqual(DECREMENT_COUNT);
  });

  it('should incrementCountAction', () => {
    const action = incrementCountAction();

    expect(action.type).toEqual(INCREMENT_COUNT);
  });
});
