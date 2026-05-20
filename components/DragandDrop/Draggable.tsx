"use client";
import { ReactNode } from 'react';
import { useDraggable } from '@dnd-kit/react';

interface DraggableProps {
  id: string;
  children?: ReactNode;
}

function Draggable({ id, children }: DraggableProps) {
  const { ref } = useDraggable({ id });

  return (
    <div
      ref={ref}
      style={{
        padding: '14px 18px',
        background: '#2563eb',
        color: '#fff',
        borderRadius: '10px',
        cursor: 'grab',
        boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
        fontWeight: 600,
        fontSize: '14px',
        userSelect: 'none',
      }}
    >
      {children}
    </div>
  );
}

export default Draggable;