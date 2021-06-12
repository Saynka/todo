import { useState, useContext } from 'react';
import { SiteContext } from '../context/Site.js';
import { ThemeContext } from '../context/Theme.js';

function Form(props) {

  const [item, setItem] = useState({});

  // this "opts into" the context, "grabbing it" from the blob
  // const siteInformation = useContext(SiteContext);
  // const themeStuff = useContext(ThemeContext);

  const handleChange = e => {
    setItem({ item: { ...item, [e.target.name]: e.target.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   siteInformation.changeTitleTo(newTitle);
  // }

  return (
    <>
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
    </>
  )

}

export default Form;
