import { useState } from 'react';
import { LeaveFormProps, FormData,UseLeaveFormReturn } from '../types/types';

export const useLeaveForm = ({ initialDate, onClose }: LeaveFormProps): UseLeaveFormReturn => {
  const initialDateString = initialDate
    ? initialDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }) + ' 12:00 AM'
    : '';

  const [formData, setFormData] = useState<FormData>({
    type: '',
    title: '',
    description: '',
    startDate: initialDateString,
    endDate: initialDateString,
  });

  const leaveTypes = [
    'Please select type',
    'Full Leave',
    'Half Day',
    'Sick Leave',
    'Vacation',
  ];

  const titles = [
    'Please select title',
    'Casual Leave',
    'Sick Leave',
    'Annual Leave',
    'Unpaid Leave',
    'Maternity Leave',
    'Paternity Leave',
    'Remote',
  ];

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name as keyof FormData, value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.startDate || !formData.endDate) {
      alert('Please select start and end dates');
      return;
    }
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleCancel = () => {
    console.log('Form canceled');
    onClose();
  };

  return {
    formData,
    leaveTypes,
    titles,
    handleChange,
    handleInputChange,
    handleSubmit,
    handleCancel,
  };
};