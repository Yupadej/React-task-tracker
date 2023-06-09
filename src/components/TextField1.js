import React, { useState, useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function TextField1() {
  const [text, setText] = useState("Enter your bio");
  const rendercount = useRef(1);
  const buttonRef = useRef();

  useEffect(() => {
    console.log(`You bio is \n ${text}`);
  }, []);
  const changeHandler = (e) => {
    return setText(e.target.value);
  };
  const clickHandler = (e) => {
    setText(text.toUpperCase());
  };
  const clearHandler = (e) => {
    console.log(buttonRef.current);
    buttonRef.current.disabled = true;
  };
  useEffect(() => {
    rendercount.current = rendercount.current + 1;
  });

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "20ch",
          display: "flex",
          alignItems: "flex-end",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        value={text}
        label="Your Bio"
        multiline
        rows={4}
        variant="outlined"
        onChange={changeHandler}
      />
      <Button variant="contained" ref={buttonRef} onClick={clickHandler}>
        Save the task
      </Button>
      <p>rendered {rendercount.current} times</p>
      <Button variant="contained" onClick={clearHandler}>
        clear input
      </Button>
    </Box>
  );
}
