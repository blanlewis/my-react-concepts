"use client";
import { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Slider from "@mui/material/Slider";

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const UseMemoDemo = () => {
  const [n, setN] = useState(10);

  const result = useMemo(() => fibonacci(n), [n]);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        useMemo
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Caches the result of an expensive calculation and only recomputes it when its dependencies change.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography gutterBottom>Fibonacci of {n}:</Typography>
      <Slider
        value={n}
        onChange={(_, val) => setN(val as number)}
        min={1}
        max={35}
        step={1}
        valueLabelDisplay="auto"
        sx={{ maxWidth: 320 }}
      />
      <Typography variant="h4" sx={{ mt: 1 }}>
        = {result}
      </Typography>
    </Box>
  );
};

export default UseMemoDemo;
