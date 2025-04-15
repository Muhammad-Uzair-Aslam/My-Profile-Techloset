import React from 'react';
import { HeaderProps } from '../../types/types';
import profileImage from '../../assets/fakeImage.jpg';
import toggleImage from '../../assets/Toggle.png';
import { useHeader } from '../../hooks/useHeader';

const Header: React.FC<HeaderProps> = ({
  activeItem,
  sidebarCollapsed,
  toggleMobileSidebar,
}) => {
  const { isDropdownOpen, dropdownRef, handleProfileClick, handleUpdateProfile } = useHeader();

  return (
    <div
      className={`bg-white p-4 flex items-center justify-between fixed top-0 z-10 w-full ${
        sidebarCollapsed ? 'md:w-[calc(100%-4rem)]' : 'md:w-[75%]'
      }`}
    >
      <div className="md:pl-0 font-[400] flex items-center gap-1 text-[14px] text-[#4B5675]">
        <button onClick={toggleMobileSidebar} className="md:hidden">
          <img className="rotate-180" src={toggleImage} alt="Toggle png" />
        </button>
        My Profile &gt;{' '}
        <span className="text-[#071437] font-[500]">{activeItem}</span>
      </div>

      <div className="flex items-center gap-4 relative">
        <div
          className="w-10 h-10 bg-gray-200 rounded-full cursor-pointer"
          onClick={handleProfileClick}
        >
          <img
            className="h-10 w-10 rounded-full"
            src={profileImage}
            alt="Profile"
          />
        </div>
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg shadow-lg w-48 z-20"
          >
            <ul className="py-1">
              <li
                className="px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white cursor-pointer"
                onClick={handleUpdateProfile}
              >
                Update Profile
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;