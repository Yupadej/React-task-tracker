import React, { useState } from "react";

import Button from "@mui/material/Button";

const ButtonCounter = () => {
  const [count, setcount] = useState(0);
  const handleClick = (e) => {
    setcount(count + 1);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        {count}
      </Button>
    </div>
  );
};

export default ButtonCounter;
