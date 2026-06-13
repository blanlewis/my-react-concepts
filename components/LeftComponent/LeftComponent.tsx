import { Box } from "@mui/material";
import CustomTabs from "@/components/CustomTabs";
import { useState } from "react";
import { useCustomHook } from "@/app/utils/hook";
import CustomAccordion from "@/components/CustomAccordion";

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
        <Box sx={{ height: "calc(100% - 50px)", maxHeight: "calc(100% - 50px)", overflowY: "auto" }}>
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
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", position: "relative",overflow:"hidden" }}>
      <CustomTabs tabsData={tabsData} value={value} setValue={setValue} />
    </Box>
  );
};

export default LeftComponent;