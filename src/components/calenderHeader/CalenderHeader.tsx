import React from "react";
import ViewToggle from "../calenderViewSwitcher/CalenderViewSwitcher";
import NavigationControls from "../navigationControl/NavigationControl";
import EventLegend from "../eventLegend/EventLegend";
import { CalendarHeaderProps } from "../../types/types";
const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  view,
  weekDays,
  onPrevPeriod,
  onNextPeriod,
  onViewChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4 ">
      <ViewToggle currentView={view} onViewChange={onViewChange} />
      <div className="flex flex-col gap-3 p-5 md:py-0">
        <div className="self-end">
          <NavigationControls
            currentDate={currentDate}
            view={view}
            weekDays={weekDays}
            onPrevPeriod={onPrevPeriod}
            onNextPeriod={onNextPeriod}
          />
        </div>
        <div className="hidden md:block">
          <EventLegend />
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
