import { matchLogoPreset } from "@/components/EditorCard/preset";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useMemo } from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  showDelete?: boolean;
  onDelete?: () => void;
}

const Card = ({
  title,
  children,
  showDelete = false,
  onDelete,
}: CardProps) => {

  return (
    <section
      className="mt-4 rounded-lg border border-gray-300 px-4 pt-3 pb-4"
    >
      <div
        className="flex items-center font-medium text-md mb-2 h-8"
      >
        <div>{title}</div>
        {
          showDelete && <button onClick={onDelete} className={"ml-auto flex items-center rounded-lg px-2 text-red-500 h-8 hover:bg-gray-100 transition-colors"}>
            <TrashIcon className="w-4 h-4" />
          </button>
        }
      </div>
      <div
        className="text-sm"
      >
        {children}
      </div>
    </section>
  );
};

export default Card;