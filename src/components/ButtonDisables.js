import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
let myBool = false;
const ButtonDisables = () => {
  const [count, setcount] = useState(0);
  if (count == 5) {
    myBool = true;
  }
  const clickHandler = (e) => {
    setcount((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <div>
      <Box m={2} ml={3}>
        <Button
          variant="contained"
          href="#contained-buttons"
          onClick={clickHandler}
          disabled={myBool}
        >
          Clicked {count} times
        </Button>
      </Box>
    </div>
  );
};

export default ButtonDisables;
