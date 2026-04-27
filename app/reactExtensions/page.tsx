"use client";
import { useState } from "react";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import ReflexDragger from "@/components/ReflexDragger";
import UsingDragAndDrop from "@/components/UsingDragAndDrop";

enum Section {
  ReflexSplitter = "ReflexSplitter",
  DragAndDrop = "DragAndDrop",
}

const ReactExtensions = () => {
  const [active, setActive] = useState<Section | null>(null);

  const handleClick = (section: Section) => {
    setActive((prev) => (prev === section ? null : section));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        React Extensions Page
      </Typography>

      <List disablePadding>
        {Object.values(Section).map((section, index) => (
          <ListItem key={section} disablePadding sx={{ mb: 1 }}>
            <Button
              variant={active === section ? "contained" : "outlined"}
              onClick={() => handleClick(section)}
            >
              {index + 1}. {section}
            </Button>
          </ListItem>
        ))}
      </List>

      {active === Section.ReflexSplitter && (
        <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ReflexDragger
            reflexContainerOrientation="vertical"
            leftpaneComponent={<Box sx={{ width: "100%", height: "100%", border: "1px solid black", display: "flex", alignItems: "center", justifyContent: "center" }}>Left Pane Content</Box>}
            rightpaneComponent={<Box sx={{ width: "100%", height: "100%", border: "1px solid blue", display: "flex", alignItems: "center", justifyContent: "center" }}>Right Pane Content</Box>}
            minimumLeftPaneWidth={500}
            minimumRightPaneWidth={500}
            splitterWidth={10}
            initialLeftFlex={0.5}
            initialRightFlex={0.5}
          />
        </Box>
      )}

      {active === Section.DragAndDrop && (
        <Box sx={{ mt: 3 }}>
          <UsingDragAndDrop />
        </Box>
      )}
    </Box>
  );
};
export default ReactExtensions;
