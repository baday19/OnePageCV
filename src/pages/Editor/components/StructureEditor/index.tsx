import PanelHeader from "@/components/PanelHeader"
import { EditorRenderer as Renderer } from "@/components/Renderer"
import type { NodeSchema } from "@/components/Renderer/config"

interface StructureEditorProps {
  resumeData: NodeSchema;
  onChange: (schema: NodeSchema) => void;
}

const items = [
  {
    key: '1',
    label: '单列行',
  },
  {
    key: '2',
    label: '双列行',
  },
  {
    key: '3',
    label: '三列行',
  },
  {
    key: '4',
    label: '富文本',
  },
];

const StructureEditor = ({
  resumeData,
  onChange
}: StructureEditorProps) => {
  return (
    <div>
      <PanelHeader title="简历组件结构" desc="编辑您的简历各个部分的详细信息" />
      <div className="text-sm">
        <Renderer schema={resumeData} onChange={onChange} />
      </div>
    </div>
  )
}

export default StructureEditor