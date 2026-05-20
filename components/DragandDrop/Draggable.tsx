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
    <button ref={ref}>
      {children}
    </button>
  );
}

export default Draggable;