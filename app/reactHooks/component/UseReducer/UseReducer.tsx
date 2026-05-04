"use client";
import { useReducer } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
  }
}

const UseReducerDemo = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        useReducer
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Manages state through named actions and a reducer function — ideal when state has multiple transitions.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h4" gutterBottom>
        {count}
      </Typography>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </Button>
      </Stack>
    </Box>
  );
};

export default UseReducerDemo;
