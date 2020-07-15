import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getTodosThunk from '../thunks/todos';
import { todosSelector } from '../reducers/todos';

const Todo = ({ title }) => <span>{title}</span>;

const ReduxTodos = ({
  getTodos, loading, error, todos,
}) => (
  <div className="ReduxTodos">
    <h2>Redux Todos</h2>
    <button type="button" onClick={getTodos}>Get Todos</button>
    { loading && <span>...Loading</span> }
    { error && <span>{error}</span>}
    {
      todos.map(({ title, id }) => <Todo title={title} key={id} />)
    }
  </div>
);

const mapStateToProps = (state) => {
  const { loading, todos, error } = todosSelector(state);

  return {
    loading,
    todos,
    error,
  };
};

const mapDispatchToProps = {
  getTodos: getTodosThunk,
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

ReduxTodos.defaultProps = {
  error: '',
};

ReduxTodos.propTypes = {
  getTodos: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxTodos);
