import React from 'react';


export default () => {

    return (

      <div className="container">
        <div className="container-show">
          <h2>Hello World!</h2>
          <p>
            As a kid I always played with legos. It was fun to build things from scratch. You always get that sense of accomplishment
            when you finished something. It also gave you the possibilites to make weird creations with your imagination as the 
            limit. Fast forward to high school I was introduced to promgramming and taught my first "Hello World" in C! 
          </p>
          <p>
            Now I have graduated with a degree in CS. I code everyday to keep myself sharpened. I am not your superstar coder, but I am 
            a diligent one. As current trends change, it has always been a fun hobby to try and keep up. I recently learned React, and guess
            what? This website is made in React! I started to love JavaScript, but I also Java. I guess that's it for now.
          </p>
          <hr className="long"/>
        </div>

        <div className="container-show">
          <h2>Contact</h2>
          <p>
            You can try to reach me by adding me in one of the social networks I provided.
          </p>
          <p>
            I also respond to my emails and you can contact me at, <strong className="email">barry_balondo@hotmail.com</strong>
          </p>
          <hr className="long"/>
        </div>
      </div>

    );

};



