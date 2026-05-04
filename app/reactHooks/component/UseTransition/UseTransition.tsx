"use client";
import { useState, useTransition } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ALL_ITEMS = Array.from({ length: 10_000 }, (_, i) => `Item ${i + 1}`);

const UseTransitionDemo = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value); // urgent — keeps the input responsive
    startTransition(() => {
      // non-urgent — heavy work runs without blocking the input
      setFiltered(
        ALL_ITEMS.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        )
      );
    });
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        useTransition
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Marks a state update as non-urgent so React keeps the UI responsive
        while the heavy work runs in the background.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <TextField
        fullWidth
        size="small"
        label="Filter 10,000 items"
        value={query}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      {isPending ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CircularProgress size={16} />
          <Typography variant="body2" color="text.secondary">
            Filtering…
          </Typography>
        </Box>
      ) : (
        <Typography variant="body2" color="text.secondary">
          {query ? `${filtered.length} results` : "Type to filter"}
        </Typography>
      )}
      <List dense sx={{ maxHeight: 200, overflow: "auto", mt: 1 }}>
        {filtered.slice(0, 50).map((item) => (
          <ListItem key={item} disableGutters>
            <ListItemText primary={item} />
          </ListItem>
        ))}
        {filtered.length > 50 && (
          <ListItem disableGutters>
            <ListItemText secondary={`…and ${filtered.length - 50} more`} />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default UseTransitionDemo;
