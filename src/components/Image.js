import React, { useState, useEffect } from "react";
let a = 0;
const Image = (props) => {
  const [click, setclick] = useState(false);

  const clickHandler = (e) => {
    console.log(click);
    a++;
    console.log(a);
    setclick((prevClick) => {
      return !prevClick;
    });
  };
  const my_effect = () => {
    if (a > 0) window.open(props.src);
  };

  useEffect(my_effect, [click]);

  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.src} onClick={clickHandler} alt="cow" />
    </div>
  );
};

export default Image;
