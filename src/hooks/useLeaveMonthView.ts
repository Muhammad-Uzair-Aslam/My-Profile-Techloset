import { MonthViewProps,UseAttendanceMonthViewReturn } from '../types/types';

export const useAttendanceMonthView = ({
  calendarDays,
}: Pick<MonthViewProps, 'calendarDays'>): UseAttendanceMonthViewReturn => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getRequiredRows = () => {
    const lastDay = calendarDays
      .filter((dayObj) => dayObj.currentMonth)
      .reduce((maxDay, dayObj) => Math.max(maxDay, dayObj.day), 0);
    const lastDayIndex = calendarDays.findIndex(
      (dayObj) => dayObj.currentMonth && dayObj.day === lastDay
    );
    const lastRow = Math.floor(lastDayIndex / 7);
    return lastRow + 1;
  };

  const requiredRows = getRequiredRows();

  return {
    today,
    requiredRows,
  };
};