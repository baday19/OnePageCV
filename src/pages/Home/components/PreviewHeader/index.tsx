import Input from "@/components/Input";
import { ArchiveBoxIcon, NewspaperIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";

interface PreviewHeaderProps {
  active: boolean;
  title: string;
  onTitleChange: (title: string) => void;
  onCreate: () => void;
  onExport: () => void;
  onStore: () => void;
  onClear: () => void;
}

const PreviewHeader = ({
  active = true,
  title = 'Untiled',
  onTitleChange,
  onCreate,
  onExport,
  onStore,
  onClear,
}: PreviewHeaderProps) => {


  return (
    <div className="print-hidden px-4 shadow flex bg-white h-16 items-center gap-1 justify-between">
      <div className="text-2xl font-bold flex items-center gap-1">
        {
          active
            ? <div
              className="flex items-center gap-3 text-base"
            >
              <NewspaperIcon className="w-6 h-6 text-blue-600" />
              <Input className="h-8 w-64 text-gray-700" value={title} onChange={(e) => onTitleChange(e.target.value)} placeholder="简历名称" />
            </div>
            : 'OnePageCV'
        }
      </div>
      <div className="flex gap-2">
        {
          active
            ? <>
              <button onClick={onStore} className="flex items-center cursor-pointer px-2 py-1 border border-gray-300 rounded-md text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors">
                <ArchiveBoxIcon className="w-4 h-4" />
                <div className="ml-2.5">保存简历</div>
              </button>
              <button onClick={onExport} className="flex items-center cursor-pointer px-2 py-1 border border-blue-500 rounded-md text-sm bg-blue-500 text-white hover:bg-blue-400 hover:border-blue-400 transition-colors">
                <NewspaperIcon className="w-4 h-4" />
                <div className="ml-2.5">导出PDF</div>
              </button>
              <button onClick={onClear} className="flex items-center cursor-pointer px-2 py-1 border border-red-500 rounded-md text-sm bg-red-500 text-white hover:bg-red-400 hover:border-red-400 transition-colors">
                <ArchiveBoxXMarkIcon className="w-4 h-4" />
                <div className="ml-2.5">清空简历</div>
              </button>
            </>
            : <button onClick={onCreate} className="flex items-center cursor-pointer px-2 py-1 border border-blue-500 rounded-md text-sm bg-blue-500 text-white hover:bg-blue-400 hover:border-blue-400 transition-colors">
              <NewspaperIcon className="w-4 h-4" />
              <div className="ml-2.5">创建简历</div>
            </button>
        }
      </div>
    </div>
  );
};

export default PreviewHeader;