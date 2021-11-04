import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import TodosItem from './TodosItem';

const InputTodo = (props) => {
  const { addTodoItem } = props;
  const [title, setInputText] = useState('');

  const onChange = (e) => {
    setInputText(
      [e.target.name] = e.target.value,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setInputText('');
    } else {
      alert('Please write item');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" placeholder="Add Todo..." value={title} onChange={onChange} name={title} className="input-text" />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};
InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
