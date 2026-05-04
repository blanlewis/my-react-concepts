"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

const UseStateDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        useState
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Stores a value inside a component and re-renders the UI whenever that value changes.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
        <Button variant="outlined" onClick={() => setCount((count) => count - 1)}>
          -
        </Button>
        <Typography variant="h4">{count}</Typography>
        <Button variant="outlined" onClick={() => setCount((count) => count + 1)}>
          +
        </Button>
      </Stack>
      <Button sx={{ mt: 2 }} size="small" onClick={() => setCount(0)}>
        Reset
      </Button>
    </Box>
  );
};

export default UseStateDemo;
