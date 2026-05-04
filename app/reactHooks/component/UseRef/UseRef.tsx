"use client";
import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const UseRefDemo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const renderCountRef = useRef(0);
  const [focused, setFocused] = useState(false);

  renderCountRef.current += 1;

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        useRef
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Holds a mutable value or DOM node that persists across renders without triggering a re-render.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            DOM ref — focus the input programmatically
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <TextField
              inputRef={inputRef}
              size="small"
              placeholder='Click "Focus me"'
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            <Button variant="outlined" onClick={() => inputRef.current?.focus()}>
              Focus me
            </Button>
            <Chip
              label={focused ? "Focused" : "Blurred"}
              color={focused ? "success" : "default"}
              size="small"
            />
          </Stack>
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Mutable ref — render count (stored without triggering re-render)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This component has rendered <strong>{renderCountRef.current}</strong> time(s).
            Stored in a ref, so writing to it never schedules a re-render.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default UseRefDemo;
