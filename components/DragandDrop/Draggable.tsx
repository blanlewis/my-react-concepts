"use client";
import { ReactNode } from 'react';
import { useDraggable } from '@dnd-kit/react';

interface DraggableProps {
  id: string;
  children?: ReactNode;
}

function Draggable({ id, children }: Readonly<DraggableProps>) {
  const { ref, isDragging } = useDraggable({ id });

  return (
    <div
      ref={ref}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        display: 'inline-block',
        position: 'relative',
        zIndex: isDragging ? 1000 : 1,
      }}
    >
      {children}
    </div>
  );
}

export default Draggable;