import { Box } from "@mui/material";
import CustomTabs from "@/components/CustomTabs";
import { useState } from "react";
import { useCustomHook } from "@/app/utils/hook";
import CustomAccordion from "@/components/CustomAccordion";
import RightComponentToggle from "@/components/RightComponentToggle";

enum OverviewTabEnum {
  OVERVIEW = "overview",
  SETTINGS = "settings",
  ACTIVITY = "activity",
}

const LeftComponent = () => {
  const { nameAndRole } = useCustomHook();
  const [value, setValue] = useState<string>(OverviewTabEnum.OVERVIEW);

  const tabsData = [
    {
      label: "Overview",
      value: OverviewTabEnum.OVERVIEW,
      content: (
        <Box sx={{ height: "calc(100vh - 118px)", overflowY: "auto" }}>
          {nameAndRole.map((item, index) => (
            <CustomAccordion key={index} header={item.name} body={item.role} />
          ))}
        </Box>
      ),
    },
    {
      label: "Settings",
      value: OverviewTabEnum.SETTINGS,
      content: <CustomAccordion header="Settings" body="Settings content" />,
    },
    {
      label: "Activity",
      value: OverviewTabEnum.ACTIVITY,
      content: <CustomAccordion header="Activity" body="Activity content" />,
    },
  ];

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "calc(100vh - 66px)", maxHeight: "calc(100vh - 66px)", position: "relative" }}>
      <CustomTabs tabsData={tabsData} value={value} setValue={setValue} />
    </Box>
  );
};

export default LeftComponent;