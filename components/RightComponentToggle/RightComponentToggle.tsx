"use client";

import { useState } from "react";
import CustomToggleButton from "@/components/CustomToggleButton";
import {Layers as LayersIcon, ViewComfy as ViewComfyIcon} from '@mui/icons-material';

const RightComponentToggle = () => {
  const [selectedToggle, setSelectedToggle] = useState<string | null>(null);

  enum RightComponentToggleOptionsEnum {
    MAP = "Map",
    GRID = "Grid",
  }

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
      selectedToggle={selectedToggle}
      setSelectedToggle={setSelectedToggle}
    />
  );
};

export default RightComponentToggle;