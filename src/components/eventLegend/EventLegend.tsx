import React from "react";
import { legendItems } from "../../constant/LegendItem";
const EventLegend: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      {legendItems.map((item) => (
        <div key={item.label} className="flex items-center space-x-1">
          <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default EventLegend;
