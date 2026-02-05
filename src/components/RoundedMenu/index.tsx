import type React from "react";

interface RoundedMenuProps {
  items: {
    label: string;
    icon?: React.ComponentType<{ className?: string; }>;
    key: string;
  }[];
  active: string;
  className: string;
  onChange: (key: string) => void;
}

const RoundedMenu = ({
  items,
  active,
  className,
  onChange
}: RoundedMenuProps) => {
  const activeButtonClass = 'bg-white rounded-full h-full'

  return (
    <div
      className={`${className} flex bg-gray-200 h-9 items-center rounded-full w-full p-[3px] gap-2 text-sm`}
    >
      {
        items.map(
          (item, index: number) =>
            <button
              key={index}
              className={`flex gap-2 justify-center items-center flex-1 ${active === item.key && activeButtonClass}`}
              onClick={() => onChange(item.key)}
            >
              {item.icon && <item.icon className="w-3.5 h-3.5" />}
              <div>{item.label}</div>
            </button>
        )
      }
    </div>
  )
}

export default RoundedMenu;