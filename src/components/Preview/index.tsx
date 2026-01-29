import { PreviewRenderer as Renderer } from "../Renderer"
import type { NodeSchema } from "../Renderer/config"

const Preview = ({
  schema
}: {
  schema: NodeSchema
}) => {
  return (
    <div
      className="w-[210mm] bg-white h-[297mm]"
      contentEditable
    >
      <Renderer schema={schema} />
    </div>
  )
}

export default Preview