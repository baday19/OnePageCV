import PanelHeader from "@/components/PanelHeader"
import { EditorRenderer as Renderer } from "@/components/Renderer"
import type { NodeSchema, ResumeData, ResumeSchema } from "@/components/Renderer/core"
import AddButton from "./components/AddButton";
import type { UserInfoProps } from "@/types/user";

interface StructureEditorProps {
  userInfo: UserInfoProps;
  resumeData: ResumeData;
  onChange: (schema: ResumeSchema) => void;
}

const StructureEditor = ({
  userInfo,
  resumeData,
  onChange
}: StructureEditorProps) => {

  const defaultStyle = resumeData?.metadata?.default || {};

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

  return (
    <div>
      <PanelHeader title="简历组件结构" desc="编辑您的简历各个部分的详细信息" />
      <div className="text-sm">
        <Renderer schema={resumeData} onNodeChange={handleNodeChange} />
      </div>
      {/* 添加组件 */}
      <div className="mt-6 pt-6 border-t-2 border-dashed border-gray-300">

      </div>
      <AddButton
        defaultStyle={defaultStyle}
        onAddItem={(node) => {
          handleNodeChange(node, 'add')
        }}
        userInfo={userInfo} />
    </div>
  )
}

export default StructureEditor