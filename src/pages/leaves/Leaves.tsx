import React from "react";
import AttendanceMonthView from "../../components/leaveMonthView/LeaveMonthView";
import AttendanceWeekView from "../../components/leaveWeekView/LeaveWeekView";
import AttendanceDayView from "../../components/leaveDaysView/LeaveDaysView";
import { AttendanceTrackerProps } from "../../types/types";
import LeaveLegend from "../../components/leaveLegend/LeaveLegend";
import ViewToggle from "../../components/calenderViewSwitcher/CalenderViewSwitcher";
import NavigationControls from "../../components/navigationControl/NavigationControl";
import LeaveForm from "../../components/leaveForm/LeaveForm";
import { useCalendar } from "../../hooks/useCalendar";
import { useLeaveModal } from "../../hooks/useLeaveModal";

const AttendanceTracker: React.FC<AttendanceTrackerProps> = ({
  initialDate = new Date(),
}) => {
  const {
    isModalOpen,
    animateModal,
    selectedDate,
    handleDateClick,
    handleRequestLeave,
    closeModal,
  } = useLeaveModal();
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
    <div className="max-w-6xl mx-auto p-4 relative">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center mb-5">
        <div className="flex justify-between items-center">
          <button
            onClick={handleRequestLeave}
            className="bg-indigo-500 text-white py-2 px-4 rounded-md"
          >
            Request Leave
          </button>
        </div>
        <div>
          <ViewToggle currentView={view} onViewChange={setView} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 p-5 md:py-0">
        <div>
          <NavigationControls
            currentDate={currentDate}
            view={view}
            weekDays={weekDays}
            onPrevPeriod={handlePrevPeriod}
            onNextPeriod={handleNextPeriod}
          />
        </div>
        <div className="mx-auto flex justify-center items-center">
          <LeaveLegend />
        </div>
      </div>
      <div className="overflow-x-auto">
        {view === "Month" && (
          <AttendanceMonthView
            calendarDays={calendarDays}
            onDateClick={handleDateClick}
          />
        )}
        {view === "Week" && (
          <AttendanceWeekView
            weekDays={weekDays}
            onDateClick={handleDateClick}
          />
        )}
        {view === "Day" && (
          <AttendanceDayView
            currentDate={currentDate}
            onDateClick={handleDateClick}
          />
        )}
      </div>

      {isModalOpen && (
        <>
          <div
            className={`fixed inset-0 transition-opacity duration-300 z-40 ${
              animateModal ? "opacity-50" : "opacity-0"
            }`}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            onClick={closeModal}
          />
          <div
            className={`fixed top-16 right-1 ml-2 w-full max-w-md bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform z-50 ${
              animateModal ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4">
              <h2 className="text-xl font-semibold text-gray-800">Add Leave</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="text-xl">×</span>
              </button>
            </div>
            <div className="p-4">
              <LeaveForm initialDate={selectedDate} onClose={closeModal} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AttendanceTracker;
