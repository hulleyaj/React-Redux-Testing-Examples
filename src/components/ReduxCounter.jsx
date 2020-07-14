import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  decrementCountAction,
  incrementCountAction,
} from '../actions';
import { countSelector } from '../reducers/counter';

const ReduxCounter = ({ decrementCount, incrementCount, count }) => (
  <div>
    <h2>Redux Counter</h2>
    <button type="button" onClick={decrementCount}>-</button>
    {count}
    <button type="button" onClick={incrementCount}>+</button>
  </div>
);

const mapStateToProps = (state) => ({
  count: countSelector(state),
});

const mapDispatchToProps = {
  decrementCount: decrementCountAction,
  incrementCount: incrementCountAction,
};

ReduxCounter.propTypes = {
  decrementCount: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxCounter);
