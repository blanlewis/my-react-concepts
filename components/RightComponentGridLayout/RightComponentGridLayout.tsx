"use client";

import { Box } from "@mui/material";
import ReflexDragger from "@/components/ReflexDragger";

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
            Bottom Pane
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
                minimumLeftPaneWidth={500}
                minimumRightPaneWidth={500}
                splitterWidth={8}
                initialLeftFlex={0.5}
                initialRightFlex={0.5}
                isDraggerIconRequired={true}
            />
        </Box>
    );
};

export default RightComponentGridLayout;