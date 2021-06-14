import React, { useState, useEffect, useRef } from 'react';

function TodoForm2(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <>
      <div>
        <h3>Add Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} />
          </label>
          <button>Add Item</button>
        </form>
      </div>
    </>
  );
}


export default TodoForm2;