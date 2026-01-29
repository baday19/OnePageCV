import type { NodeSchema } from "./config"
import { previewComponentMap, editorComponentMap } from "./config"

export const PreviewRenderer = ({ schema }: { schema: NodeSchema }) => {
  if (!schema) {
    return null
  }
  const Component = previewComponentMap[schema.componentType]
  if (!Component) {
    console.warn(`Unknown component type: ${schema.componentType}`)
    return null
  }
  return (
    <Component {...schema.props}>
      {
        schema.children?.map(
          child => <PreviewRenderer schema={child} />
        )
      }
    </Component>
  )
}

export const EditorRenderer = ({ schema, onChange }: { schema: NodeSchema, onChange: (schema: NodeSchema) => void }) => {
  if (!schema) {
    return null
  }

  const Component = editorComponentMap[schema.componentType]
  if (!Component) {
    console.warn(`Unknown component type: ${schema.componentType}`)
    return null
  }
  return (
    <Component {...schema.props} onChange={onChange}>
      {
        schema.children?.map(
          child => <EditorRenderer schema={child} onChange={onChange} />
        )
      }
    </Component>
  )
}