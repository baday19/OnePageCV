import { useMemo } from "react";
import { matchLogoPreset } from "@/components/EditorCard/preset";

import { PlusCircleIcon } from "@heroicons/react/24/outline";

interface SectionTitleProps {
  title: string;
  icon: React.ComponentType<{ className: string }>;
  iconColor: string;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
}

const SectionTitle = ({
  title,
  icon: Icon,
  iconColor,
  cancelText,
  okText,
  onOk,
  onCancel
}: SectionTitleProps) => {

  return (
    <div className="flex border-b-2 pb-2 border-gray-200">
      <div className="flex items-center gap-2 text-lg font-bold">
        <div className={`w-8 h-8 text-${iconColor}-600 flex items-center justify-center`}>
          <Icon className="w-5 h-5" />
        </div>
        {title}
      </div>
      <div className="flex gap-2 ml-auto">
        {
          onCancel && <button onClick={onCancel} className="flex items-center cursor-pointer px-2 py-1 border border-gray-300 rounded-md text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors">
            {/* <PlusCircleIcon className="w-4 h-4" /> */}
            <div>{cancelText}</div>
          </button>
        }
        {
          onOk && <button onClick={onOk} className="flex items-center cursor-pointer px-2 py-1 border border-blue-500 rounded-md text-sm bg-blue-500 text-white hover:bg-blue-400 hover:border-blue-400 transition-colors">
            <PlusCircleIcon className="w-4 h-4" />
            <div className="ml-2.5">{okText}</div>
          </button>
        }
      </div>
    </div>
  );
};

interface SectionContainerProps {
  title: string;
  onAdd?: () => void;
  onInit?: () => void;
  children: React.ReactNode;
}

const SectionContainer = ({
  title,
  onAdd,
  onInit,
  children,
}: SectionContainerProps) => {

  const preset = useMemo(() => matchLogoPreset(title), [title]);
  const Icon = preset.icon;

  return (
    <section>
      <SectionTitle title={title} icon={Icon} iconColor={preset.iconColor} okText={`添加${title}`} onOk={onAdd} cancelText="放弃更改" onCancel={onInit} />
      {
        children || <div className="text-gray-300 mt-4 border-2 rounded-lg border-dashed border-gray-200 p-4 flex flex-col items-center">
          <div className="text-gray-500">还没有添加{title}</div>
        </div>
      }
    </section>
  );
};

export default SectionContainer;