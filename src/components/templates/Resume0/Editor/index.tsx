import "./index.less"
import { BaseInfoEditor } from "./base_info_editor";
import { ExperiencesEditor } from "./experiences_editor";
import { ConfigEditor } from "./config_editor";



interface EditorProps {
  onBaseInfoChange: (baseInfo: any) => void;
  onExperiencesChange: (experences: any) => void;
  baseInfo: {
    name: string;
    infoList: string[];
    photo: string;
    schoolLogo: string;
  };
  experiences: any[];
  config: any;
  onConfigChange: (config:any) => void;
}
export const Editor = ({
  onBaseInfoChange,
  onExperiencesChange,
  baseInfo,
  experiences,
  onConfigChange,
  config,
}: EditorProps) => {

  return (
    <div id='resume0-editor'>
      <ConfigEditor hasPhoto={config.hasPhoto} isLeft={config.isLeft} isHeaderShow={config.isHeaderShow} titleType={config.titleType} onSubmit={onConfigChange} />
      <BaseInfoEditor onBaseInfoSubmit={onBaseInfoChange} baseInfo={baseInfo} />
      <ExperiencesEditor onExperiencesSubmit={onExperiencesChange} experiences={experiences} />
    </div>
  )
}