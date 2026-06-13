"use client";

import CustomToggleButton from "@/components/CustomToggleButton";
import {Layers as LayersIcon, ViewComfy as ViewComfyIcon} from '@mui/icons-material';
import { useCustomHook } from "@/app/utils/hook";
import { RightComponentToggleOptionsEnum } from "@/app/utils/types";

const RightComponentToggle = () => {
  const { activeRightPanelToggle, setActiveRightPanelToggle } = useCustomHook();

  const toggleData = [
    {
      label: "Map",
      icon: <LayersIcon sx={{ display: "flex" }} />,
      value: RightComponentToggleOptionsEnum.MAP,
    },
    {
      label: "Grid",
      icon: <ViewComfyIcon sx={{ display: "flex" }} />,
      value: RightComponentToggleOptionsEnum.GRID,
    },
  ];

  return (
    <CustomToggleButton
      toggleData={toggleData}
      selectedToggle={activeRightPanelToggle}
      setSelectedToggle={setActiveRightPanelToggle as (value: string | null) => void}
    />
  );
};

export default RightComponentToggle;