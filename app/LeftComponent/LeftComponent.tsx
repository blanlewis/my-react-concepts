import {Box} from "@mui/material";
import CustomTabs from "@/components/CustomTabs";
import { useState } from "react";

const LeftComponent =() => {
    const [value, setValue] = useState("overview");

    const tabsData = [
    { label: "Overview", value: "overview", content: <div>Overview content</div> },
    { label: "Settings", value: "settings", content: <div>Settings content</div> },
    { label: "Activity", value: "activity", content: <div>Activity content</div> },
    ];
    return (
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", border:"1px solid pink", width:"100%", height:"100%"}}>
            <CustomTabs tabsData={tabsData} value={value} setValue={setValue} />
        </Box>
    )
}

export default LeftComponent;