import { PreviewRenderer as Renderer } from "../../../../components/Renderer"
import type { ResumeData } from "../../../../components/Renderer/config"

const Preview = ({
  schema
}: {
  schema: ResumeData
}) => {
  return (
    <div
      id="resume"
      className="w-[210mm] bg-white h-[297mm]"
      contentEditable
      suppressContentEditableWarning
    >
      {
        schema
          ? <Renderer schema={schema} />
          : <div className="w-full h-full flex items-center justify-center">待创建简历...</div>
      }
    </div>
  )
}

export default Preview