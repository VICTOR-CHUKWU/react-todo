import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItems.module.css';

const TodosItem = (props) => {
  const [editing, setIsEditing] = useState(false);
  const {
    todo, handlechanges, deleteTodo, setUpdate,
  } = props;
  const { id, title, completed } = todo;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setIsEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };
  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handlechanges(id)}
        />
        <button type="button" onClick={() => deleteTodo(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
TodosItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object.isRequired,
  handlechanges: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosItem;
