import React from 'react';
import PropTypes from 'prop-types';
import TodosItem from './TodosItem';

const TodosList = (props) => {
  const {
    todo, handleChanges, deleteTodo, setUpdate,
  } = props;
  return (
    <div>
      <ul>
        {
            todo.map((item) => (
              <TodosItem
                key={item.id}
                todo={item}
                handlechanges={handleChanges}
                deleteTodo={deleteTodo}
                setUpdate={setUpdate}
              />
            ))
        }
      </ul>
    </div>
  );
};
TodosList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.array.isRequired,
  handleChanges: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosList;
