import React, { useEffect, useState } from 'react';
import TodoForm from './Form.js';
import TodoList from './list.js';
import Header from './Header.js';

import './todo.scss';

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = (props) => {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList({ list: [...list, item] });
  };


  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let listm = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList({ listm });
    }

  };

  useEffect(() => {
    let list1 = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    setList(list1);
  });

  // const _getTodoItems = () => {
  //   fetch(todoAPI, {
  //     method: 'get',
  //     mode: 'cors',
  //   })
  //     .then(data => data.json())
  //     .then(data => setList(data.results))
  //     .catch(console.error);
  // };

  // useEffect(_getTodoItems, []);

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  // }

  return (
    <>
      <header list={list} />
      <h2>
        There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>


      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;