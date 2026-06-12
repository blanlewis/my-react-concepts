import { useEffect } from "react";
import CommonMiniDrawerLayout from "@/components/CommonMiniDrawerLayout";
import { Box } from "@mui/material";
import ReflexDragger from "@/components/ReflexDragger";
import { useCustomHook } from "@/app/utils/hook";
import LeftComponent from "@/components/LeftComponent";
import RightComponent from "@/components/RightComponent";

const MyReactConceptLayout = () => {
  const { fetchCustomHookData } = useCustomHook();

  // This was basic learning.
  // const { loadCustomHookData } = useCustomHook();
  // useEffect(() => {
  //     loadCustomHookData();
  // }, []);

  useEffect(() => {
    fetchCustomHookData();
  }, []);

  return (
    <CommonMiniDrawerLayout
      appHeaderTitle="Learning Next JS"
      firstListItems={[
        { label: "Next JS Basics", route: "/nextJsBasics" },
      ]}
      secondaryListItems={[]}
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
            leftpaneComponent={
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LeftComponent />
              </Box>
            }
            rightpaneComponent={
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
      }
    />
  );
};

export default MyReactConceptLayout;