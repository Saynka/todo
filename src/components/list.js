
import React, { useEffect, useState } from 'react';

const TodoList = (props) => {

  const [list, setList] = useState(props.list);

  useEffect(() => {
    setList(props.list);
  }, [props.list]);


  return (
    <ul>
      {list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}


export default TodoList;
