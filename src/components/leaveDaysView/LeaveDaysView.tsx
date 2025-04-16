import React from 'react';
import { HOURS } from '../../utils/dateUtils';
import { DayViewProps } from '../../types/types';
import AttendanceStatusTag from '../leaveStatusTag/LeaveStatusTag';

const AttendanceDayView: React.FC<DayViewProps> = ({
  currentDate,
  onDateClick,
}) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const normalizedCurrentDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const isToday = normalizedCurrentDate.getTime() === today.getTime();

  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 w-24"></th>
            <th
              onClick={() => onDateClick?.(currentDate)}
              className={`border border-gray-300 p-2 text-center font-normal cursor-pointer ${
                isToday ? 'bg-indigo-100 text-gray-500' : 'text-gray-500'
              }`}
            >
              <AttendanceStatusTag date={currentDate} className="text-left" />
            </th>
          </tr>
        </thead>
        <tbody>
          {HOURS.map((hour) => (
            <tr key={hour}>
              <td className="border border-gray-300 p-2 text-left text-gray-500">
                {hour}
              </td>
              <td
                className={`border border-gray-300 p-2 ${
                  isToday ? 'bg-indigo-100' : 'bg-white'
                }`}
              ></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceDayView;