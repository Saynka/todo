import React from 'react';


import ToDo from './components/todo.js';
import ThemeContext from './context/Theme.js';
import SiteContext from './context/Site.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeContext>
      <SiteContext>
        <ToDo />
      </SiteContext>
    </ThemeContext>
  );
}

export default App;


