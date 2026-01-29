import CommonExperienceLine from "./components/CommonExperienceLine"
import {CommonProfileModule, CommonProfileModuleEditor} from "./components/CommonProfileModule"
import {CommonExperienceModule, CommonExperienceModuleEditor} from "./components/CommonExperienceModule"

const ResumeRoot = ({
  children
}: {
  children?: React.ReactNode
}) => {
  return (
    <div
      id='resume-root'
    >
      {children}
    </div>
  )
}

const componentRegistry = {
  resume: {
    preview: ResumeRoot,
    editor: ResumeRoot,
  },
  commonProfileModule: {
    preview: CommonProfileModule,
    editor: CommonProfileModuleEditor,
  },
  commonExperienceModule: {
    preview: CommonExperienceModule,
    editor: CommonExperienceModuleEditor,
  },
} as const



type NodeType = keyof typeof componentRegistry

interface NodeSchema {
  id: number;
  componentType: NodeType;
  props?: Record<string, any>;
  children?: NodeSchema[];
}

const previewComponentMap = Object.fromEntries(
  Object.entries(componentRegistry).map(([key, value]) => [key, value.preview])
) as Record<NodeType, React.ComponentType<any>>

const editorComponentMap = Object.fromEntries(
  Object.entries(componentRegistry).map(([key, value]) => [key, value.editor])
) as Record<NodeType, React.ComponentType<any>>


export {
  previewComponentMap,
  editorComponentMap
}

export type { NodeSchema, NodeType }
