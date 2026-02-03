import { PreviewRenderer as Renderer } from "../../../../components/Renderer"
import type { ResumeData } from "../../../../components/Renderer/core"

const Preview = ({
  schema
}: {
  schema: ResumeData
}) => {
  return (
    <div
      id="resume"
      className="w-[210mm] bg-white h-[297mm] overflow-hidden"
      contentEditable
      suppressContentEditableWarning
    >
      {
        schema
          ? (schema.children.length !== 0 ? <Renderer schema={schema} /> : <div className="w-full h-full flex items-center justify-center">未添加经历: 前往[简历编辑]-[简历结构]中添加组件</div>)
          : <div className="w-full h-full flex items-center justify-center">未创建简历: 前往[简历编辑]-[简历模板]中创建简历</div>
      }
    </div>
  )
}

export default Preview
