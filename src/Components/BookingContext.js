// BookingContext.js
import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState({
    checkInDate: null,
    checkOutDate: null,
  });

  const setBooking = (newBookingDetails) => {
    setBookingDetails(newBookingDetails);
  };

  return (
    <BookingContext.Provider value={{ bookingDetails, setBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
