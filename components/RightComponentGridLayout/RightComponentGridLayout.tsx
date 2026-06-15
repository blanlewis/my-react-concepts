"use client";

import { Box } from "@mui/material";
import ReflexDragger from "@/components/ReflexDragger";

const RightComponentGridLayoutBottomVerticalReflexDraggerPane = () => {
    return (
        <Box sx={{ width: "100%", height: "100%",border:"1px solid green" }}>
            <ReflexDragger
            reflexContainerOrientation="vertical"
            leftpaneComponent={
            <Box sx={{ border:"1px solid red",width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Bottom Left Pane
            </Box>
            }
            rightpaneComponent={
            <Box sx={{ border:"1px solid red",width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Bottom Right Pane
            </Box>
            }
            minimumLeftPaneWidth={80}
            minimumRightPaneWidth={80}
            splitterWidth={8}
            initialLeftFlex={0.5}
            initialRightFlex={0.5}
            isDraggerIconRequired={true}
            />
        </Box>
    );
}


const RightComponentGridLayoutTopPane = () => {
    return (
        <Box sx={{ width: "100%", height: "100%", backgroundColor: "lightblue", display: "flex", alignItems: "center", justifyContent: "center" }}>
            Top Pane
        </Box>
    );
}

const RightComponentGridLayoutBottomPane = () => {
    return (
        <Box sx={{ width: "100%", height: "100%", backgroundColor: "lightcoral", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <RightComponentGridLayoutBottomVerticalReflexDraggerPane />
        </Box>
    );
}

const RightComponentGridLayout = () => {
    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            <ReflexDragger
                reflexContainerOrientation="horizontal"
                leftpaneComponent={<RightComponentGridLayoutTopPane/>}
                rightpaneComponent={<RightComponentGridLayoutBottomPane/>}
                minimumLeftPaneWidth={80}
                minimumRightPaneWidth={80}
                splitterWidth={8}
                initialLeftFlex={0.5}
                initialRightFlex={0.5}
                isDraggerIconRequired={true}
            />
        </Box>
    );
};

export default RightComponentGridLayout;