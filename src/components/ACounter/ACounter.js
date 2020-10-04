import React from 'react';
import { connect } from 'react-redux';
import { increment as incrementAction } from '../../redux/counter/actions';
import { decrement as decrementAction } from '../../redux/counter/actions';
import { reset as resetAction } from '../../redux/counter/actions';

const ACounter = (props) => {
  const { increment, decrement, reset, count } = props;

  return (
    <div className="ACounter">
      ACounter
      <div className="count" data-testid="count">
        {count}
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(incrementAction()),
  decrement: () => dispatch(decrementAction()),
  reset: () => dispatch(resetAction()),
  dispatch,
});

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

export default connect(mapStateToProps, mapDispatchToProps)(ACounter);
