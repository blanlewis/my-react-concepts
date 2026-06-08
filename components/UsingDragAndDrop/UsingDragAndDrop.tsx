"use client";
import { ComponentType, ReactNode, useState } from 'react';
import { DragDropProvider } from '@dnd-kit/react';
import { Box } from '@mui/material';

import Droppable from '../DragandDrop/Droppable';
import Draggable from '../DragandDrop/Draggable';

interface UsingDragAndDropProps {
  draggableComponent: ComponentType<{ label: string }>;
  tripsCard: ComponentType<{ label: string; children?: ReactNode }>;
  trips: string[];
  getLabel: (trip: string | undefined) => string;
}

function UsingDragAndDrop({
  draggableComponent: DraggableComponent,
  tripsCard: TripsCard,
  trips,
  getLabel,
}: Readonly<UsingDragAndDropProps>) {
  const [target, setTarget] = useState<string | undefined>();

  const bookingLabel = getLabel(target);
  const draggable = (
    <Draggable id="draggable">
      <DraggableComponent label={bookingLabel} />
    </Draggable>
  );

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return;
        setTarget((event.operation.target?.id as string) || undefined);
      }}
    >
      <Box sx={{ padding: '32px', fontFamily: 'sans-serif' }}>
        <Box component="h3" sx={{ marginBottom: '24px', color: '#111827' }}>Trip Planner</Box>

        <Box sx={{
          marginBottom: '32px',
          padding: '16px 20px',
          background: '#f3f4f6',
          borderRadius: '12px',
          minHeight: '72px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <Box component="span" sx={{ color: '#6b7280', fontSize: '13px', flexShrink: 0 }}>Available</Box>
          {!target && draggable}
        </Box>

        <Box sx={{ display: 'flex', gap: '20px' }}>
          {trips.map((trip) => (
            <TripsCard key={trip} label={trip}>
              <Droppable id={trip}>
                {target === trip ? draggable : null}
              </Droppable>
            </TripsCard>
          ))}
        </Box>
      </Box>
    </DragDropProvider>
  );
}

export default UsingDragAndDrop;
