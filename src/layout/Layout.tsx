import Sidebar from "../components/sideBar/SideBar";
import Header from "../components/header/Header";
import { LayoutProps } from "../types/types";
import { useState } from "react";

const Layout: React.FC<LayoutProps> = ({
  children,
  menuItems,
  activeItem,
  setActiveItem,
  toggleSidebar,
  sidebarCollapsed,
}) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen">
      <Sidebar
        menuItems={menuItems}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        toggleSidebar={toggleSidebar}
        sidebarCollapsed={sidebarCollapsed}
        mobileSidebarOpen={mobileSidebarOpen}
        closeMobileSidebar={() => setMobileSidebarOpen(false)}
      />
      <div
        className={`flex-1 overflow-auto transition-all duration-300 ${
          sidebarCollapsed ? "md:ml-16" : "md:ml-[25%]"
        }`}
      >
        <Header
          activeItem={activeItem}
          sidebarCollapsed={sidebarCollapsed}
          toggleMobileSidebar={() => setMobileSidebarOpen((prev) => !prev)}
        />
        <div className="mt-16  px-4 py-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
