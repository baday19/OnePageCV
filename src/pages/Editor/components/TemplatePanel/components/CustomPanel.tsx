import BlockTitle from "@/components/BlockTitle";
import type { NodeType } from "@/components/Renderer/core";
import { experienceStyleList, profileStyleList } from "../../../../../config/customTemplate";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import type { CssNamedColor } from "@/components/EditorCard/preset";

interface CardProps {
  title: string;
  picture: string;
  active: boolean;
  color: CssNamedColor;
  onClick: () => void;
}

const Card = ({
  title,
  picture,
  active,
  color,
  onClick,
}: CardProps) => {
  const imgCardClassName = "w-full overflow-hidden aspect-[5/2]";

  return (
    <div
      className={`p-3 border-2 rounded-lg hover:shadow hover:translate-y-[-3px] transition-transform duration-300 ${active ? `border-${color}-500 bg-${color}-50` : `border-gray-200`}`}
      onClick={onClick}
    >
      <div className="mb-2 flex justify-between h-5">
        <div>{title}</div>
        {active && <CheckCircleIcon className={`w-5 h-5 text-${color}-600`} />}
      </div>
      <div className={`${imgCardClassName} border border-gray-100`}>
        <img
          className="w-full h-full object-cover cursor-pointer"
          src={picture} alt={title} />
      </div>
    </div>
  );
};


interface CustomPanelProps {
  profileType: NodeType | null;
  experienceType: NodeType | null;
  onChangeProfile: (type: NodeType) => void;
  onChangeExperience: (type: NodeType) => void;
}

const CustomPanel = ({
  profileType,
  experienceType,
  onChangeProfile,
  onChangeExperience,
}: CustomPanelProps) => {
  const containerClassName = "grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-4";
  return (
    <div>
      <div className="mb-4">
        {/* 基本信息 */}
        <BlockTitle text="基本信息" className="mb-3" iconClassName="bg-blue-500" />
        <div
          className={containerClassName}
        >
          {
            profileStyleList.map((item, index) => <Card color="blue" key={index} title={item.title} picture={item.picture} active={profileType === item.componentType} onClick={() => onChangeProfile(item.componentType)} />)
          }
        </div>
      </div>
      <div className="mb-4">
        {/* 模块样式 */}
        <BlockTitle text="经历模块" className="mb-3" iconClassName="bg-purple-500" />
        <div
          className={containerClassName}
        >
          {
            experienceStyleList.map((item, index) => <Card color="purple" key={index} title={item.title} picture={item.picture} active={experienceType === item.componentType} onClick={() => onChangeExperience(item.componentType)} />)
          }
        </div>
      </div>
    </div>
  );
};

export default CustomPanel;