import { useState, useEffect, useRef } from 'react';
import { months } from '../constant/MenuItems';
import { Time } from '../types/types';
import { UseDatePickerProps,CalDay,UseDatePickerReturn } from '../types/types';
export const useDatePicker = ({
  initialDate = '',
  onChange,
}: UseDatePickerProps): UseDatePickerReturn => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectedTime, setSelectedTime] = useState<Time>({
    hour: '12',
    minute: '00',
    period: 'AM',
  });
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState<string>(
    months[today.getMonth()]
  );
  const [currentYear, setCurrentYear] = useState<number>(today.getFullYear());
  const calendarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [calendarPosition, setCalendarPosition] = useState<'bottom' | 'top'>(
    'bottom'
  );

  useEffect(() => {
    if (initialDate) {
      const date = new Date(initialDate);
      if (!isNaN(date.getTime())) {
        setCurrentMonth(months[date.getMonth()]);
        setCurrentYear(date.getFullYear());
        let hours = date.getHours();
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours === 0 ? 12 : hours;
        setSelectedTime({
          hour: hours.toString().padStart(2, '0'),
          minute: date.getMinutes().toString().padStart(2, '0'),
          period,
        });
      }
    }
  }, [initialDate]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    const handleResize = () => {
      calculatePosition();
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (showCalendar) {
      calculatePosition();
    }
  }, [showCalendar]);

  const calculatePosition = () => {
    if (!inputRef.current) return;
    const rect = inputRef.current.getBoundingClientRect();
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    if (spaceBelow < 350 && spaceAbove > spaceBelow) {
      setCalendarPosition('top');
    } else {
      setCalendarPosition('bottom');
    }
  };

  const daysInMonth = (month: string, year: number): number => {
    return new Date(year, months.indexOf(month as any) + 1, 0).getDate();
  };

  const firstDayOfMonth = (month: string, year: number): number => {
    return new Date(year, months.indexOf(month as any), 1).getDay();
  };

  const formatDate = (day: number) => {
    const monthIndex = months.indexOf(currentMonth as any);
    const date = new Date(currentYear, monthIndex, day);
    const formattedDay = date.getDate().toString().padStart(2, '0');
    return `${months[date.getMonth()]} ${formattedDay}, ${date.getFullYear()} ${
      selectedTime.hour
    }:${selectedTime.minute} ${selectedTime.period}`;
  };

  const selectDate = (day: number) => {
    const formattedDate = formatDate(day);
    setSelectedDate(formattedDate);
    onChange?.(formattedDate);
    setShowCalendar(false);
  };

  const updateTime = (hour: string, minute: string, period: 'AM' | 'PM') => {
    if (!selectedDate) return;
    setSelectedTime({ hour, minute, period });
    const dateParts = selectedDate.split(' ');
    if (dateParts.length >= 3) {
      const newDate = `${dateParts[0]} ${dateParts[1]} ${dateParts[2]} ${hour}:${minute} ${period}`;
      setSelectedDate(newDate);
      onChange?.(newDate);
    }
  };

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let hour = e.target.value;
    const hourNum = parseInt(hour);
    if (isNaN(hourNum) || hourNum < 1) hour = '1';
    else if (hourNum > 12) hour = '12';
    updateTime(hour, selectedTime.minute, selectedTime.period);
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let minute = e.target.value;
    const minuteNum = parseInt(minute);
    if (isNaN(minuteNum) || minuteNum < 0) minute = '00';
    else if (minuteNum > 59) minute = '59';
    else if (minute.length === 1) minute = minute.padStart(2, '0');
    updateTime(selectedTime.hour, minute, selectedTime.period);
  };

  const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const period = e.target.value as 'AM' | 'PM';
    updateTime(selectedTime.hour, selectedTime.minute, period);
  };

  const handlePrevMonth = () => {
    const currentMonthIndex = months.indexOf(currentMonth as any);
    if (currentMonthIndex === 0) {
      setCurrentMonth(months[11]);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(months[currentMonthIndex - 1]);
    }
  };

  const handleNextMonth = () => {
    const currentMonthIndex = months.indexOf(currentMonth as any);
    if (currentMonthIndex === 11) {
      setCurrentMonth(months[0]);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(months[currentMonthIndex + 1]);
    }
  };

  const isCurrentDay = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === months[today.getMonth()] &&
      currentYear === today.getFullYear()
    );
  };

  const getCalendarDays = (): CalDay[] => {
    const days: CalDay[] = [];
    const totalDays = daysInMonth(currentMonth, currentYear);
    const firstDay = firstDayOfMonth(currentMonth, currentYear);
    const prevMonthIndex = months.indexOf(currentMonth as any) - 1;
    const prevMonth = prevMonthIndex < 0 ? 11 : prevMonthIndex;
    const prevYear = prevMonthIndex < 0 ? currentYear - 1 : currentYear;
    const prevMonthDays = daysInMonth(months[prevMonth], prevYear);

    // Previous month days
    for (let i = 0; i < firstDay; i++) {
      const day = prevMonthDays - firstDay + i + 1;
      days.push({
        day,
        type: 'prev',
        isSelected: false,
        isToday: false,
      });
    }

    // Current month days
    for (let i = 1; i <= totalDays; i++) {
      const isSelected =
        selectedDate &&
        selectedDate.includes(`${currentMonth} ${i}, ${currentYear}`);
      const isToday = isCurrentDay(i);
      days.push({
        day: i,
        type: 'current',
        isSelected: !!isSelected,
        isToday,
      });
    }

    // Next month days
    const totalCells = 6 * 7; // 6 rows, 7 days
    const remainingDays = totalCells - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        type: 'next',
        isSelected: false,
        isToday: false,
      });
    }

    return days;
  };

  return {
    showCalendar,
    selectedDate,
    selectedTime,
    currentMonth,
    currentYear,
    calendarPosition,
    calendarRef,
    inputRef,
    setShowCalendar,
    setSelectedDate,
    setSelectedTime,
    setCurrentMonth,
    setCurrentYear,
    daysInMonth,
    firstDayOfMonth,
    formatDate,
    selectDate,
    updateTime,
    handleHourChange,
    handleMinuteChange,
    handlePeriodChange,
    handlePrevMonth,
    handleNextMonth,
    isCurrentDay,
    getCalendarDays,
  };
};