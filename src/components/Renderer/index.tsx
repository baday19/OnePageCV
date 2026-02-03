import type { NodeSchema, ResumeData } from "./core"
import { previewComponentMap, editorComponentMap } from "./core"

export const PreviewRenderer = ({ schema }: { schema: ResumeData }) => {
  if (!schema) {
    return null
  }

  return (
    <>
      {
        schema.children?.map(child => {
          const Component = previewComponentMap[child.componentType]
          if (!Component) {
            console.warn(`Unknown component type: ${child.componentType}`)
            return null
          }
          return <Component key={child.id} {...child.props} />
        })
      }
    </>
  )
}

export const EditorRenderer = ({ schema, onNodeChange }: { schema: ResumeData, onNodeChange: (schema: NodeSchema) => void }) => {

  if (!schema) {
    return null
  }

  return (
    <>
      {
        schema.children?.map(child => {
          const Component = editorComponentMap[child.componentType]
          if (!Component) {
            console.warn(`Unknown component type: ${child.componentType}`)
            return null
          }
          return <Component key={child.id} schema={child} onChange={onNodeChange} />
        })
      }
    </>
  )
}