import type { TemplateProps } from "@/config/templates";
import { useState } from "react";

interface CardProps {
  name: string;
  picture: string;
  onOk: () => void;
  onCancel: () => void;
}
const Card = ({
  name,
  picture,
  onOk,
  onCancel,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cancelClassName = 'cursor-pointer border border-gray-300 rounded text-xs text-gray-800 hover:bg-gray-100 hover:text-black transition-colors h-7';

  const okClassName = 'cursor-pointer border border-blue-500 rounded text-xs bg-blue-500 text-white hover:bg-blue-400 hover:border-blue-400 transition-colors h-7';

  return (
    <div
      className="rounded-lg aspect-[210/297] overflow-hidden w-full relative hover:shadow hover:translate-y-[-3px] transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={picture} alt="简历模板" />
      {
        isHovered && <div className="absolute inset-0 bg-gray-500 opacity-30" />
      }
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white p-4 ${isHovered ? 'h-1/2' : ''}`}
      >
        {
          isHovered
            ? (
              <div
                className="h-full flex flex-col gap-2 justify-between"
              >
                <div
                  className="mb-2 overflow-hidden text-ellipsis line-clamp-2"
                >
                  {name}
                </div>
                <div className="flex gap-2 flex-col">
                  <button className={`${okClassName}`} onClick={onOk}>应用默认数据</button>
                  <button className={`${cancelClassName}`} onClick={onCancel}>仅应用模板样式</button>
                </div>
              </div>
            )
            : <div className="truncate w-full text-sm">{name}</div>
        }

      </div>
    </div>
  );
};

interface PresetPanelProps {
  templates: TemplateProps[];
  onApplyTemplate: (template: TemplateProps, isOnlyStyle: boolean) => void;
}

const PresetPanel = ({
  templates,
  onApplyTemplate,
}: PresetPanelProps) => {

  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-4 bg-gray-100 p-4 rounded-lg"
    >
      {
        templates.map((item, index) => (
          <Card name={item.title} picture={item.picture} key={index} onOk={() => onApplyTemplate(item, false)} onCancel={() => onApplyTemplate(item, true)} />
        ))
      }
    </div>
  );
};

export default PresetPanel;