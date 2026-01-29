import { PlusCircleIcon, ArrowsUpDownIcon, ArrowDownIcon, ArrowUpIcon, TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { useEffect, useState, type ComponentType } from "react";
import type { CssNamedColor } from "@/utils/types";
import { Dropdown, Modal } from "antd";
import Input from "../Input";
import type { ItemType } from "antd/es/menu/interface";

interface EditorCardProps {
  title: string;
  icon?: ComponentType<{ className?: string }>;
  iconColor?: CssNamedColor,
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
  onChange: (newTitle: string) => void;
  showUp: boolean;
  showDown: boolean;
  showDelete: boolean;
  showEdit: boolean;
  children: React.ReactNode;
  items?: ItemType[];
  onAddItem?: (item: any) => void;
}


const EditorCard = ({
  title,
  icon: Icon,
  iconColor,
  onMoveUp,
  onMoveDown,
  onDelete,
  onChange = () => { },
  showUp = true,
  showDown = true,
  showDelete = true,
  showEdit = true,
  children,
  items,
  onAddItem,
}: EditorCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [titleValue, setTitleValue] = useState(title)

  const buttonClassName = "rounded-lg px-3 h-8 hover:bg-gray-100 transition-colors"

  useEffect(() => {
    if (isModalOpen) {
      setTitleValue(title)
    }
  }, [isModalOpen])

  const handleOk = () => {
    onChange(titleValue)
    setIsModalOpen(false)
  }

  return (
    <section
      className="mt-4 px-4 pb-4 border rounded-lg border-gray-200"
    >
      {/* 标题行 */}
      <div
        className="flex justify-between border-b pt-4 pb-3 border-gray-200"
      >
        <div className="text-lg font-bold flex items-center">
          {
            Icon && <div
              className={`mr-2 w-8 h-8 bg-${iconColor}-100 text-${iconColor}-600 rounded-lg flex items-center justify-center`}
            >
              <Icon className="w-4 h-4" />
            </div>
          }
          <div>{title}</div>
          {
            showEdit && <div
              className="rounded text-gray-300 ml-1 w-5 h-5 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => {
                setIsModalOpen(true)
              }}
            >
              <PencilSquareIcon className="w-4 h-4" />
            </div>
          }
        </div>
        <div
          className="flex items-center gap-1 h-full"
        >
          {/* {
            showUp && <button onClick={onMoveUp} className={buttonClassName}>
              <ArrowUpIcon className="w-3 h-3" />
            </button>
          } */}
          {
            showDown && <button onClick={onMoveDown} className={buttonClassName}>
              <ArrowsUpDownIcon className="w-4 h-4" />
            </button>
          }
          {
            showDelete && <button onClick={onDelete} className={`${buttonClassName} flex items-center`}>
              <TrashIcon className="w-4 h-4" />
            </button>
          }
        </div>
      </div>
      {/* 填写行 */}
      <div>
        {children}
        <Dropdown menu={{ items, onClick: onAddItem }} placement="bottom">
          <button className="mt-4 w-full flex items-center justify-center cursor-pointer py-1.5 border border-gray-300 rounded-md text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors">
            <PlusCircleIcon className="w-4 h-4" />
            <div className="ml-2.5">添加信息行</div>
          </button>
        </Dropdown>

      </div>
      <Modal
        title="修改模块名称"
        cancelText="取消"
        okText="保存"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => {
          setIsModalOpen(false)
        }}
      >
        <Input className="w-full" placeholder="请输入模块名称" value={titleValue}
          onChange={(e) => { setTitleValue(e.target.value) }}
        />
      </Modal>
    </section>
  )
}

export default EditorCard