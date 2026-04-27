"use client";
import CommonMiniDrawerLayout from "@/components/CommonMiniDrawerLayout";
import ReflexDragger from "@/components/ReflexDragger";
import { Box } from "@mui/material";

export default function Home() {
  return (
      <CommonMiniDrawerLayout
        appHeaderTitle="Learning Next JS"
        firstListItems={[
          { label: 'Next JS Basics', route: '/nextJsBasics' },
          { label: 'React Hooks', route: '/reactHooks' },
          { label: 'Context', route: '/context' },
          { label: 'MUI Components', route: '/muiComponents' },
        ]}
        secondaryListItems={[
          { label: 'Browser dev tools', route: '/browserDevTools' },
          { label: 'React extensions', route: '/reactExtensions' },
          { label: 'Hacks', route: '/hacks' },
        ]}
        appBody={
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <ReflexDragger
            reflexContainerOrientation="vertical"
            leftpaneComponent={<Box>Left Pane Content</Box>}
            rightpaneComponent={<Box>Right Pane Content</Box>}
            minimumLeftPaneWidth={500}
            minimumRightPaneWidth={500}
            splitterWidth={10}
            initialLeftFlex={0.5}
            initialRightFlex={0.5}
          />
        </Box>}  
      />
  );
}
