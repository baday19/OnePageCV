import EditorCard from "@/components/EditorCard";
import CommonExperienceLine from "../CommonExperienceLine";
import type { NodeSchema } from "../../config";
import CommonEditorInput from "../CommonEditorInput";

interface OptionProps {
  type: 0 | 1;
}

interface CommonExperienceModuleProps {
  title: string;
  option: OptionProps;
  value: string[][];
}

const CommonExperienceModule = ({ title, option = { type: 0 }, value }: CommonExperienceModuleProps) => {
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
        value.map((item: string[], index: number) => {
          return (
            <CommonExperienceLine key={index} value={item} />
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
  const { value: rows } = schema.props || { value: [] };

  const changeValue = (newRows: string[][]) => {
    const newNode = {
      ...schema,
      props: {
        ...schema.props,
        value: newRows
      }
    };
    onChange(newNode);
  }

  const handleRowChange = (index: number, newValues: string[]) => {
    const newRows = rows.map((row: string[], i: number) => {
      if (i === index) {
        return newValues;
      }
      return row;
    });
    changeValue(newRows);
  }



  const handleDeleteRow = (index: number) => {
    const newRows = rows.filter((_: string[], i: number) => i !== index);
    changeValue(newRows);
  }

  const handleMoveRow = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= rows.length) {
      return;
    }
    const newRows = [...rows];
    const [movedRow] = newRows.splice(fromIndex, 1);
    newRows.splice(toIndex, 0, movedRow);
    changeValue(newRows);
  }

  const handleAddRow = () => {
    const newRows = [...rows, ['']];
    changeValue(newRows);
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
        rows.map((item: string[], index: number) => {
          return (
            <div className="mt-3" key={index}>
              <CommonEditorInput
                values={item}
                onChange={(newValues) => handleRowChange(index, newValues)}
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