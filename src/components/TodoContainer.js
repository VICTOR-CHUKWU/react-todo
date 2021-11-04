import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from '../data';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

const TodoContainer = () => {
  const [todos, setIsTodos] = useState(data);
  const handleChange = (id) => {
    setIsTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    );
  };

  const delTodo = (id) => {
    setIsTodos(
      todos.filter((item) => item.id !== id),
    );
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    const newestTodo = [...todos, newTodo];
    setIsTodos(
      newestTodo,
    );
  };

  const setUpdate = (updatedTitle, id) => {
    setIsTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: updatedTitle,
          };
        }
        return item;
      }),
    );
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList
          todo={todos}
          handleChanges={handleChange}
          deleteTodo={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
