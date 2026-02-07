import { NewspaperIcon, TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { formatTimestamp } from "@/utils/utils";

interface ResumeCardProps {
  name: string;
  updateTime: number;
  onEdit: () => void;
  onDelete: () => void;
}

const ResumeCard = ({
  name,
  updateTime,
  onEdit,
  onDelete
}: ResumeCardProps) => {
  const cardClassName = "rounded-lg border-2 border-gray-200 p-4 mb-4 hover:border-blue-400 hover:shadow-lg transition-all duration-300 ease-in-out flex gap-4";
  const buttonClassName = "rounded-lg w-8 h-8 hover:bg-gray-100 transition-colors flex justify-center items-center";

  return <div className={cardClassName}>
    <div
      className="h-12 w-12 bg-blue-500 rounded-lg text-white flex items-center justify-center"
    >
      <NewspaperIcon className="h-7 w-7" />
    </div>
    <div
      className="flex-1 flex flex-col justify-between"
    >
      <div className="font-bold text-base">{name}</div>
      <div className="text-gray-500 text-xs">更新于 {formatTimestamp(updateTime)}</div>
    </div>
    <div
      className="flex gap-2"
    >
      <button onClick={onEdit} className={buttonClassName}>
        <PencilSquareIcon className="w-4 h-4" />
      </button>
      <button onClick={onDelete} className={buttonClassName}>
        <TrashIcon className="w-4 h-4" />
      </button>
    </div>
  </div>;
};


export default ResumeCard;