import EditorCard from "@/components/EditorCard";
import type { NodeChangeAction, NodeSchema } from "../../core";
import { CommonEditorInput } from "../CommonExperienceLine";
import Input from "@/components/Input";
import { Upload } from "antd";
import type { RcFile } from "antd/es/upload/interface";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import Photo from '@/assets/images/photo.png';
import SchoolIcon from '@/assets/images/logo.jpg';

interface OptionProps {
  photoPosition?: 'left' | 'right';
  valuePosition?: 'left' | 'center' | 'right';
  hasSchoolIcon?: boolean;
  hasPhoto?: boolean;
  hasLine?: boolean;
};

interface CommonProfileModuleProps {
  name?: string;
  schoolIcon?: string;
  photo?: string;
  items?: { type: string, value: string[] }[];
  option: OptionProps;
}

const CommonProfileModule = ({
  name,
  schoolIcon = SchoolIcon,
  photo = Photo,
  items,
  option = {
    photoPosition: 'right',
    valuePosition: 'center',
    hasSchoolIcon: false,
    hasPhoto: true,
    hasLine: true,
  }
}: CommonProfileModuleProps) => {

  const rows = items || [];

  const valuePositionClass = option.valuePosition === 'left' ? 'items-start' : (option.valuePosition === 'center' ? 'items-center' : 'items-end');

  const schoolIconElement = () => {
    if (option.valuePosition === 'center') {
      return (
        <div
          className="h-[13mm]"
          style={{
            width: 'var(--photo-width)',
          }}
        >
          {option.hasSchoolIcon && schoolIcon && <img
            className="h-full max-w-none"
            src={schoolIcon} alt="校徽" />}
        </div>
      );
    } else if (option.hasSchoolIcon) {
      return (
        <div
          className="h-[13mm]"
          style={{
            width: 'var(--photo-width)',
          }}
        >
          {schoolIcon && <img
            className="h-full max-w-none"
            src={schoolIcon} alt="校徽" />}
        </div>
      );
    }
  };

  const photoElement = () => {
    // value center时 需要校徽的div，不显示img
    if (option.valuePosition === 'center') {
      return (
        <div
          className="overflow-hidden"
          style={{
            width: 'var(--photo-width)',
            height: option.hasPhoto ? 'var(--photo-height)' : 'auto',
          }}
        >
          {
            option.hasPhoto && (
              photo
                ? <img className="w-full" src={photo} alt="照片" />
                : <div className="w-full h-full flex items-center justify-center text-white" style={{ backgroundColor: 'var(--theme-color)' }}>照片</div>
            )
          }
        </div>
      );
    } else if (option.hasPhoto) {
      return (
        <div
          className="overflow-hidden"
          style={{
            width: 'var(--photo-width)',
            height: 'var(--photo-height)',
          }}
        >
          {
            photo
              ? <img className="w-full" src={photo} alt="照片" />
              : <div className="w-full h-full flex items-center justify-center text-white" style={{ backgroundColor: 'var(--theme-color)' }}>照片</div>
          }
        </div>
      );
    }
  };
  
  return (
    <div
      className="mb-[8mm]"
    >
      {/* 顶部线 */}
      {
        option.hasLine && <div
          className="h-[5mm] w-full"
          style={{
            backgroundColor: 'var(--theme-color)'
          }}
        />
      }
      {/* 个人信息区域 */}
      <div
        className={`pt-[8mm] px-[8mm] gap-[8mm] flex ${option.photoPosition === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
      >
        {/* 校徽 */}
        {schoolIconElement()}
        {/* 文字信息 */}
        <div
          className={`flex-1 flex flex-col ${valuePositionClass}`}
        >
          <div
            className="font-bold"
            style={{
              fontSize: 'var(--large-font-size)',
              lineHeight: 'var(--paper-line-height)',
              marginBottom: 'calc(var(--paper-line-spacing) + .2mm)',
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
                }}
                dangerouslySetInnerHTML={{ __html: item.value }}
              />
            ))
          }
        </div>
        {/* 头像 */}
        {photoElement()}
      </div>

    </div>
  );
};

interface CommonProfileModuleEditorProps {
  schema: NodeSchema;
  option: OptionProps;
  onChange: (newNode: NodeSchema, action: NodeChangeAction) => void;
}

const CommonProfileModuleEditor = ({
  schema,
  option,
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
        option.hasPhoto && <div className="mt-3">
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
        option.hasSchoolIcon && <div className="mt-3">
          <Upload name="file" beforeUpload={(file: RcFile) => {
            const fileData = URL.createObjectURL(file);
            changeProps('schoolIcon', fileData);
            return false;
          }}
            listType="picture"
            maxCount={1} onRemove={() => {
              changeProps('schoolIcon', '');
            }}>
            <button className="flex items-center cursor-pointer px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors">
              <ArrowUpTrayIcon className="w-4 h-4" />
              <div className="ml-2.5">上传校徽</div>
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


const createCommonProfileModule = (option: OptionProps) => {
  const Module = (props: Omit<CommonProfileModuleProps, 'option'>) => (
    <CommonProfileModule {...props} option={option} />
  );

  const Editor = (props: Omit<CommonProfileModuleEditorProps, 'option'>) => (
    <CommonProfileModuleEditor {...props} option={option} />
  );

  return { Module, Editor };
};

const option0: OptionProps = {
  hasSchoolIcon: true,
  hasPhoto: true,
  valuePosition: 'center',
  photoPosition: 'right',
  hasLine: true
};

const option1: OptionProps = {
  hasSchoolIcon: false,
  hasPhoto: false,
  valuePosition: 'center',
  photoPosition: 'right',
  hasLine: true
};

const option2: OptionProps = {
  hasSchoolIcon: false,
  hasPhoto: true,
  valuePosition: 'left',
  photoPosition: 'right',
  hasLine: true
};

const option3: OptionProps = {
  hasSchoolIcon: false,
  hasPhoto: true,
  valuePosition: 'left',
  photoPosition: 'left',
  hasLine: true
};

const option4: OptionProps = {
  hasSchoolIcon: true,
  hasPhoto: true,
  valuePosition: 'center',
  photoPosition: 'right',
  hasLine: false
};

const option5: OptionProps = {
  hasSchoolIcon: false,
  hasPhoto: false,
  valuePosition: 'center',
  photoPosition: 'right',
  hasLine: false
};

const option6: OptionProps = {
  hasSchoolIcon: false,
  hasPhoto: true,
  valuePosition: 'left',
  photoPosition: 'right',
  hasLine: false
};

const option7: OptionProps = {
  hasSchoolIcon: false,
  hasPhoto: true,
  valuePosition: 'left',
  photoPosition: 'left',
  hasLine: false
};

const {
  Module: CommonProfileModule0,
  Editor: CommonProfileModule0Editor,
} = createCommonProfileModule(option0);

const {
  Module: CommonProfileModule1,
  Editor: CommonProfileModule1Editor,
} = createCommonProfileModule(option1);

const {
  Module: CommonProfileModule2,
  Editor: CommonProfileModule2Editor,
} = createCommonProfileModule(option2);

const {
  Module: CommonProfileModule3,
  Editor: CommonProfileModule3Editor,
} = createCommonProfileModule(option3);

const {
  Module: CommonProfileModule4,
  Editor: CommonProfileModule4Editor,
} = createCommonProfileModule(option4);

const {
  Module: CommonProfileModule5,
  Editor: CommonProfileModule5Editor,
} = createCommonProfileModule(option5);

const {
  Module: CommonProfileModule6,
  Editor: CommonProfileModule6Editor,
} = createCommonProfileModule(option6);

const {
  Module: CommonProfileModule7,
  Editor: CommonProfileModule7Editor,
} = createCommonProfileModule(option7);

export {
  CommonProfileModule0,
  CommonProfileModule1,
  CommonProfileModule0Editor,
  CommonProfileModule1Editor,
  CommonProfileModule2,
  CommonProfileModule2Editor,
  CommonProfileModule3,
  CommonProfileModule3Editor,
  CommonProfileModule4,
  CommonProfileModule4Editor,
  CommonProfileModule5,
  CommonProfileModule5Editor,
  CommonProfileModule6,
  CommonProfileModule6Editor,
  CommonProfileModule7,
  CommonProfileModule7Editor,
};