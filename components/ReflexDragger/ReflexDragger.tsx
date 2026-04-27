"use client";
import React,{JSX} from "react";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import DragHandleIcon from "@mui/icons-material/DragHandle";

interface ReflexDraggerProps {
  readonly reflexContainerOrientation: "vertical" | "horizontal";
  readonly leftpaneComponent: React.ReactNode;
  readonly rightpaneComponent: React.ReactNode;
  readonly minimumLeftPaneWidth: number;
  readonly minimumRightPaneWidth: number;
  readonly splitterWidth: number;
  readonly initialLeftFlex: number;
  readonly initialRightFlex: number;
}

const ReflexDragger = ({
  reflexContainerOrientation,
  leftpaneComponent,
  rightpaneComponent,
  minimumLeftPaneWidth,
  minimumRightPaneWidth,
  splitterWidth,
  initialLeftFlex,
  initialRightFlex,
}: ReflexDraggerProps): JSX.Element => {
  const handleSplitterMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <ReflexContainer
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      orientation={reflexContainerOrientation}
    >
      <ReflexElement minSize={minimumLeftPaneWidth} flex={initialLeftFlex}>
        {leftpaneComponent}
      </ReflexElement>
      <ReflexSplitter
        style={{
          width: splitterWidth,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "col-resize",
        }}
      >
        <DragHandleIcon
          style={{
            width: splitterWidth + splitterWidth,
            transform: "rotate(90deg)",
          }}
          onMouseDown={handleSplitterMouseDown}
        />
      </ReflexSplitter>
      <ReflexElement minSize={minimumRightPaneWidth} flex={initialRightFlex}>
        {rightpaneComponent}
      </ReflexElement>
    </ReflexContainer>
  );
};

export default ReflexDragger;
