import { NavigationControlsProps, UseNavigationControlsReturn } from '../types/types';
import { MONTHS, formatDay, formatDayOfWeek } from '../utils/dateUtils';
export const useNavigationControls = ({
  currentDate,
  view,
  weekDays,
}: Pick<NavigationControlsProps, 'currentDate' | 'view' | 'weekDays'>): UseNavigationControlsReturn => {
  const getHeaderText = () => {
    if (view === 'Month') {
      return `${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    } else if (view === 'Week') {
      const startMonth = MONTHS[weekDays[0].getMonth()];
      const endMonth = MONTHS[weekDays[6].getMonth()];
      if (startMonth === endMonth) {
        return `${startMonth.slice(0, 3)} ${formatDay(
          weekDays[0]
        )} – ${formatDay(weekDays[6])}`;
      } else {
        return `${startMonth.slice(0, 3)} ${formatDay(
          weekDays[0]
        )} – ${endMonth.slice(0, 3)} ${formatDay(weekDays[6])}`;
      }
    } else {
      return `${formatDayOfWeek(currentDate)} ${MONTHS[
        currentDate.getMonth()
      ].slice(0, 3)} ${currentDate.getDate()}`;
    }
  };

  const headerText = getHeaderText();

  return {
    headerText,
  };
};