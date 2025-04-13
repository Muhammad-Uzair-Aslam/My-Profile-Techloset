import React from "react";
import { MONTHS, HOURS } from "../../utils/dateUtils";
import { DayViewProps } from "../../types/types";

const DayView: React.FC<DayViewProps> = ({ currentDate }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const normalizedCurrentDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const isToday = normalizedCurrentDate.getTime() === today.getTime();

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border border-gray-300 w-24"></th>
          <th
            className={`border border-gray-300 p-2 text-center font-normal ${
              isToday ? "bg-indigo-50 text-gray-500" : " text-gray-500"
            }`}
          >
            {`${MONTHS[currentDate.getMonth()]} ${currentDate.getDate()}`}
          </th>
        </tr>
      </thead>
      <tbody>
        {HOURS.map((hour, index) => (
          <tr key={index}>
            <td className="border border-gray-300 p-2 text-left text-gray-500">
              {hour}
            </td>
            <td
              className={`border border-gray-300 p-2 ${
                isToday ? "bg-indigo-50" : "bg-white"
              }`}
            ></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DayView;
