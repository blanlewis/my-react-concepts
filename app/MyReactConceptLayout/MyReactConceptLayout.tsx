import { Box } from "@mui/material";
import ReflexDragger from "@/components/ReflexDragger";
import LeftComponent from "@/components/LeftComponent";
import RightComponent from "@/components/RightComponent";

const MyReactConceptLayout = () => {
  return (
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
        leftpaneComponent={
          <Box sx={{ width: "100%", height: "100%" }}>
            <LeftComponent />
          </Box>
        }
        rightpaneComponent={
          <Box sx={{ width: "100%", height: "100%" }}>
            <RightComponent />
          </Box>
        }
        minimumLeftPaneWidth={500}
        minimumRightPaneWidth={500}
        splitterWidth={10}
        initialLeftFlex={0.5}
        initialRightFlex={0.5}
        isDraggerIconRequired={false}
      />
    </Box>
  );
};

export default MyReactConceptLayout;