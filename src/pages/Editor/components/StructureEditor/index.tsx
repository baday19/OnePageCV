import PanelHeader from "@/components/PanelHeader"
import { EditorRenderer as Renderer } from "@/components/Renderer"
import type { NodeSchema, ResumeData, ResumeSchema } from "@/components/Renderer/core"
import { getComponent, type ModuleType } from "@/config/template";
import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { Dropdown, type MenuProps } from "antd";

interface StructureEditorProps {
  resumeData: ResumeData;
  onChange: (schema: ResumeSchema) => void;
}

const StructureEditor = ({
  resumeData,
  onChange
}: StructureEditorProps) => {

  const defaultStyle = resumeData?.metadata.default ?? {};

  const handleNodeChange = (newNode: NodeSchema, action: 'add' | 'delete' | 'update' = 'update') => {
    let newResumeData: ResumeData;
    if (action === 'delete') {
      newResumeData = {
        ...resumeData!,
        children: resumeData!.children.filter(section => section.id !== newNode.id)
      }
    } else if (action === 'add') {
      newResumeData = {
        ...resumeData!,
        children: [...resumeData!.children, newNode]
      }
    } else {
      newResumeData = {
        ...resumeData!,
        children: resumeData!.children.map(section => {
          if (section.id === newNode.id) {
            return newNode
          }
          return section
        })
      }
    }

    onChange(newResumeData)
  }

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
    const newNode = getComponent(key, key === 'profile' ? defaultStyle.profile : defaultStyle.experience)
    handleNodeChange(newNode, 'add')
  }

  return (
    <div>
      <PanelHeader title="简历组件结构" desc="编辑您的简历各个部分的详细信息" />
      <div className="text-sm">
        <Renderer schema={resumeData} onNodeChange={handleNodeChange} />
      </div>
      {/* 添加组件 */}
      <div className="mt-6 pt-6 border-t-2 border-dashed border-gray-300">

      </div>
      <Dropdown menu={{ items: addItems, onClick: (e) => handleMenuClick(e.key as ModuleType) }} trigger={['click']}>
        <button
          className="flex items-center justify-center gap-3 w-full rounded-lg py-2 border-2 border-dashed border-gray-200 hover:border-gray-400 hover:bg-gray-100 transation-colors duration-300 text-sm"
        >
          <PlusCircleIcon className="w-5 h-5" />
          添加更多组件
        </button>
      </Dropdown>

      <div className="text-xs text-center mt-2 text-gray-500">点击查看所有可用组件</div>
    </div>
  )
}

export default StructureEditor