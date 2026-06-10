import { useEffect } from "react";
import CommonMiniDrawerLayout from "@/components/CommonMiniDrawerLayout";
import { Box } from "@mui/material";
import ReflexDragger from "@/components/ReflexDragger";
import { useCustomHook } from "@/app/utils/hook";

const MyReactConceptLayout =()=>{
    // This was basic learning.
    // const { loadCustomHookData } = useCustomHook();
    // useEffect(() => {
    //     loadCustomHookData();
    // }, []);

    const { fetchCustomHookData,nameAndRole } = useCustomHook();
    console.log("nameAndRole in MyReactConceptLayout:", nameAndRole);
    useEffect(() => {
        fetchCustomHookData();
    }, []);

    return(
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
                leftpaneComponent={
                <Box
                    sx={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    }}
                >
                    Left Pane Content
                </Box>
                }
                rightpaneComponent={
                <Box
                    sx={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid blue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    }}
                >
                    Right Pane Content
                </Box>
                }
                minimumLeftPaneWidth={500}
                minimumRightPaneWidth={500}
                splitterWidth={10}
                initialLeftFlex={0.5}
                initialRightFlex={0.5}
            />
            </Box>}  
        />
    )
}

export default MyReactConceptLayout;