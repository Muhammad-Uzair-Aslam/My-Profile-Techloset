import { useState, useEffect } from "react";
import { ActiveItemType } from "../types/types";
import { useLocation } from "react-router-dom";

const useSideBarItem = (initialItem: ActiveItemType = "profile") => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<ActiveItemType>(initialItem);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  useEffect(() => {
    const path = location.pathname.replace("/", "") as ActiveItemType;
    if (path && path !== activeItem) {
      setActiveItem(path || initialItem);
    }
  }, [location.pathname, initialItem]);
  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => {
      return !prev;
    });
  };
  return { activeItem, setActiveItem, toggleSidebar, sidebarCollapsed };
};

export default useSideBarItem;
