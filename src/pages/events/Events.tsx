import React from 'react';
import CalendarHeader from '../../components/calenderHeader/CalenderHeader';
import MonthView from '../../components/monthView/MonthView';
import WeekView from '../../components/weekView/WeekView';
import DayView from '../../components/daysView/DaysView';
import { CalendarProps } from '../../types/types';
import { useCalendar } from '../../hooks/useCalendar';

const Events: React.FC<CalendarProps> = ({ initialDate = new Date() }) => {
  const {
    currentDate,
    view,
    weekDays,
    calendarDays,
    setView,
    handlePrevPeriod,
    handleNextPeriod,
  } = useCalendar({ initialDate });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <CalendarHeader
        currentDate={currentDate}
        view={view}
        weekDays={weekDays}
        onPrevPeriod={handlePrevPeriod}
        onNextPeriod={handleNextPeriod}
        onViewChange={setView}
      />
      {view === 'Month' && <MonthView calendarDays={calendarDays} />}
      {view === 'Week' && <WeekView weekDays={weekDays} />}
      {view === 'Day' && <DayView currentDate={currentDate} />}
    </div>
  );
};

export default Events;