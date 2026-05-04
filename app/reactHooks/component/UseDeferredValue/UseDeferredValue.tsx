"use client";
import { useState, useDeferredValue, memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const FRUITS = [
  "apple", "apricot", "banana", "blueberry", "cherry", "cranberry",
  "date", "dragonfruit", "elderberry", "fig", "grape", "guava",
  "honeydew", "kiwi", "lemon", "lime", "lychee", "mango", "melon",
  "nectarine", "orange", "papaya", "peach", "pear", "pineapple",
  "plum", "pomegranate", "raspberry", "strawberry", "watermelon",
];

const SlowResultList = memo(({ query }: { query: string }) => {
  // Simulate a slow component
  const start = performance.now();
  while (performance.now() - start < 60) {} // artificial 60ms delay

  const results = FRUITS.filter((w) => w.includes(query.toLowerCase()));
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
      {results.length ? (
        results.map((w) => <Chip key={w} label={w} size="small" />)
      ) : (
        <Typography variant="body2" color="text.secondary">
          No matches
        </Typography>
      )}
    </Box>
  );
});
SlowResultList.displayName = "SlowResultList";

const UseDeferredValueDemo = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale = deferredQuery !== query;

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        useDeferredValue
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Lets you defer re-rendering a slow part of the UI. The input stays
        crisp while the deferred value "catches up" in the background.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={1}>
        <TextField
          size="small"
          label="Search fruits"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="caption" color="text.secondary">
            input: "{query}"
          </Typography>
          <Typography variant="caption" color="text.secondary">
            deferred: "{deferredQuery}"
          </Typography>
          {isStale && <Chip label="stale" size="small" color="warning" />}
        </Stack>
        <Box sx={{ opacity: isStale ? 0.4 : 1, transition: "opacity 0.2s" }}>
          <SlowResultList query={deferredQuery} />
        </Box>
      </Stack>
    </Box>
  );
};

export default UseDeferredValueDemo;
