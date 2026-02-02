import PanelHeader from "@/components/PanelHeader"
import { EditorRenderer as Renderer } from "@/components/Renderer"
import type { NodeSchema, ResumeSchema } from "@/components/Renderer/config"

interface StructureEditorProps {
  resumeData: ResumeSchema;
  onChange: (schema: ResumeSchema) => void;
}


const StructureEditor = ({
  resumeData,
  onChange
}: StructureEditorProps) => {

  const handleNodeChange = (newNode: NodeSchema) => {
    let newResumeData: ResumeSchema;
    if (newNode.__action === 'delete') {
      newResumeData = {
        ...resumeData,
        children: resumeData!.children.filter(section => section.id !== newNode.id)
      }
    } else {
      newResumeData = {
        ...resumeData,
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
    </div>
  )
}

export default StructureEditor