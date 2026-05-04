"use client";
import { useState, useLayoutEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const UseLayoutEffectDemo = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 0, height: 0 });
  const [wide, setWide] = useState(false);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect();
      setDims({ width: Math.round(width), height: Math.round(height) });
    }
  }, [wide]); // re-measure when the width toggles, before paint

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        useLayoutEffect
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Like useEffect but fires synchronously after DOM mutations and before
        the browser paints — use it to read or adjust layout without a visible
        flicker.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Button
        variant="outlined"
        onClick={() => setWide((w) => !w)}
        sx={{ mb: 2 }}
      >
        Toggle width
      </Button>
      <Paper
        ref={boxRef}
        sx={{
          p: 2,
          width: wide ? "100%" : "50%",
          transition: "width 0.3s",
          bgcolor: "primary.light",
          color: "primary.contrastText",
        }}
      >
        <Typography variant="body2">Resize me</Typography>
      </Paper>
      <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
        <Typography variant="body2">
          Width: <strong>{dims.width}px</strong>
        </Typography>
        <Typography variant="body2">
          Height: <strong>{dims.height}px</strong>
        </Typography>
      </Stack>
      <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
        Dimensions are measured synchronously after the DOM update — before the
        new paint is visible. Try useEffect instead and notice the flicker.
      </Typography>
    </Box>
  );
};

export default UseLayoutEffectDemo;
