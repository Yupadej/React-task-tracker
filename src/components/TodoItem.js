import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = (props) => {
  const [checkbox, setCheckbox] = useState(props.object.done);
  const deleteHandler = (e) => {
    fetch(`http://localhost:9000/taskarray/${props.object.id}`, {
      method: "DELETE",
    }).then(console.log("task deleted"));
  };
  const clickHandler = (e) => {
    setCheckbox((prevCheckbox) => {
      fetch(`http://localhost:9000/taskarray/${props.object.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          task: props.object.task,
          done: !prevCheckbox,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      return !prevCheckbox;
    });
  };
  return (
    <div>
      <Card
        sx={{
          maxWidth: 600,
          m: 3,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          //   border: "solid",
          backgroundColor: "#A2D2FF",
        }}
      >
        <Link
          to={{ pathname: `/todolist/${props.object.id}` }}
          style={{ textDecoration: "none" }}
        >
          <CardContent>
            <Typography sx={{ color: "black" }}>{props.object.task}</Typography>
          </CardContent>
        </Link>
        <CardActions>
          <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
            <FormControlLabel
              sx={{ fontWeight: "bold" }}
              control={
                <Checkbox
                  checked={checkbox}
                  onClick={clickHandler}
                  sx={{
                    color: "black",
                    "&$checked": {
                      color: "white",
                    },
                  }}
                />
              }
              label="Done"
            />
            <Button
              variant="outlined"
              sx={{ color: "#bc4749", borderColor: "f72585" }}
              startIcon={<DeleteIcon />}
              onClick={deleteHandler}
            >
              Delete
            </Button>
          </FormGroup>
        </CardActions>
      </Card>
    </div>
  );
};

export default TodoItem;
