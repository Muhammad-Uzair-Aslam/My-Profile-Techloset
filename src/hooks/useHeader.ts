import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseHeaderReturn } from '../types/types';

export const useHeader = (): UseHeaderReturn => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleUpdateProfile = () => {
    setIsDropdownOpen(false);
    navigate('/updateProfile');
  };

  return {
    isDropdownOpen,
    dropdownRef,
    handleProfileClick,
    handleUpdateProfile,
    setIsDropdownOpen,
  };
};