import React, { useState, useEffect } from 'react';

import { useContext } from 'react';
import { SiteContext } from '../context/Site.js';
import './todo.scss';

function Header(props) {
  const [list, setList] = useState(props.list);

  useEffect(() => {
    setList(props.list);
  }, [props.list]);

  const siteInformation = useContext(SiteContext);

  return (
    <header>{siteInformation.title}
    </header>
  )
}

export default Header;
