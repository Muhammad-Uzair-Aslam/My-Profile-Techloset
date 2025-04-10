import { useState, useEffect, useRef } from 'react';
import { DropdownProps,UseDropdownReturn } from '../types/types';

export const useDropdown = ({
  options,
  defaultOption = 'Select an option',
  onChange,
}: Pick<DropdownProps, 'options' | 'defaultOption' | 'onChange'>): UseDropdownReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    const newValue = option === defaultOption ? '' : option;
    setSelectedOption(newValue);
    onChange?.(newValue);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (isOpen && highlightedIndex >= 0) {
        handleSelect(options[highlightedIndex]);
      } else {
        setIsOpen(!isOpen);
        setHighlightedIndex(isOpen ? -1 : 0);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (isOpen) {
        setHighlightedIndex((prev) =>
          prev < options.length - 1 ? prev + 1 : 0
        );
      } else {
        setIsOpen(true);
        setHighlightedIndex(0);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen) {
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : options.length - 1
        );
      } else {
        setIsOpen(true);
        setHighlightedIndex(options.length - 1);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  return {
    isOpen,
    selectedOption,
    highlightedIndex,
    dropdownRef,
    setIsOpen,
    handleSelect,
    handleKeyDown,
  };
};