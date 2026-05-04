"use client";
import { createContext, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
});

const ThemedCard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: theme === "dark" ? "grey.900" : "grey.100",
        color: theme === "dark" ? "grey.100" : "grey.900",
        transition: "all 0.2s",
      }}
    >
      <Typography variant="body2">
        I am a deeply nested child. I read theme ={" "}
        <strong>"{theme}"</strong> directly from context — no props passed down.
      </Typography>
    </Paper>
  );
};

const UseContextDemo = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <Box>
        <Typography variant="h5" gutterBottom>
          useContext
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Reads a value from a React context — any component inside the Provider
          can consume it without prop drilling.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Button variant="outlined" onClick={toggle} sx={{ mb: 2 }}>
          Toggle theme (currently: {theme})
        </Button>
        <ThemedCard />
      </Box>
    </ThemeContext.Provider>
  );
};

export default UseContextDemo;
