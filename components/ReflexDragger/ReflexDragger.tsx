"use client";

import React, { JSX } from "react";
import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement,
} from "react-reflex";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { GlobalStyles } from "@mui/material";

interface ReflexDraggerProps {
  readonly reflexContainerOrientation: "vertical" | "horizontal";
  readonly leftpaneComponent: React.ReactNode;
  readonly rightpaneComponent: React.ReactNode;
  readonly minimumLeftPaneWidth: number;
  readonly minimumRightPaneWidth: number;
  readonly splitterWidth: number;
  readonly initialLeftFlex: number;
  readonly initialRightFlex: number;
  readonly isDraggerIconRequired: boolean;
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
  isDraggerIconRequired,
}: ReflexDraggerProps): JSX.Element => {
  const handleSplitterMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <GlobalStyles
        styles={{
          ".reflex-element.vertical": {
            height: "100%",
          },

          ".custom-reflex-splitter": {
            backgroundColor: "rgb(233, 241, 248)",
          },

          ".custom-reflex-splitter:hover": {
            backgroundColor: "rgb(193, 215, 233) !important",
          },

          ".custom-reflex-splitter:active": {
            backgroundColor: "rgb(193, 215, 233) !important",
          },
        }}
      />

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
        <ReflexElement
          minSize={minimumLeftPaneWidth}
          flex={initialLeftFlex}
        >
          {leftpaneComponent}
        </ReflexElement>

        <ReflexSplitter
          className="custom-reflex-splitter"
          style={{
            width: splitterWidth,
            height: "calc(100vh - 66px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "col-resize",
          }}
        >
          {isDraggerIconRequired && (
            <DragHandleIcon
              style={{
                width: splitterWidth + splitterWidth,
                transform: "rotate(90deg)",
              }}
              onMouseDown={handleSplitterMouseDown}
            />
          )}
        </ReflexSplitter>

        <ReflexElement
          minSize={minimumRightPaneWidth}
          flex={initialRightFlex}
        >
          {rightpaneComponent}
        </ReflexElement>
      </ReflexContainer>
    </>
  );
};

export default ReflexDragger;