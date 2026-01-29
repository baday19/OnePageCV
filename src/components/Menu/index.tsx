import { NavLink } from "react-router-dom";
import { DocumentCurrencyRupeeIcon, FolderIcon, NewspaperIcon, UserIcon } from '@heroicons/react/24/outline'

const menuItems = [
  { icon: <DocumentCurrencyRupeeIcon className="w-4 h-4" />, name: "简历编辑", path: "/editor" },
  { icon: <FolderIcon className="w-4 h-4" />, name: "简历管理", path: "/manage" },
  { icon: <NewspaperIcon className="w-4 h-4" />, name: "简历模板", path: "/template" },
  { icon: <UserIcon className="w-4 h-4" />, name: "个人信息", path: "/profile" },
];

const Menu = () => {
  return (
    <nav className="px-4 shadow flex h-16 items-center gap-2">
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg text-sm transition-colors flex items-center ${isActive
              ? "bg-blue-50 text-blue-600"
              : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          {item.icon}
          <div className="ml-2">{item.name}</div>
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
