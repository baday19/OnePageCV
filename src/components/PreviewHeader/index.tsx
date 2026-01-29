import { ArchiveBoxIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

interface PreviewHeaderProps {
  onExport: () => void;
  onStore: () => void;
}

const PreviewHeader = ({
  onExport,
  onStore,
}: PreviewHeaderProps) => {
  return (
    <div className="print-hidden px-4 shadow flex bg-white h-16 items-center gap-1 justify-between">
      <div className="text-2xl font-bold">简历预览</div>
      <div className="flex gap-2">
        <button onClick={onStore} className="flex items-center cursor-pointer px-2 py-1 border border-gray-300 rounded-md text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors">
          <ArchiveBoxIcon className="w-4 h-4" />
          <div className="ml-2.5">保存简历</div>
        </button>
        <button onClick={onExport} className="flex items-center cursor-pointer px-2 py-1 border border-blue-500 rounded-md text-sm bg-blue-500 text-white hover:bg-blue-400 hover:border-blue-400 transition-colors">
          <ArrowDownTrayIcon className="w-4 h-4" />
          <div className="ml-2.5">导出PDF</div>
        </button>
      </div>
    </div>
  )
}

export default PreviewHeader