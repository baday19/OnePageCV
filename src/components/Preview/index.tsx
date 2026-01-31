import { PreviewRenderer as Renderer } from "../Renderer"
import type { ResumeSchema } from "../Renderer/config"

const Preview = ({
  schema
}: {
  schema: ResumeSchema
}) => {
  return (
    <div
      id="resume"
      className="w-[210mm] bg-white h-[297mm]"
      contentEditable
    >
      <Renderer schema={schema} />
    </div>
  )
}

export default Preview