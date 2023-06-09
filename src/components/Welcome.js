import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const Welcome = (props) => {
  return (
    <div>
      <Typography
        m={2}
        ml={4}
        variant="h4"
        sx={{ backgroundColor: "", display: "inline-block" }}
      >
        Welcome {props.name1}
      </Typography>
    </div>
  );
};
Welcome.propTypes = { name1: PropTypes.string };
Welcome.defaultProps = {
  name1: "Your name",
};
export default Welcome;
