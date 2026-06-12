import { Box } from "@mui/material";
import CustomTabs from "@/components/CustomTabs";
import { useState } from "react";
import { useCustomHook } from "@/app/utils/hook";
import CustomAccordion from "@/components/CustomAccordion";
import { UserByTypeEnum } from "@/app/utils/types";

const ALL_TAB_VALUE = "ALL";

const RightComponent = () => {
  const { usersByTypeData, setActiveUserByTypeTab } = useCustomHook();
  const [value, setValue] = useState<string>(ALL_TAB_VALUE);

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
    setActiveUserByTypeTab(newValue === ALL_TAB_VALUE ? null : (newValue as UserByTypeEnum));
  };

  const userList = (
    <Box sx={{ height: "calc(100vh - 118px)", overflowY: "auto" }}>
      {usersByTypeData.map((item, index) => (
        <CustomAccordion key={index} header={item.name} body={item.role} />
      ))}
    </Box>
  );

  const tabsData = [
    { label: "All", value: ALL_TAB_VALUE, content: userList },
    { label: "Dev Employee", value: UserByTypeEnum.DEV_EMPLOYEE, content: userList },
    { label: "Product Team", value: UserByTypeEnum.PRODUCT_TEAM_EMPLOYEE, content: userList },
    { label: "Top Management", value: UserByTypeEnum.TOP_MANAGEMENT, content: userList },
  ];

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <CustomTabs tabsData={tabsData} value={value} setValue={handleTabChange} />
    </Box>
  );
};

export default RightComponent;
