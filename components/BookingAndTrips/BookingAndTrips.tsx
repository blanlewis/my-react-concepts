"use client";
import { ReactNode } from 'react';
import { Box } from '@mui/material';
import UsingDragAndDrop from '../UsingDragAndDrop';

function BookingsCard({ label }: Readonly<{ label: string }>) {
  return (
    <Box sx={{
      padding: '12px 16px',
      background: '#1d4ed8',
      color: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(29,78,216,0.25)',
      fontWeight: 600,
      fontSize: '14px',
    }}>
      {label}
    </Box>
  );
}

function TripCard({ label, children }: Readonly<{ label: string; children?: ReactNode }>) {
  return (
    <Box sx={{
      flex: 1,
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      background: '#fff',
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    }}>
      <Box sx={{
        padding: '12px 16px',
        background: '#f8fafc',
        borderBottom: '1px solid #e5e7eb',
        fontWeight: 600,
        fontSize: '14px',
        color: '#374151',
      }}>
        {label}
      </Box>
      <Box sx={{ padding: '16px' }}>
        {children}
      </Box>
    </Box>
  );
}

const trips = ['Trip 1', 'Trip 2', 'Trip 3'];
const getLabel = (trip: string | undefined) => trip ? `${trip} Booking Card` : 'Booking Card';

function BookingAndTrips() {
  return (
    <UsingDragAndDrop
      draggableComponent={BookingsCard}
      tripsCard={TripCard}
      trips={trips}
      getLabel={getLabel}
    />
  );
}

export default BookingAndTrips;
