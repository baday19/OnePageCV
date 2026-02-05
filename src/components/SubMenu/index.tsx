
interface MenuProps {
  items: {
    label: string;
    key: string;
    [other: string]: any;
  }[];
  active: string;
  onChange: (val: string) => void;
}

const Menu = ({
  items,
  active,
  onChange
}: MenuProps) => {
  return (
    <div className="h-14 border-b border-t border-gray-200 px-4 bg-gray-50 flex items-center gap-2">
      {
        items.map((item, idx) => {
          return (
            <button
              className={`${active === item.key ? "bg-white shadow text-blue-600" : "text-gray-600 hover:text-gray-900"} text-sm px-3 py-1.5 rounded transition-colors`}
              key={idx}
              onClick={() => {
                onChange(item.key);
              }}
            >
              {item.label}
            </button>
          );
        })
      }
    </div>
  );
};

export default Menu;