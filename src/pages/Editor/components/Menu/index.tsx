import { Button } from "antd";
const menuItems = ['添加组件', '简历结构', '简历配置']


interface MenuProps {
  active: number;
  onChange: (val:number) => void;
}

const Menu = ({
  active,
  onChange
}: MenuProps) => {
  return (
    <div className="h-14 border-b border-t border-gray-200 px-4 bg-gray-50 flex items-center gap-2">
      {
        menuItems.map((item, idx) => {
          return (
            <button
              className={`${active === idx ? "bg-white shadow text-blue-600" : "text-gray-600 hover:text-gray-900"} text-sm px-3 py-1.5 rounded transition-colors`}
              key={idx}
              onClick={() => {
                onChange(idx)
              }}
            >
              {item}
            </button>
          )
        })
      }
    </div>
  )
}

export default Menu