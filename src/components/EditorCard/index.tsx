import { PlusCircleIcon, ArrowsUpDownIcon, TrashIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { useMemo, useState, type ComponentType } from "react";
import { Dropdown, Modal, type MenuProps } from "antd";
import Input from "../Input";
import { matchLogoPreset, type CssNamedColor } from "./preset";


interface EditorCardProps {
  title: string;
  preset?: boolean;
  icon?: ComponentType<{ className?: string }>;
  iconColor?: CssNamedColor,
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  onDelete?: () => void;
  onChange?: (newTitle: string) => void;
  showUp?: boolean;
  showDown?: boolean;
  showDelete?: boolean;
  showEdit?: boolean;
  children?: React.ReactNode;
  onAddLine?: (item: any) => void;
}



const EditorCard = ({
  title,
  preset = false,
  icon: Icon,
  iconColor,
  onMoveUp,
  onMoveDown,
  onDelete,
  onChange = () => { },
  showUp = false,
  showDown = false,
  showDelete = true,
  showEdit = true,
  children,
  onAddLine,
}: EditorCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [collapsed, setCollapsed] = useState(false);

  const buttonClassName = "rounded-lg px-3 h-8 hover:bg-gray-100 transition-colors";

  const presetData = useMemo(() => {
    if (preset) {
      return matchLogoPreset(title);
    }
    return null;
  }, [title, preset]);

  const IconFinal = presetData?.icon || Icon;
  const iconColorFinal = presetData?.iconColor || iconColor;

  const moveItems: MenuProps['items'] = [
    {
      key: 'up',
      label: '上移',
      disabled: !showUp,
    },
    {
      key: 'down',
      label: '下移',
      disabled: !showDown,
    },
  ];

  const handleMove = (e: any) => {
    if (e.key === 'up' && onMoveUp) {
      onMoveUp();
    } else if (e.key === 'down' && onMoveDown) {
      onMoveDown();
    }
  };


  const handleOk = () => {
    onChange(titleValue);
    setIsModalOpen(false);
  };


  return (
    <section
      className="mt-4 px-4 border rounded-lg border-gray-200"
    >
      {/* 标题行 */}
      <div
        className={`flex justify-between pt-4 pb-3 border-gray-200 ${collapsed ? '' : 'border-b'}`}
      >
        <div className="text-lg font-bold flex items-center">
          {
            IconFinal && <div
              className={`mr-2 w-8 h-8 bg-${iconColorFinal}-100 text-${iconColorFinal}-600 rounded-lg flex items-center justify-center`}
            >
              <IconFinal className="w-4 h-4" />
            </div>
          }
          <div>{title}</div>
          {
            showEdit && <div
              className="rounded text-gray-300 ml-1 w-5 h-5 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => {
                setIsModalOpen(true);
                setTitleValue(title);
              }}
            >
              <PencilSquareIcon className="w-4 h-4" />
            </div>
          }
        </div>
        <div
          className="flex items-center gap-1 h-full"
        >
          {
            (!showUp && !showDown) ||
            <Dropdown menu={{ items: moveItems, onClick: handleMove }} placement="bottom">
              <button className={buttonClassName}>
                <ArrowsUpDownIcon className="w-4 h-4" />
              </button>
            </Dropdown>
          }
          <button onClick={() => setCollapsed(!collapsed)} className={`${buttonClassName} flex items-center`}>
            {
              collapsed ? <ArrowsPointingOutIcon className="w-4 h-4" /> : <ArrowsPointingInIcon className="w-4 h-4" />
            }
          </button>
          {
            showDelete && <button onClick={onDelete} className={`${buttonClassName} flex items-center`}>
              <TrashIcon className="w-4 h-4" />
            </button>
          }
        </div>
      </div>
      {/* 填写行 */}
      {
        !collapsed && <div>
          {children}
          <button onClick={onAddLine} className="my-4 w-full flex items-center justify-center cursor-pointer py-1.5 border border-gray-300 rounded-md text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors">
            <PlusCircleIcon className="w-4 h-4" />
            <div className="ml-2.5">添加信息</div>
          </button>
        </div>
      }
      <Modal
        title="修改模块名称"
        cancelText="取消"
        okText="保存"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        <Input className="w-full" placeholder="请输入模块名称" value={titleValue}
          onChange={(e) => { setTitleValue(e.target.value); }}
        />
      </Modal>
    </section>
  );
};

export default EditorCard;