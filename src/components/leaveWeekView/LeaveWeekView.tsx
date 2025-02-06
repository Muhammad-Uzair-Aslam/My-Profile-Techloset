import React from 'react';
import { formatDay, formatDayOfWeek, HOURS } from '../../utils/dateUtils';
import { WeekViewProps } from '../../types/types';
import AttendanceStatusTag from '../leaveStatusTag/LeaveStatusTag';

const AttendanceWeekView: React.FC<WeekViewProps> = ({
  weekDays,
  onDateClick,
}) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border border-gray-300 w-24"></th>
          {weekDays.map((day, index) => {
            const normalizedDay = new Date(
              day.getFullYear(),
              day.getMonth(),
              day.getDate()
            );
            const isToday = normalizedDay.getTime() === today.getTime();
            return (
              <th
                key={index}
                onClick={() => onDateClick?.(day)}
                className={`border border-gray-300 px-2 py-1 text-center font-semibold cursor-pointer ${
                  isToday ? 'bg-indigo-100 text-gray-500' : 'text-gray-500'
                }`}
              >
                <div>{`${formatDay(day)} ${formatDayOfWeek(day)}`}</div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          {weekDays.map((day, index) => {
            const normalizedDay = new Date(
              day.getFullYear(),
              day.getMonth(),
              day.getDate()
            );
            const isToday = normalizedDay.getTime() === today.getTime();
            return (
              <td
                key={index}
                className={`border border-gray-300 p-2 ${
                  isToday ? 'bg-indigo-100' : ''
                }`}
              >
                <AttendanceStatusTag date={day} />
              </td>
            );
          })}
        </tr>
        {HOURS.map((hour) => (
          <tr key={hour}>
            <td className="border border-gray-300 p-2 text-left text-gray-500">
              {hour}
            </td>
            {weekDays.map((day, dayIndex) => {
              const normalizedDay = new Date(
                day.getFullYear(),
                day.getMonth(),
                day.getDate()
              );
              const isToday = normalizedDay.getTime() === today.getTime();
              return (
                <td
                  key={`${hour}-${dayIndex}`}
                  className={`border border-gray-300 p-2 ${
                    isToday ? 'bg-indigo-100' : ''
                  }`}
                ></td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceWeekView;