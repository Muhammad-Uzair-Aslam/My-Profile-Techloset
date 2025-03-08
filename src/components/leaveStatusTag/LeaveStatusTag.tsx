import React from 'react';
import { useLeaveStatusTag } from '../../hooks/useLeaveStatusTag';
import { AttendanceStatusTagProps } from '../../types/types';


const AttendanceStatusTag: React.FC<AttendanceStatusTagProps> = ({
  date,
  isCurrentMonth = true,
  className = '',
}) => {
  const { status, statusColor, shouldRender } = useLeaveStatusTag({
    date,
    isCurrentMonth,
  });

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`mt-2 ${statusColor} text-white rounded-full text-sm px-2 text-center ${className}`}
    >
      {status}
    </div>
  );
};

export default AttendanceStatusTag;