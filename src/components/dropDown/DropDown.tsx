import { DropdownProps } from '../../types/types';
import { useDropdown } from '../../hooks/useDropdown';

export default function Dropdown({
  label,
  options,
  defaultOption,
  onChange,
}: DropdownProps) {
  const { isOpen, selectedOption, highlightedIndex, dropdownRef, setIsOpen, handleSelect, handleKeyDown } = useDropdown({
    options,
    defaultOption,
    onChange,
  });

  return (
    <div className="mb-4 relative" ref={dropdownRef}>
      {label && <label className="block text-sm text-gray-600 mb-1">{label}</label>}
      <div className="relative">
        <input
          type="text"
          readOnly
          placeholder={defaultOption || 'Select an option'}
          value={selectedOption}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer"
        />
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-64 overflow-y-auto">
            {options.map((option, index) => (
              <div
                key={option}
                className={`px-2 cursor-pointer hover:bg-indigo-500 hover:text-white ${
                  index === highlightedIndex ? 'bg-indigo-100 text-indigo-700' : ''
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}