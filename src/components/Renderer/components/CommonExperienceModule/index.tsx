import EditorCard from "@/components/EditorCard";
import { CommonExperienceLine, CommonEditorInput } from "../CommonExperienceLine";
import type { NodeSchema } from "../../config";
// import CommonEditorInput from "../CommonEditorInput";

interface OptionProps {
  type: 0 | 1;
}

interface CommonExperienceModuleProps {
  title: string;
  option: OptionProps;
  items: { type: string; value: string[] }[];
}

const CommonExperienceModule = ({ title, option = { type: 0 }, items }: CommonExperienceModuleProps) => {
  const { type } = option;

  const typeStyles = type === 0 ? {
    backgroundColor: 'var(--border-color)',
    borderLeft: '2mm solid var(--theme-color)',
    paddingLeft: '4mm'
  } : {
    borderBottom: '1px solid var(--theme-color)'
  };

  return (
    <div
      className="px-[8mm]"
      style={{ marginTop: 'calc(var(--paper-line-spacing) + 1mm)' }}
    >
      <div
        className="font-bold flex items-center"
        style={{
          fontSize: 'var(--medium-font-size)',
          height: 'calc(var(--paper-line-height) + 3mm)',
          color: 'var(--theme-color)',
          marginBottom: 'var(--paper-line-spacing)',
          ...typeStyles
        }}
      >{title}</div>
      {
        items.map((item: Record<string, any>, index: number) => {
          return (
            <CommonExperienceLine key={index} value={item.value} type={item.type} />
          )
        })
      }
    </div>
  )
}


interface CommonExperienceModuleEditorProps {
  schema: NodeSchema;
  onChange: (newNode: NodeSchema | null) => void;
}

const CommonExperienceModuleEditor = ({
  schema,
  onChange
}: CommonExperienceModuleEditorProps) => {

  const handleTitleChange = (newTitle: string) => {
    const newNode = {
      ...schema,
      props: {
        ...schema.props,
        title: newTitle
      }
    };
    onChange(newNode);
  }
  const { items: rows } = schema.props || { items: [] };

  const changeItems = (newRows: string[][]) => {
    const newNode = {
      ...schema,
      props: {
        ...schema.props,
        items: newRows
      }
    };
    onChange(newNode);
  }

  const handleRowChange = (index: number, newItem: Record<string, any>) => {
    const newRows = rows.map((row: string[], i: number) => {
      if (i === index) {
        return newItem;
      }
      return row;
    });
    changeItems(newRows);
  }



  const handleDeleteRow = (index: number) => {
    const newRows = rows.filter((_: string[], i: number) => i !== index);
    changeItems(newRows);
  }

  const handleMoveRow = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= rows.length) {
      return;
    }
    const newRows = [...rows];
    const [movedRow] = newRows.splice(fromIndex, 1);
    newRows.splice(toIndex, 0, movedRow);
    changeItems(newRows);
  }

  const handleAddRow = () => {
    const newRows = [...rows, { type: 'single', value: [''] }];
    changeItems(newRows);
  }

  const handleDelete = () => {
    onChange({
      ...schema,
      __action: 'delete'
    })
  }

  return (
    <EditorCard
      title={schema.props!.title}
      preset={true}
      onChange={handleTitleChange}
      onAddLine={handleAddRow}
      onDelete={handleDelete}
    >
      {
        rows.map((item: Record<string, any>, index: number) => {
          return (
            <div className="mt-3" key={index}>
              <CommonEditorInput
                data={item}
                onChange={(newItem) => handleRowChange(index, newItem)}
                onDelete={() => handleDeleteRow(index)}
                onMoveUp={() => handleMoveRow(index, index - 1)}
                onMoveDown={() => handleMoveRow(index, index + 1)}
              />
            </div>
          )
        })
      }
    </EditorCard>
  )
}

export {
  CommonExperienceModule,
  CommonExperienceModuleEditor
};