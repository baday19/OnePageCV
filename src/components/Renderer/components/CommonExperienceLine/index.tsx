import Input from "@/components/Input";
import { NumberedListIcon, EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { Dropdown } from "antd";
import RichInput from "@/components/RichInput";



interface CommonExperienceLineProps {
  value: string[];
  type: string;
}

export const CommonExperienceLine = ({ value, type }: CommonExperienceLineProps) => {
  return (
    <div
      className="flex justify-between"
      style={{
        marginTop: type === 'rich' ? 0 : 'var(--paper-line-spacing)',
        lineHeight: `var(--paper-line-height)`,
        fontSize: 'var(--small-font-size)',
      }}
    >
      {
        value.map((line: string, index: number) => {
          return (
            <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
          )
        })
      }
    </div>
  )
}

interface CommonEditorInputProps {
  data: Record<string, any>;
  showTypeChange?: boolean;
  onAdd: () => void;
  onChange: (newData: Record<string, any>) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
}

export const CommonEditorInput = ({
  data,
  showTypeChange = true,
  onAdd,
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
      count: 1,
      value: 'single'
    },
    {
      key: '2',
      label: '双列',
      count: 2,
      value: 'double'
    },
    // {
    //   key: '3',
    //   label: '序列',
    //   count: 1,
    //   value: 'sequence'
    // },
    {
      key: '4',
      label: '富文本',
      count: 1,
      value: 'rich'
    },
  ];
  const handleTypeChange = (e: any) => {
    const currentType = data.type;
    const targetTypeData = typeItems.find(item => item.key === e.key) || typeItems[0];

    const targetType = targetTypeData.value;

    if (currentType === targetType) {
      return;
    }

    const newValues = data.value.slice(0, targetTypeData.count);
    while (newValues.length < targetTypeData.count) {
      newValues.push('');
    }
    onChange({ ...data, value: newValues, type: targetType });
  }

  const menuItems = [
    {
      key: 'up',
      label: '上移',
    },
    {
      key: 'down',
      label: '下移',
    },
    {
      key: 'add',
      label: '上增',
    },
    {
      key: 'delete',
      label: '删除',
    },
  ];

  const handleMenuClick = (e: any) => {
    if (e.key === 'up') {
      onMoveUp();
    } else if (e.key === 'down') {
      onMoveDown();
    } else if (e.key === 'delete') {
      onDelete();
    } else if (e.key === 'add') {
      onAdd();
    }
  }

  const handleContentChange = (index: number, newValue: string) => {
    const newValues = data.value.map((value: string, i: number) => {
      if (i === index) {
        return newValue;
      }
      return value;
    });
    onChange({ ...data, value: newValues });
  }

  return (
    <div className="flex gap-1">
      <div className="flex-1 flex gap-3">
        {
          data.type !== 'rich'
            ? data.value.map((value: string, index: number) => (
              <Input className="flex-1" key={index} value={value} onChange={(e) => {
                handleContentChange(index, e.target.value);
              }} />
            ))
            : <RichInput
              className="w-full"
              value={data.value[0]}
              onChange={(val) => {
                handleContentChange(0, val)
              }}
            />
        }
      </div>
      <div className={`flex gap-1 ml-2 ${data.type === 'rich' && 'flex-col'}`}>
        {
          showTypeChange && <Dropdown
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
            menu={{ items: menuItems, onClick: handleMenuClick }}
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