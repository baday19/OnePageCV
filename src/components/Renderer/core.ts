import * as CommonProfileModules from "./components/CommonProfileModule"
import { CommonExperienceModule0, CommonExperienceModule1, CommonExperienceModule0Editor, CommonExperienceModule1Editor } from "./components/CommonExperienceModule"


const componentRegistry = {
  commonProfileModule0: {
    preview: CommonProfileModules.CommonProfileModule0,
    editor: CommonProfileModules.CommonProfileModule0Editor,
  },
  commonProfileModule1: {
    preview: CommonProfileModules.CommonProfileModule1,
    editor: CommonProfileModules.CommonProfileModule1Editor,
  },
  commonProfileModule2: {
    preview: CommonProfileModules.CommonProfileModule2,
    editor: CommonProfileModules.CommonProfileModule2Editor,
  },
  commonProfileModule3: {
    preview: CommonProfileModules.CommonProfileModule3,
    editor: CommonProfileModules.CommonProfileModule3Editor,
  },
  commonProfileModule4: {
    preview: CommonProfileModules.CommonProfileModule4,
    editor: CommonProfileModules.CommonProfileModule4Editor,
  },
  commonProfileModule5: {
    preview: CommonProfileModules.CommonProfileModule5,
    editor: CommonProfileModules.CommonProfileModule5Editor,
  },
  commonProfileModule6: {
    preview: CommonProfileModules.CommonProfileModule6,
    editor: CommonProfileModules.CommonProfileModule6Editor,
  },
  commonProfileModule7: {
    preview: CommonProfileModules.CommonProfileModule7,
    editor: CommonProfileModules.CommonProfileModule7Editor,
  },
  commonExperienceModule0: {
    preview: CommonExperienceModule0,
    editor: CommonExperienceModule0Editor,
  },
  commonExperienceModule1: {
    preview: CommonExperienceModule1,
    editor: CommonExperienceModule1Editor,
  },
} as const



type NodeType = keyof typeof componentRegistry

interface NodeSchema {
  id: number;
  componentType: NodeType;
  props?: Record<string, any>;
}

type NodeChangeAction = 'delete' | 'up' | 'down' | 'add' | 'update';

// 暂时定义成列表结构，未来可能做成树形结构
interface ResumeSchema {
  id: number;
  metadata: {
    default: Record<string, NodeType>;
    [key: string]: any;
  };
  children: NodeSchema[];
}

type ResumeData = ResumeSchema | null

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

export type { NodeSchema, ResumeSchema, NodeType, ResumeData, NodeChangeAction }
