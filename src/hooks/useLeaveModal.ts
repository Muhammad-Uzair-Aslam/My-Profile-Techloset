import { useState, useEffect } from 'react';
import { UseLeaveModalReturn } from '../types/types';
export const useLeaveModal = (): UseLeaveModalReturn => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      setAnimateModal(true);
    } else {
      setAnimateModal(false);
    }
  }, [isModalOpen]);

  const handleDateClick = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const clickedDate = new Date(date);
    clickedDate.setHours(0, 0, 0, 0);

    if (clickedDate > today) {
      setSelectedDate(date);
      setIsModalOpen(true);
    }
  };

  const handleRequestLeave = () => {
    setSelectedDate(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
  };

  return {
    isModalOpen,
    animateModal,
    selectedDate,
    handleDateClick,
    handleRequestLeave,
    closeModal,
  };
};