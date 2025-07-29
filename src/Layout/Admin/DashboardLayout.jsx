


import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUserGroup } from "react-icons/fa6";
import { BadgePercent, Bell, CalendarDays, ChevronDown, ChevronsLeft, ChevronsRight, MessagesSquare } from "lucide-react";
import { RiUserSettingsLine } from "react-icons/ri";
import { BsFillBarChartFill } from "react-icons/bs";

export default function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const menuItems = [
    {
      items: [
        { name: "Dashboard", icon: <LuLayoutDashboard size={20} />, path: "/home" },
        { name: "Users & Therapists", icon: <FaUserGroup size={20} />, path: "/client_info" },
        { name: "Bookings & Payments", icon: <CalendarDays size={20} />, path: "/booking_info" },
        { name: "Roles & Permissions", icon: <RiUserSettingsLine size={20} />, path: "/roles" },
        { name: "Analytics", icon: <BsFillBarChartFill size={20} />, path: "/analytics" },
        { name: "Promotions", icon: <BadgePercent size={20} />, path: "/promotions" },
        { name: "Dispute Management", icon: <MessagesSquare size={20} />, path: "/dispute_management"},
      ],
    },
  ];

  // Sync selectedItem with current route on initial load
  useEffect(() => {
    const currentItem = menuItems[0].items.find(
      (item) => item.path === location.pathname
    );
    if (currentItem) {
      setSelectedItem(currentItem.name);
    }
  }, [location.pathname]);

  const handleItemClick = (itemName, path) => {
    setSelectedItem(itemName); // Update the selected item on click
    navigate(path); // Navigate to the clicked item's path
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? "w-20" : "w-64"
        } bg-white border-r border-gray-200 transition-all duration-500 ease-in-out`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-4">
          <div className="flex items-center ms-1 gap-2 mt-20">
            <div
              className={`transform transition-all duration-500 ${
                isCollapsed ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
              }`}
            >
              <img src="https://i.ibb.co.com/6JmxrwwH/Group-1686551099-1.png" alt="Logo" />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 md:mt-20">
          {menuItems.map((section, idx) => (
            <div key={idx} className="mb-8">
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      to={item.path}
                      onClick={() => handleItemClick(item.name, item.path)}
                      className={`flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 group relative ${
                        selectedItem === item.name ? "bg-gray-200 text-gray-900 font-semibold" : ""
                      }`}
                    >
                      <span
                        className={`group-hover:text-gray-700 transition-colors duration-300 ${
                          selectedItem === item.name ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span
                        className={`transform transition-all duration-500 ${
                          isCollapsed ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
                        } whitespace-nowrap`}
                      >
                        {item.name}
                      </span>
                      {item.badge && !isCollapsed && (
                        <span className="ml-auto bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="h-16 bg-white border-b border-gray-200">
          <div className="h-full px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-300"
              >
                {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
              </button>
              <div className="flex flex-col">
                <span className="text-gray-700 font-bold text-xl">{selectedItem}</span>
                <h1>
                  Hi, Welcome <span className="text-[#B28D28] font-bold">Admin</span>
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4 me-10">
              <button className="p-2 bg-[#FAE08C1A] hover:bg-[#f8de91] border-2 border-[#B28D2833] rounded-full transition-colors duration-300">
                <Bell size={24} className="text-[#B28D28]" />
              </button>
              <div className="flex items-center justify-center gap-2">
                <div className="w-12">
                  <img
                    src="https://i.ibb.co/60hvPZRS/bannerimg-01.png"
                    className="rounded-full"
                    alt="Admin Avatar"
                  />
                </div>
                <div>
                  <h2 className="font-bold">Admin</h2>
                  <p className="text-gray-900">admin@hn.com</p>
                </div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button">
                    <ChevronDown size={20} />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content mt-4 menu bg-base-200 rounded-box z-50 w-32 p-2 shadow-md border border-gray-400"
                  >
                    <li>
                      <Link to="/profile" className="text-gray-700 hover:text-gray-900">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/logout" className="text-gray-700 hover:text-gray-900">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-12 bg-[#F5F5F6]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

