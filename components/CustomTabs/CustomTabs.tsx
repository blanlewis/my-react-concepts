"use client";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

interface TabDataProps {
  readonly label: string;
  readonly content?: React.ReactNode;
}

interface CustomTabsProps {
  readonly tabsData: TabDataProps[];
  readonly value: string;
  readonly setValue: (value: string) => void;
}

const CustomTabs = ({ tabsData, value, setValue }: CustomTabsProps) => {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            {tabsData.map(({ label }, index) => (
              <Tab key={label} value={String(index)} label={label} />
            ))}
          </TabList>
        </Box>

        {tabsData.map(({ label, content }, index) => (
          <TabPanel key={label} value={String(index)} sx={{ padding: 0 }}>
            {content}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default CustomTabs;