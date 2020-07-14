import {
  DECREMENT_COUNT,
  INCREMENT_COUNT,
} from '../constants/actions';

export const decrementCountAction = () => ({
  type: DECREMENT_COUNT,
});

export const incrementCountAction = () => ({
  type: INCREMENT_COUNT,
});
