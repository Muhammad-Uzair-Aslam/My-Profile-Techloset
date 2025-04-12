import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DatePickerProps } from '../../types/types';
import { months, daysOfWeek } from '../../constant/MenuItems';
import { useDatePicker } from '../../hooks/useDatePicker';
export default function DatePicker({
  label,
  initialDate = '',
  onChange,
  placeholder = 'Select a date',
  className = '',
}: DatePickerProps) {
  const {
    showCalendar,
    selectedDate,
    selectedTime,
    currentMonth,
    currentYear,
    calendarPosition,
    calendarRef,
    inputRef,
    setShowCalendar,
    setCurrentMonth,
    setCurrentYear,
    getCalendarDays,
    selectDate,
    handlePrevMonth,
    handleNextMonth,
    handleHourChange,
    handleMinuteChange,
    handlePeriodChange,
  } = useDatePicker({ initialDate, onChange });

  return (
    <div className={`mb-4 relative ${className}`}>
      {label && (
        <label className="block text-sm text-gray-600 mb-1">{label}</label>
      )}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          readOnly
          value={selectedDate}
          onClick={() => setShowCalendar(!showCalendar)}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer"
        />

        {showCalendar && (
          <div
            ref={calendarRef}
            className={`absolute ${
              calendarPosition === 'top' ? 'bottom-full mb-1' : 'top-full mt-1'
            } left-0 w-full max-w-xs z-20 bg-white border border-gray-300 rounded shadow-lg`}
          >
            <div className="relative">
              <div className="flex justify-between items-center bg-indigo-500 text-white p-2 rounded-t">
                <button
                  onClick={handlePrevMonth}
                  className="p-1 hover:bg-indigo-600 rounded"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2 items-center">
                  <select
                    value={currentMonth}
                    onChange={(e) => setCurrentMonth(e.target.value)}
                    className="bg-gray-200 text-black border-none rounded px-2 py-1"
                  >
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <input
                    value={currentYear}
                    type="number"
                    onChange={(e) => setCurrentYear(parseInt(e.target.value))}
                    className="bg-indigo-600 text-white border-none rounded w-20 px-2 py-1"
                  />
                </div>
                <button
                  onClick={handleNextMonth}
                  className="p-1 hover:bg-indigo-600 rounded"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="flex bg-indigo-500 text-gray-100">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-center text-sm font-medium flex-1 py-1"
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 p-2">
                {getCalendarDays().map(({ day, type, isSelected, isToday }, index) => (
                  <div
                    key={`${type}-${index}`}
                    onClick={() => type === 'current' && selectDate(day)}
                    className={`text-center py-1 ${
                      type === 'current'
                        ? `cursor-pointer ${
                            isSelected
                              ? 'bg-indigo-500 text-white rounded-full'
                              : isToday
                              ? 'border border-indigo-300 rounded-full hover:bg-indigo-100'
                              : 'hover:bg-gray-100'
                          }`
                        : 'text-gray-400'
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center mb-4 mt-2 px-2">
                <input
                  type="number"
                  value={selectedTime.hour}
                  onChange={handleHourChange}
                  className="w-16 text-center border border-gray-300 rounded p-1"
                  min="1"
                  max="12"
                />
                <span className="mx-1 font-bold">:</span>
                <input
                  type="number"
                  value={selectedTime.minute}
                  onChange={handleMinuteChange}
                  className="w-16 text-center border border-gray-300 rounded p-1"
                  min="0"
                  max="59"
                />
                <select
                  value={selectedTime.period}
                  onChange={handlePeriodChange}
                  className="ml-2 border border-gray-300 rounded px-2 py-1"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}