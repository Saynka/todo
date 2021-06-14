import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

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
        <h1>Add Item</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span id='item'>To Do Item</span>
            <input
              placeholder='Add to do list item'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='todo-input edit'
            />
          </label>
          <label>
            <span id='item'>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
          </label>
          <label>
            <span id='item'>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} className='todo-input edit' />
          </label>
        </form>
      </div>

      <div>
        <form onSubmit={handleSubmit} className='todo-form'>
          {props.edit ? (
            <>
              <input
                placeholder='Update your item'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef}
                className='todo-input edit'
              />
              <button onClick={handleSubmit} className='todo-button edit'>
                Update
          </button>
            </>
          ) : (
            <>
              <input
                placeholder='Todo'
                value={input}
                onChange={handleChange}
                name='text'
                className='todo-input'
                ref={inputRef}
              />
              <button onClick={handleSubmit} className='todo-button'>
                Add Item
          </button>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default TodoForm;