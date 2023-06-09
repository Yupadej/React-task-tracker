import React, { useEffect, useState, useReducer } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useParams } from "react-router-dom";
import TaskField from "./TaskField";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const TaskItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(typeof id);
  const [taskInfo, setTask] = useState(null);
  const [editState, setEditState] = useState(false);
  const [updatestate, setupdatestate] = useState({
    update: false,
    display: true,
  });
  const deleteHandler = (e) => {
    fetch(`http://localhost:9000/taskarray/${id}`, {
      method: "DELETE",
    })
      .then(console.log("task deleted"))
      .then(() => {
        navigate(-1);
      });
  };
  //   const [checkboxState, setCheckboxState] = useState(taskInfo.done);
  console.log(`update state display ${updatestate.update}`);
  const fetchTask = async () => {
    let data = await fetch(`http://localhost:9000/taskarray/${id}`, {
      method: "GET",
    });
    // data = await JSON.parse(JSON.stringify(data));
    data = await data.json();
    setTask(data);
    console.log(`Hi ${data}`);
  };
  const editHandler = () => {
    setEditState((prevEditState) => {
      return !prevEditState;
    });
  };

  const clickHandler = (e) => {
    setTask({ ...taskInfo, done: e.target.checked });
    fetch(`http://localhost:9000/taskarray/${taskInfo.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        task: taskInfo.task,
        done: e.target.checked,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  useEffect(() => {
    fetchTask();
  }, [updatestate]);

  const update = () => {
    console.log(`updatesta.update ${updatestate.update}`);
    // if (updatestate.update) {
    //   setupdatestate({ update: false, ...updatestate });
    // } else {
    //   setupdatestate({ update: true, ...updatestate });
    // }
    setupdatestate((prevupdatestate) => {
      return {
        ...prevupdatestate,
        update: !prevupdatestate.update,
      };
    });

    console.log("In update state");
    console.log(updatestate);
  };

  return (
    <>
      {updatestate.display && (
        <Box>
          {taskInfo && (
            <Card>
              <CardContent>
                <Typography fontWeight={"bold"}>Task {id}</Typography>
                <Typography>{taskInfo.task}</Typography>
              </CardContent>
              <CardActions>
                <FormGroup>
                  <FormControlLabel
                    sx={{ fontWeight: "bold" }}
                    control={
                      <Checkbox
                        checked={taskInfo.done}
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
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ "& > :not(style)": { mt: 5, mr: 7 } }}>
                      <Fab
                        color="primary"
                        aria-label="edit"
                        onClick={editHandler}
                      >
                        <EditIcon />
                      </Fab>
                    </Box>
                    <div>
                      {editState && <TaskField id={id} update={update} />}
                    </div>
                    <Button
                      variant="outlined"
                      sx={{ color: "#bc4749", borderColor: "f72585" }}
                      startIcon={<DeleteIcon />}
                      onClick={deleteHandler}
                    >
                      Delete
                    </Button>
                  </Box>
                </FormGroup>
              </CardActions>
            </Card>
          )}
        </Box>
      )}
    </>
  );
};

export default TaskItem;
