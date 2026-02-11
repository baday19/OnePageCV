import EditorCard from "@/components/EditorCard";
import { CommonEditorInput } from "../CommonExperienceLine";
import Input from "@/components/Input";
import { Upload } from "antd";
import type { RcFile } from "antd/es/upload/interface";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import type { CommonProfileModuleEditorProps, CommonProfileModuleProps } from "../CommonProfileModule";


const CircleProfileModule = ({
  name,
  photo,
  items,
}: CommonProfileModuleProps) => {

  const rows = items || [];

  return (
    <div
      className="my-[8mm] flex flex-col items-center justify-center relative"
    >
      <div
        className="overflow-hidden rounded-full mb-[3mm] z-1"
        style={{
          width: 'var(--photo-width)',
          height: 'var(--photo-width)',
        }}
      >
        {
          photo
            ? <img className="w-full" src={photo} alt="照片" />
            : <div className="w-full h-full flex items-center justify-center text-black" style={{ backgroundColor: 'var(--border-color)' }}>照片</div>
        }
      </div>
      <div
        className="font-bold"
        style={{
          fontSize: 'var(--large-font-size)',
          lineHeight: 'var(--paper-line-height)',
          marginTop: 'calc(var(--paper-line-spacing) + .2mm)',
          marginBottom: 'calc(var(--paper-line-spacing) + .4mm)',
        }}
      >
        {name}
      </div>
      {
        rows.map((item: Record<string, any>, index: number) => (
          <div
            className="a-reset"
            key={index}
            style={{
              fontSize: 'var(--small-font-size)',
              lineHeight: 'calc(var(--paper-line-height) - 1.2mm)',
              marginTop: 'calc(var(--paper-line-spacing) + .2mm)',
            }}
            dangerouslySetInnerHTML={{ __html: item.value }}
          />
        ))
      }
      <div 
        className="absolute bg-blue-500 top-[-1082mm] rounded-full w-[1100mm] h-[1100mm]"
        style={{
          backgroundColor: 'var(--theme-color)'
        }}
      />
    </div>
  );
};


const CircleProfileModuleEditor = ({
  schema,
  onChange
}: CommonProfileModuleEditorProps) => {

  const { name } = schema.props || {};

  const changeProps = (key: string, value: string) => {
    const newNode = {
      ...schema,
      props: {
        ...schema.props,
        [key]: value
      }
    };
    onChange(newNode, 'update');
  };


  const { items: rows } = schema.props || { items: [] };

  const changeItems = (newRows: string[][]) => {
    const newNode = {
      ...schema,
      props: {
        ...schema.props,
        items: newRows
      }
    };
    onChange(newNode, 'update');
  };

  const handleRowChange = (index: number, newItem: Record<string, any>) => {
    const newRows = rows.map((row: string[], i: number) => {
      if (i === index) {
        return newItem;
      }
      return row;
    });
    changeItems(newRows);
  };

  const handleDeleteRow = (index: number) => {
    const newRows = rows.filter((_: string[], i: number) => i !== index);
    changeItems(newRows);
  };

  const handleMoveRow = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= rows.length) {
      return;
    }
    const newRows = [...rows];
    const [movedRow] = newRows.splice(fromIndex, 1);
    newRows.splice(toIndex, 0, movedRow);
    changeItems(newRows);
  };

  const handleAddRow = (index: number) => {
    const newRow = { type: 'single', value: [''] };
    const newRows = [...rows];
    if (typeof index === 'number') {
      newRows.splice(index, 0, newRow);
    } else {
      newRows.push(newRow);
    }
    changeItems(newRows);
  };

  const handleDelete = () => {
    onChange({
      ...schema,
    }, 'delete');
  };

  return (
    <EditorCard
      title={'基本信息'}
      preset={true}
      onAddLine={handleAddRow}
      onDelete={handleDelete}
      showEdit={false}
      showUp={true}
      onMoveUp={() => onChange(schema, 'up')}
      showDown={true}
      onMoveDown={() => onChange(schema, 'down')}
    >
      <div className="mt-3">
        <Input className="h-8 w-full" value={name} onChange={(e) => changeProps('name', e.target.value)} />
      </div>
      {
        <div className="mt-3">
          <Upload name="file" beforeUpload={(file: RcFile) => {
            const fileData = URL.createObjectURL(file);
            changeProps('photo', fileData);
            return false;
          }}
            listType="picture"
            maxCount={1} onRemove={() => {
              changeProps('photo', '');
            }}>
            <button className="flex items-center cursor-pointer px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors">
              <ArrowUpTrayIcon className="w-4 h-4" />
              <div className="ml-2.5">上传照片</div>
            </button>
          </Upload>
        </div>
      }
      {
        rows.map((item: Record<string, any>, index: number) => {
          return (
            <div className="mt-3" key={index}>
              <CommonEditorInput
                data={item}
                showTypeChange={false}
                onAdd={() => handleAddRow(index)}
                onChange={(newItem) => handleRowChange(index, newItem)}
                onDelete={() => handleDeleteRow(index)}
                onMoveUp={() => handleMoveRow(index, index - 1)}
                onMoveDown={() => handleMoveRow(index, index + 1)}
              />
            </div>
          );
        })
      }
    </EditorCard>
  );
};



export {
  CircleProfileModule,
  CircleProfileModuleEditor,
};