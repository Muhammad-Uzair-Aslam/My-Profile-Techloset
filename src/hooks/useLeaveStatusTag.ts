import { AttendanceStatusTagProps,UseAttendanceStatusTagReturn } from "../types/types";
  export const useLeaveStatusTag = ({
    date,
    isCurrentMonth = true,
  }: AttendanceStatusTagProps): UseAttendanceStatusTagReturn => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const normalizedDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    const isToday = normalizedDate.getTime() === today.getTime();
    const isSunday = date.getDay() === 0;
    const isPast = date < today;
    const isFuture = date > today;
  
    let status = '';
    let statusColor = '';
    if (isSunday) {
      status = 'Sunday';
      statusColor = 'bg-gray-500';
    } else if (isPast || isToday) {
      status = 'Present';
      statusColor = 'bg-green-700';
    } else if (isFuture) {
      status = '';
      statusColor = '';
    }
  
    const shouldRender = !!(status && isCurrentMonth);
  
    return {
      status,
      statusColor,
      shouldRender,
    };
  };