import React from "react";
import "./App.css";
import TextField1 from "./components/TextField1";
import Welcome from "./components/Welcome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import ButtonCounter from "./components/ButtonCounter";
import Image from "./components/Image";
import ButtonDisables from "./components/ButtonDisables";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TaskItem from "./components/TaskItem";

const my_name = "Krishna";
let App = () => {
  return (
    <div
      style={{
        backgroundColor: "#BDE0FE",
        height: "100%",
      }}
    >
      <Welcome name1={my_name} />
      <Routes>
        <Route path="/" exact element={<TextField1 />} />
        <Route path="/button" element={<ButtonCounter />} />
        <Route
          path="/image"
          element={
            <Image
              src="https://st.depositphotos.com/1477006/1977/i/450/depositphotos_19771541-stock-photo-cows-on-farm.jpg"
              title="Cow"
            />
          }
        />
        <Route path="/disablebutton" element={<ButtonDisables />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/todolist/:id" element={<TaskItem />} />
      </Routes>
    </div>
  );
};
export default App;
