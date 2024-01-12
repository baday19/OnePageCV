import "./index.less"
import { BaseInfoEditor } from "./components/base_info_editor";
import { ExperiencesEditor } from "./components/experiences_editor";
import { ConfigEditor } from "./components/config_editor";
import { ToolBox } from "./components/tool_box";



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
  onConfigChange: (config: any) => void;
  onStore: () => void;
  onImport: (e:any) => void;
}
export const Editor = ({
  onBaseInfoChange,
  onExperiencesChange,
  baseInfo,
  experiences,
  onConfigChange,
  config,
  onStore,
  onImport
}: EditorProps) => {

  return (
    <div id='resume0-editor'>
      <ToolBox onStore={onStore} onImport={onImport} />
      <ConfigEditor config={config} onSubmit={onConfigChange} />
      <BaseInfoEditor onBaseInfoSubmit={onBaseInfoChange} baseInfo={baseInfo} />
      <ExperiencesEditor onExperiencesSubmit={onExperiencesChange} experiences={experiences} />
    </div>
  )
}