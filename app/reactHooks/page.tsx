"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import UseStateDemo from "./component/UseState/UseState";
import UseEffectDemo from "./component/UseEffect/UseEffect";
import UseMemoDemo from "./component/UseMemo/UseMemo";
import UseCallbackDemo from "./component/UseCallback/UseCallback";
import UseReducerDemo from "./component/UseReducer/UseReducer";
import UseRefDemo from "./component/UseRef/UseRef";
import UseContextDemo from "./component/UseContext/UseContext";
import UseTransitionDemo from "./component/UseTransition/UseTransition";
import UseDeferredValueDemo from "./component/UseDeferredValue/UseDeferredValue";
import UseIdDemo from "./component/UseId/UseId";
import UseLayoutEffectDemo from "./component/UseLayoutEffect/UseLayoutEffect";
import CustomHookDemo from "./component/CustomHooks/CustomHook";

type HookId =
  | "useState"
  | "useEffect"
  | "useMemo"
  | "useCallback"
  | "useReducer"
  | "useRef"
  | "useContext"
  | "useTransition"
  | "useDeferredValue"
  | "useId"
  | "useLayoutEffect"
  | "customHooks";

const hooks: { id: HookId; label: string }[] = [
  { id: "useState", label: "useState" },
  { id: "useEffect", label: "useEffect" },
  { id: "useMemo", label: "useMemo" },
  { id: "useCallback", label: "useCallback" },
  { id: "useReducer", label: "useReducer" },
  { id: "useRef", label: "useRef" },
  { id: "useContext", label: "useContext" },
  { id: "useTransition", label: "useTransition" },
  { id: "useDeferredValue", label: "useDeferredValue" },
  { id: "useId", label: "useId" },
  { id: "useLayoutEffect", label: "useLayoutEffect" },
  { id: "customHooks", label: "Custom Hooks" },
];

const componentMap: Record<HookId, React.ComponentType> = {
  useState: UseStateDemo,
  useEffect: UseEffectDemo,
  useMemo: UseMemoDemo,
  useCallback: UseCallbackDemo,
  useReducer: UseReducerDemo,
  useRef: UseRefDemo,
  useContext: UseContextDemo,
  useTransition: UseTransitionDemo,
  useDeferredValue: UseDeferredValueDemo,
  useId: UseIdDemo,
  useLayoutEffect: UseLayoutEffectDemo,
  customHooks: CustomHookDemo,
};

const ReactHooks = () => {
  const [selected, setSelected] = useState<HookId>("useState");
  const ActiveComponent = componentMap[selected];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: "flex", gap: 1, mb: 4, flexWrap: "wrap" }}>
        {hooks.map(({ id, label }) => (
          <Button
            key={id}
            variant={selected === id ? "contained" : "outlined"}
            onClick={() => setSelected(id)}
          >
            {label}
          </Button>
        ))}
      </Box>
      <ActiveComponent />
    </Box>
  );
};

export default ReactHooks;
