"use client";
import {DragDropProvider} from '@dnd-kit/react';
import Draggable from '../DragandDrop/Draggable';
import Droppable from '../DragandDrop/Droppable';
import { useState } from 'react';

function UsingDragAndDrop() {
  const [isDropped, setIsDropped] = useState(false);

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return;

        const {target} = event.operation;
        setIsDropped(target?.id === 'droppable');
      }}
    >
      {!isDropped && <Draggable />}

      <Droppable id="droppable">
        {isDropped && <Draggable />}
      </Droppable>
    </DragDropProvider>
  );
}

export default UsingDragAndDrop;