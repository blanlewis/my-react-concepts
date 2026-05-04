"use client";
import { useState, useCallback, memo, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const Child = memo(({ onClick }: { onClick: () => void }) => {
  const renders = useRef(0);
  renders.current += 1;

  return (
    <Box
      sx={{
        p: 2,
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: 1,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Child re-renders: <strong>{renders.current}</strong>
      </Typography>
      <Button size="small" variant="outlined" sx={{ mt: 1 }} onClick={onClick}>
        Increment parent count
      </Button>
    </Box>
  );
});
Child.displayName = "Child";

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        useCallback
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Returns a memoized function reference so child components wrapped in React.memo skip unnecessary re-renders when the parent updates.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={2}>
        <Typography>Parent count: {count}</Typography>
        <TextField
          size="small"
          label="Type here to re-render parent"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ maxWidth: 280 }}
        />
        <Typography variant="caption" color="text.secondary">
          Typing updates parent but Child stays stable — its render count only
          rises when you click the button inside it.
        </Typography>
        <Child onClick={handleIncrement} />
      </Stack>
    </Box>
  );
};

export default UseCallbackDemo;
