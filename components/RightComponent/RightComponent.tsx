import { Box } from "@mui/material";
import CustomTabs from "@/components/CustomTabs";
import { useState } from "react";
import { useCustomHook } from "@/app/utils/hook";
import CustomAccordion from "@/components/CustomAccordion";
import { UserByTypeEnum,RightComponentToggleOptionsEnum } from "@/app/utils/types";
import CustomSpinnerLoader from "@/components/CustomSpinnerLoader";
import RightComponentToggle from "@/components/RightComponentToggle";
import dynamic from "next/dynamic";
import RightComponentGridLayout from "@/components/RightComponentGridLayout";

const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false });

const ALL_TAB_VALUE = "ALL";

const RightComponent = () => {
  const { usersByTypeData, isLoading, activeRightPanelToggle, setActiveUserByTypeTab } = useCustomHook();
  const [value, setValue] = useState<string>(ALL_TAB_VALUE);

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
    setActiveUserByTypeTab(newValue === ALL_TAB_VALUE ? null : (newValue as UserByTypeEnum));
  };

  const userList = (
    <Box sx={{ height:"calc(100% - 48px)", maxHeight: "calc(100% - 48px)", overflowY: "auto" }}>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <CustomSpinnerLoader />
        </Box>
      ) : (
        usersByTypeData.map((item, index) => (
          <CustomAccordion key={index} header={item.name} body={item.role} />
        ))
      )}
    </Box>
  );

  const tabsData = [
    { label: "All", value: ALL_TAB_VALUE, content: userList },
    { label: "Dev Employee", value: UserByTypeEnum.DEV_EMPLOYEE, content: userList },
    { label: "Product Team", value: UserByTypeEnum.PRODUCT_TEAM_EMPLOYEE, content: userList },
    { label: "Top Management", value: UserByTypeEnum.TOP_MANAGEMENT, content: userList },
  ];

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", position:"relative",overflow:"hidden" }}>
      <Box sx={{ position: "absolute", top: "3px", right: "3px", zIndex: 401 }}>
        <RightComponentToggle />
      </Box>
      {activeRightPanelToggle === RightComponentToggleOptionsEnum.MAP ? (
        <MapComponent />
      ) : activeRightPanelToggle === RightComponentToggleOptionsEnum.GRID ? (
        <RightComponentGridLayout />
      ) : (
        <CustomTabs tabsData={tabsData} value={value} setValue={handleTabChange} />
      )}
    </Box>
  );
};

export default RightComponent;
