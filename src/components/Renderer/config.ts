import {CommonProfileModule, CommonProfileModuleEditor} from "./components/CommonProfileModule"
import {CommonExperienceModule, CommonExperienceModuleEditor} from "./components/CommonExperienceModule"


const componentRegistry = {
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
  __action?: 'delete' | 'up' | 'down';
}

// 暂时定义成列表结构，未来可能做成树形结构
interface ResumeSchema {
  id: number;
  metadata?: Record<string, any>;
  children: NodeSchema[];
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

export type { NodeSchema, ResumeSchema, NodeType }
