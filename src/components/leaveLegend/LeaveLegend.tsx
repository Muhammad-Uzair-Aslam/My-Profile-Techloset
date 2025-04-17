import React from "react";
import { attendanceLegendItems } from "../../constant/LeaveLegendItem";

const AttendanceLegend: React.FC = () => {
  return (
    <div className="flex justify-center my-4">
      <div className="flex flex-wrap justify-center items-center gap-2">
        {attendanceLegendItems.map((item) => (
          <div key={item.label} className="flex items-center space-x-1">
            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceLegend;
