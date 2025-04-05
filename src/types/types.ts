import React from "react";

export type LayoutProps = {
  children: React.ReactNode;
  menuItems: MenuItem[];
  activeItem: ActiveItemType;
  setActiveItem: (id: ActiveItemType) => void; 
  toggleSidebar: () => void;
  sidebarCollapsed: boolean;
};

export type SidebarProps = {
  menuItems: MenuItem[];
  activeItem: ActiveItemType;
  setActiveItem: (id: ActiveItemType) => void;
  toggleSidebar: () => void;
  sidebarCollapsed: boolean;
  mobileSidebarOpen: boolean;
  closeMobileSidebar: () => void;
};

export type HeaderProps = {
  activeItem: ActiveItemType;
  sidebarCollapsed: boolean;
  toggleMobileSidebar: () => void;
};

export type sideBarItemProps = {
  label: string;
  onClick: () => void;
  isActive: boolean;
  icon: React.ReactNode;
  collapsed: boolean;
};

export type MenuItem = {
  id: ActiveItemType; 
  label: string;
  icon: React.ReactNode;
};

export type ActiveItemType = 'profile' | 'attendance' | 'events' | 'promotions' | 
'paystub' | 'perks' | 'increments' | 'documents' | 'contract' | 
'leavePolicy' | 'experienceLetter'|'leaves'|'letters'|'updateProfile';

export type ProfileData= {
  name: string;
  email: string;
  cnic: string;
  education: string;
  rankTitle: string;
  jobType: string;
  joiningDate: string;
  imageUrl: string;
  info: {
    birthDate: string;
    mobile: string;
    cnic: string;
    address: string;
    gender: string;
    experience: string;
  };
  bank: {
    bankName: string;
    accountHolderName?: string;
    branchCode?: string;
    accountNumber?: string;
    ibanNumber?: string;
    accountType?: string;
  };
  socialLinks:{
    LinkedIn:string,
    Facebook:string,
    Skype:string,
    Github:string
  }
}
export type ViewType = 'Month' | 'Week' | 'Day';

export type CalendarDay ={
  day: number;
  currentMonth: boolean;
  date: Date;
}
export type CalendarHeaderProps ={
  currentDate: Date;
  view: ViewType;
  weekDays: Date[];
  onPrevPeriod: () => void;
  onNextPeriod: () => void;
  onViewChange: (view: ViewType) => void;
}
export type ViewToggleProps ={
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export type LegendItem ={
  label: string;
  color: string;
}
export type MonthViewProps ={
  calendarDays: CalendarDay[];
  onDateClick?: (date: Date) => void;
}
export type WeekViewProps ={
  weekDays: Date[];
  onDateClick?: (date: Date) => void;
}
export type DayViewProps ={
  currentDate: Date;
  onDateClick?: (date: Date) => void;
}
export type NavigationControlsProps ={
  currentDate: Date;
  view: ViewType;
  weekDays: Date[];
  onPrevPeriod: () => void;
  onNextPeriod: () => void;
}
export type CalendarProps= {
  initialDate?: Date;
}

export type AttendanceTrackerProps ={
  initialDate?: Date;
}
export type ProfileHeaderProps ={
  data: ProfileData;
}
export type TitleDropdownProps={
  titles:[],
}
export type PerkItem ={
  id: string;
  createdAt: string;
  title: string;
  amount?: string | number;
}

export type UseLeaveModalReturn ={
  isModalOpen: boolean;
  animateModal: boolean;
  selectedDate: Date | null;
  handleDateClick: (date: Date) => void;
  handleRequestLeave: () => void;
  closeModal: () => void;
}

export type UseCalendarProps={
  initialDate?: Date;
  initialView?: ViewType;
}

export type UseCalendarReturn ={
  currentDate: Date;
  view: ViewType;
  weekDays: Date[];
  calendarDays: { day: number; date: Date; currentMonth: boolean }[];
  setView: (view: ViewType) => void;
  handlePrevPeriod: () => void;
  handleNextPeriod: () => void;
}

export type DatePickerProps ={
  label?: string;
  initialDate?: string;
  onChange?: (date: string) => void;
  placeholder?: string;
  className?: string;
}

export type Time= {
  hour: string;
  minute: string;
  period: "AM" | "PM";
}

export type UseDatePickerProps ={
  initialDate?: string;
  onChange?: (date: string) => void;
}

export type CalDay ={
  day: number;
  type: 'prev' | 'current' | 'next';
  isSelected: boolean;
  isToday: boolean;
}

export type UseDatePickerReturn ={
  showCalendar: boolean;
  selectedDate: string;
  selectedTime: Time;
  currentMonth: string;
  currentYear: number;
  calendarPosition: 'bottom' | 'top';
  calendarRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  setShowCalendar: (value: boolean) => void;
  setSelectedDate: (value: string) => void;
  setSelectedTime: (value: Time) => void;
  setCurrentMonth: (value: string) => void;
  setCurrentYear: (value: number) => void;
  daysInMonth: (month: string, year: number) => number;
  firstDayOfMonth: (month: string, year: number) => number;
  formatDate: (day: number) => string;
  selectDate: (day: number) => void;
  updateTime: (hour: string, minute: string, period: 'AM' | 'PM') => void;
  handleHourChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMinuteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePeriodChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  isCurrentDay: (day: number) => boolean;
  getCalendarDays: () => CalDay[];
}
export type DocumentCardProps={
  src:string,
  alt:string
}

export type DropdownProps= {
  label: string;
  options: string[];
  defaultOption: string;
  value: string;
  onChange: (value: string) => void;
}
export type InputFieldProps ={
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  prefixIcon?: React.ReactNode;
}
export type FormData ={
  type: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

export type LeaveFormProps ={
  initialDate: Date | null;
  onClose: () => void;
}
export type StepperProps ={
  currentStep: number;
}

export type SalaryIncrementEntry ={
  incrementAt: string;
  newSalary: number | string;
  note: string;
}

export type SalaryIncrementTableProps= {
  entries: SalaryIncrementEntry[];
}

export type UseDropdownReturn ={
  isOpen: boolean;
  selectedOption: string;
  highlightedIndex: number;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  setIsOpen: (value: boolean) => void;
  handleSelect: (option: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export type UseHeaderReturn ={
  isDropdownOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  handleProfileClick: () => void;
  handleUpdateProfile: () => void;
  setIsDropdownOpen: (value: boolean) => void;
}
export type UseLeaveFormReturn={
  formData: FormData;
  leaveTypes: string[];
  titles: string[];
  handleChange: (name: keyof FormData, value: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleCancel: () => void;
}

export type UseAttendanceStatusTagReturn= {
  status: string;
  statusColor: string;
  shouldRender: boolean;
}
export type AttendanceStatusTagProps ={
  date: Date;
  isCurrentMonth?: boolean;
  className?: string;
}
export type UseAttendanceMonthViewReturn ={
  today: Date;
  requiredRows: number;
}
export type UseNavigationControlsReturn= {
  headerText: string;
}

export type UseMonthViewReturn ={
  today: Date;
  requiredRows: number;
}



