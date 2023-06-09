import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TaskField = (props) => {
  const id = props.id;
  if (props.id) {
    console.log(`taskfield id ${id}`);
  }

  const [text, setText] = useState("Enter your task");
  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const clickHandler = (e) => {
    if (!props.id) {
      fetch("http://localhost:9000/taskarray/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          task: text,
          done: false,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } else {
      fetch(`http://localhost:9000/taskarray/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          task: text,
          done: false,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          props.update();
        });
    }
  };
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
        label="Your Task"
        multiline
        rows={4}
        variant="outlined"
        onChange={changeHandler}
        sx={{
          backgroundColor: "#BDE0FE",
          boxShadow: "1px 1px 2px 2px grey",
        }}
      />
      <Button variant="contained" onClick={clickHandler}>
        Save the task
      </Button>
    </Box>
  );
};

export default TaskField;
