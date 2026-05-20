"use client";
import { useState } from 'react';
import { DragDropProvider } from '@dnd-kit/react';

import Droppable from '../DragandDrop/Droppable';
import Draggable from '../DragandDrop/Draggable';

function UsingDragAndDrop() {
  const targets = ['A', 'B', 'C'];
  const [target, setTarget] = useState<string | undefined>();
  const draggable = (
    <Draggable id="draggable">Drag me</Draggable>
  );

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return;

        setTarget(event.operation.target?.id as string | undefined);
      }}
    >
      {!target ? draggable : null}

      {targets.map((id) => (
        <Droppable key={id} id={id}>
          {target === id ? draggable : `Droppable ${id}`}
        </Droppable>
      ))}
    </DragDropProvider>
  );
}

export default UsingDragAndDrop;