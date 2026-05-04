"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const UseEffectDemo = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        useEffect
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Runs a side effect after render (like a timer or data fetch) and cleans it up when the component unmounts.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body2" gutterBottom>
        Time since this component mounted:
      </Typography>
      <Chip label={`${seconds} second${seconds !== 1 ? "s" : ""}`} color="primary" />
    </Box>
  );
};

export default UseEffectDemo;
