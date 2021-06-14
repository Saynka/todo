import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import TodoList from './components/form/TodoList.js';
import LoginContext from './components/auth/Context.js';
import Content from './components/auth/Content.js';
import Login from './components/auth/Login.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <LoginContext>
        <Login />
        <Content />
      </LoginContext>
      <TodoList />

    </>
  );
}

export default App;


