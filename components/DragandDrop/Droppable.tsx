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
        border: `2px dashed ${isDropTarget ? '#2563eb' : '#d1d5db'}`,
        borderRadius: '12px',
        minHeight: '120px',
        background: isDropTarget ? '#eff6ff' : '#f9fafb',
        transition: 'border-color 0.15s, background 0.15s, z-index 0s',
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative',
        zIndex: isDropTarget ? 10 : 1,
      }}
    >
      {children}
    </div>
  );
}

export default Droppable;
