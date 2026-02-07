import { PreviewRenderer as Renderer } from "../../../../components/Renderer";
import type { ResumeSchema } from "../../../../components/Renderer/core";

const Preview = ({
  schema
}: {
  schema: ResumeSchema
}) => {
  return (
    <div
      id="resume"
      className="w-[210mm] bg-white h-[297mm] overflow-hidden"
      contentEditable
      suppressContentEditableWarning
    >
      <Renderer schema={schema} />
    </div>
  );
};

export default Preview;
