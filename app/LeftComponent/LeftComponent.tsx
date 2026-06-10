import {Box} from "@mui/material";
import CustomTabs from "@/components/CustomTabs";
import { useState } from "react";
import { useCustomHook } from "@/app/utils/hook";
import CustomAccordion from "@/components/CustomAccordion";

const LeftComponent =() => {
    const { nameAndRole } = useCustomHook();
    const [value, setValue] = useState("overview");

    const tabsData = [
        {
      label: "Overview",
      value: "overview",
      content: (
        <Box sx={{border: "1px solid blue"}}>
          {nameAndRole.map((item, index) => (
            <CustomAccordion
              key={index}
              header={item.name}
              body={item.role}
            />
          ))}
        </Box>
      ),
    },
    { label: "Settings", value: "settings", content: <CustomAccordion header="Settings" body="Settings content" /> },
    { label: "Activity", value: "activity", content: <CustomAccordion header="Activity" body="Activity content" /> },
    ];
    return (
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", border:"1px solid pink", width:"100%", height:"100%"}}>
            <CustomTabs tabsData={tabsData} value={value} setValue={setValue} />
        </Box>
    )
}

export default LeftComponent;