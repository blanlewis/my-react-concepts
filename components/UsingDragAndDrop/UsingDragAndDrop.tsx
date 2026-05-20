"use client";
import { useState } from 'react';
import { DragDropProvider } from '@dnd-kit/react';
import { Box } from '@mui/material';

import Droppable from '../DragandDrop/Droppable';
import Draggable from '../DragandDrop/Draggable';

const trips = ['Trip 1', 'Trip 2', 'Trip 3'];

function UsingDragAndDrop() {
  const [target, setTarget] = useState<string | undefined>();

  const bookingLabel = target ? `${target} Booking Card` : 'Booking Card';
  const draggable = <Draggable id="draggable">{bookingLabel}</Draggable>;

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
          {!target && draggable}
        </Box>

        <Box sx={{ display: 'flex', gap: '20px' }}>
          {trips.map((trip) => (
            <Box key={trip} sx={{ flex: 1 }}>
              <Box component="p" sx={{ margin: '0 0 8px', fontWeight: 600, color: '#374151', fontSize: '14px' }}>
                {trip}
              </Box>
              <Droppable id={trip}>
                {target === trip
                  ? draggable
                  : null
                }
              </Droppable>
            </Box>
          ))}
        </Box>
      </Box>
    </DragDropProvider>
  );
}

export default UsingDragAndDrop;