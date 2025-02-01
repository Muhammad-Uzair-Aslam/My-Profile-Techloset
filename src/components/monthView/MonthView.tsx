import React from 'react';
import { MonthViewProps } from '../../types/types';
import { useMonthView } from '../../hooks/useMonthView';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const MonthView: React.FC<MonthViewProps> = ({ calendarDays }) => {
  const { today, requiredRows } = useMonthView({ calendarDays });

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {days.map((day) => (
            <th
              key={day}
              className="border border-gray-300 text-center font-normal text-gray-600"
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array(requiredRows)
          .fill(null)
          .map((_, weekIndex) => (
            <tr key={weekIndex}>
              {Array(7)
                .fill(null)
                .map((_, dayIndex) => {
                  const dayObj = calendarDays[weekIndex * 7 + dayIndex];
                  const isToday = dayObj.date.getTime() === today.getTime();
                  return (
                    <td
                      key={dayIndex}
                      className={`border border-gray-300 p-2 h-24 text-center align-top ${
                        dayObj.currentMonth
                          ? 'text-gray-500'
                          : 'text-gray-400 bg-gray-100'
                      }`}
                    >
                      <div
                        className={`text-left ${
                          isToday ? 'text-gray-900' : ''
                        }`}
                      >
                        {dayObj.day < 10 ? `0${dayObj.day}` : dayObj.day}
                      </div>
                    </td>
                  );
                })}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default MonthView;