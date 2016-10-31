import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => {

  return (

    <div className="footer">
      <p>© 2016 - Barry Balondo</p>
      <ul className="list-inline">
        <li>
            <a href="https://www.facebook.com/barry.balondo"><FontAwesome name="facebook-square" /></a>
        </li>   
        <li>
            <a href="https://github.com/barrybalondo"><FontAwesome name="github" /></a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/barrybalondo"><FontAwesome name="linkedin-square" /></a>
        </li>
      </ul>
    </div>
    

  );

}