import React from 'react';
import { Link } from 'react-router';

export default () => {

  return (

    <div className="nav">
      <ul>
        <li>
          <Link to="/" >Posts</Link>
        </li>
        <li>
          <Link to="/projects" >Projects</Link>
        </li>
        <li>
          <Link to="/reads" >Reads</Link>
        </li>
        <li>
          <Link to="/about" >About</Link>
        </li>
      </ul>
    </div>

  );

}
