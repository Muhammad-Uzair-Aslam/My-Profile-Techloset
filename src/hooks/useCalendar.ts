import { useState } from 'react';
import { ViewType } from '../types/types';
import { generateCalendarDays, getDaysOfWeek } from '../utils/dateUtils';
import { UseCalendarProps,UseCalendarReturn } from '../types/types';
export const useCalendar = ({
  initialDate = new Date(),
  initialView = 'Month',
}: UseCalendarProps = {}): UseCalendarReturn => {
  const [currentDate, setCurrentDate] = useState<Date>(initialDate);
  const [view, setView] = useState<ViewType>(initialView);

  const weekDays = getDaysOfWeek(currentDate);
  const calendarDays = generateCalendarDays(currentDate);

  const handlePrevPeriod = () => {
    if (view === 'Month') {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
      );
    } else if (view === 'Week') {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() - 7);
      setCurrentDate(newDate);
    } else {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() - 1);
      setCurrentDate(newDate);
    }
  };

  const handleNextPeriod = () => {
    if (view === 'Month') {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
      );
    } else if (view === 'Week') {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() + 7);
      setCurrentDate(newDate);
    } else {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() + 1);
      setCurrentDate(newDate);
    }
  };

  return {
    currentDate,
    view,
    weekDays,
    calendarDays,
    setView,
    handlePrevPeriod,
    handleNextPeriod,
  };
};