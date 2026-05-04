"use client";
import { useId } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const LabeledInput = ({ label }: { label: string }) => {
  const id = useId();
  return (
    <Box>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
        <Typography
          variant="body2"
          component="label"
          htmlFor={id}
          sx={{ fontWeight: 500 }}
        >
          {label}
        </Typography>
        <Chip label={`id="${id}"`} size="small" variant="outlined" />
      </Stack>
      <input
        id={id}
        type="text"
        placeholder={`Enter ${label.toLowerCase()}`}
        style={{
          padding: "6px 10px",
          borderRadius: 4,
          border: "1px solid #ccc",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
    </Box>
  );
};

const UseIdDemo = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        useId
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Generates a stable, unique ID that's consistent between server and
        client renders — ideal for linking labels to inputs via htmlFor/id.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Each instance gets its own unique ID automatically — no manual id
        management needed.
      </Typography>
      <Stack spacing={2}>
        <LabeledInput label="First Name" />
        <LabeledInput label="Last Name" />
        <LabeledInput label="Email" />
      </Stack>
    </Box>
  );
};

export default UseIdDemo;
