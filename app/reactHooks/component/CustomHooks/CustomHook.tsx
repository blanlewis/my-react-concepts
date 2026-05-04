"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(
    typeof window !== "undefined" ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const stored = localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const set = (next: T) => {
    setValue(next);
    localStorage.setItem(key, JSON.stringify(next));
  };

  return [value, set] as const;
}

const CustomHookDemo = () => {
  const isOnline = useOnlineStatus();
  const [name, setName] = useLocalStorage("demo-name", "");

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Custom Hooks
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Custom hooks extract reusable stateful logic into a plain function
        prefixed with "use". They compose built-in hooks and share behaviour
        without sharing UI.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            useOnlineStatus — reacts to browser network events
          </Typography>
          <Chip
            label={isOnline ? "Online" : "Offline"}
            color={isOnline ? "success" : "error"}
          />
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mt: 1 }}
          >
            Toggle network in DevTools → Network → Offline to see it update.
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            useLocalStorage — syncs state with localStorage
          </Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type something…"
              style={{
                padding: "6px 10px",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
            <Button size="small" onClick={() => setName("")}>
              Clear
            </Button>
          </Stack>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mt: 1 }}
          >
            Refresh the page — the value persists in localStorage under
            "demo-name".
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default CustomHookDemo;
