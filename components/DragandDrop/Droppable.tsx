"use client";
import { useDroppable } from '@dnd-kit/react';
import { ReactNode } from 'react';

interface DroppableProps {
  id: string;
  children?: ReactNode;
}

function Droppable({ id, children }: DroppableProps) {
  const { ref, isDropTarget } = useDroppable({ id });

  return (
    <div
      ref={ref}
      style={{
        padding: '20px',
        border: `2px dashed ${isDropTarget ? 'green' : 'gray'}`,
        minHeight: '80px',
      }}
    >
      {children}
    </div>
  );
}

export default Droppable;
