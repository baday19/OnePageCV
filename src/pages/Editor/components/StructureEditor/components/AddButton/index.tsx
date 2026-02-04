import type { NodeSchema } from "@/components/Renderer/core";
import type { ModuleType } from "@/pages/Editor/template"
import type { UserInfoProps } from "@/types/user";
import { buildPresetPropsByUserInfo } from "@/utils/utils";
import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { Dropdown, type MenuProps } from "antd"

interface AddButtonProps {
  userInfo: UserInfoProps;
  defaultStyle: Record<string, any>;
  onAddItem: (node: NodeSchema) => void;
}

const AddButton = ({
  userInfo,
  defaultStyle = {},
  onAddItem,
}: AddButtonProps) => {

  const addItems: MenuProps['items'] = [
    {
      label: <div className="text-center">基本信息</div>,
      key: 'profile',
      disabled: !defaultStyle.profile,
    },
    {
      type: 'divider',
    },
    ...[{ name: '教育经历', key: 'education' }, { name: '工作经历', key: 'work' }, { name: '项目经历', key: 'project' }, { name: '专业技能', key: 'skill' }, { name: '自定义', key: 'custom' }].map(item => {
      return {
        label: <div className="text-center">{item.name}</div>,
        key: item.key,
        disabled: !defaultStyle.experience,
      }
    })

  ];

  const handleMenuClick = (key: ModuleType) => {
    // 构建对应的node，然后调用onAddItem
    // 根据profile构建不用模块的presetProps
    const presetProps = buildPresetPropsByUserInfo(key, userInfo)
    const node: NodeSchema = {
      id: Date.now(),
      componentType: key === 'profile' ? defaultStyle.profile : defaultStyle.experience,
      props: presetProps,
    }
    onAddItem(node)
  }
  return (
    <>
      <Dropdown menu={{ items: addItems, onClick: (e) => handleMenuClick(e.key as ModuleType) }} trigger={['click']}>
        <button
          className="flex items-center justify-center gap-3 w-full rounded-lg py-2 border-2 border-dashed border-gray-200 hover:border-gray-400 hover:bg-gray-100 transation-colors duration-300 text-sm"
        >
          <PlusCircleIcon className="w-5 h-5" />
          添加更多组件
        </button>
      </Dropdown>
      <div className="text-xs text-center mt-2 text-gray-500">点击查看所有可用组件</div>
    </>
  )
}

export default AddButton