import Input from "@/components/Input";
import { NumberedListIcon, EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { Dropdown, type MenuProps } from "antd";

interface CommonEditorInputProps {
  values: string[];
  onChange: (newValues: string[]) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
}

const CommonEditorInput = ({
  values,
  onChange,
  onMoveUp,
  onMoveDown,
  onDelete
}: CommonEditorInputProps) => {
  const buttonClassName = "rounded-lg px-3 h-8 hover:bg-gray-100 transition-colors"
  const typeItems = [
    {
      key: '1',
      label: '单列',
    },
    {
      key: '2',
      label: '双列',
    },
  ];
  const handleTypeChange = (e: any) => {
    const currentType = values.length;
    const tartgetType = Number(e.key);
    if (currentType === tartgetType) {
      return;
    }
    const newValues = values.slice(0, tartgetType);
    while (newValues.length < tartgetType) {
      newValues.push('');
    }
    onChange(newValues);
  }

  const menuItems = [
    {
      key: '1',
      label: '上移',
    },
    {
      key: '2',
      label: '下移',
    },
    {
      key: '3',
      label: '删除',
    },
  ];

  const handleMove = (e: any) => {
    if (e.key === '1') {
      onMoveUp();
    } else if (e.key === '2') {
      onMoveDown();
    } else if (e.key === '3') {
      onDelete();
    }
  }

  const handleContentChange = (index: number, newValue: string) => {
    const newValues = values.map((value, i) => {
      if (i === index) {
        return newValue;
      }
      return value;
    });
    onChange(newValues);
  }

  return (
    <div className="flex gap-1">
      <div className="flex-1 flex gap-3">
        {
          values.map((value: string, index: number) => (
            <Input className="flex-1" key={index} value={value} onChange={(e) => {
              handleContentChange(index, e.target.value);
            }} />
          ))
        }
      </div>
      <div className="flex gap-1 ml-2">
        {
          <Dropdown
            menu={{ items: typeItems, onClick: handleTypeChange }}
            placement="bottom"
          >
            <button className={buttonClassName}>
              <NumberedListIcon className="w-4 h-4" />
            </button>
          </Dropdown>
        }
        {
          <Dropdown
            menu={{ items: menuItems, onClick: handleMove }}
            placement="bottom"
          >
            <button className={buttonClassName}>
              <EllipsisHorizontalCircleIcon className="w-4 h-4" />
            </button>
          </Dropdown>
        }
      </div>
    </div>
  )
}

export default CommonEditorInput;