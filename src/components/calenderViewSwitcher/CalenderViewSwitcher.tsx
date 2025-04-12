import React from "react";
import { ViewType, ViewToggleProps } from "../../types/types";
const ViewToggle: React.FC<ViewToggleProps> = ({
  currentView,
  onViewChange,
}) => {
  const views: ViewType[] = ["Month", "Week", "Day"];
  return (
    <div className="flex rounded-lg border border-indigo-500">
      {views.map((view, index) => (
        <button
          key={view}
          onClick={() => onViewChange(view)}
          className={`
            px-6 py-2 
            ${
              currentView === view
                ? "bg-indigo-500 text-white"
                : "bg-white text-gray-700"
            }
            ${index === 0 ? "rounded-l-lg" : ""} 
            ${index === views.length - 1 ? "rounded-r-lg" : ""} 
            ${index < views.length - 1 ? "border-r border-indigo-500" : ""} 
            transition-colors duration-200
          `}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default ViewToggle;
