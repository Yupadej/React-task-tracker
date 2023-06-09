import React, { useState, useEffect } from "react";
import myjson from "../assets/todolist.json";
import TodoItem from "./TodoItem";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TaskField from "./TaskField";
import { Link } from "react-router-dom";

const TodoList = () => {
  const tasks_object = JSON.parse(JSON.stringify(myjson));
  const [my_list, setmy_list] = useState(null);
  const fetchRequest = async () => {
    const hello = await setTimeout(() => console.log("Hi"), 5000);
    let data = await fetch("http://localhost:9000/taskarray");
    data = await data.json();
    setmy_list((prevmy_list) => {
      return data;
    });
    console.log(data);

    //my_list = data;
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  const [addState, setaddState] = useState(false);
  console.log(tasks_object);
  //my_list = tasks_object.taskarray;

  console.log(`MY LIST ${my_list}`);
  const addHandler = (e) => {
    setaddState((prevaddState) => !prevaddState);
    return;
  };

  return (
    <div>
      {my_list && (
        <Box
          sx={{
            backgroundColor: "#FFC8DD",
            boxShadow: "2px 3px 20px 7px black;",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#FFC8DD",

              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              flexWrap: "wrap",
              flexGrow: "1",
            }}
          >
            {my_list.map((my_object) => (
              <TodoItem object={my_object} key={my_object.id} />
            ))}
            {/* <TodoItem object={my_list[0]} /> */}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ "& > :not(style)": { mt: 5, mr: 7 } }}>
              <Fab color="primary" aria-label="add" onClick={addHandler}>
                <AddIcon />
              </Fab>
            </Box>
            <div>{addState && <TaskField id={null} />}</div>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default TodoList;
