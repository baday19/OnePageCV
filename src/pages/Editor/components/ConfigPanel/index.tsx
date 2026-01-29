import PanelHeader from "@/components/PanelHeader"
import Input from "@/components/Input";
import type { ConfigDataProps } from "@/utils/types";
import { ColorPicker, Slider } from "antd"

interface ConfigPanelProps {
  configData: ConfigDataProps;
  onChange: (newConfig: ConfigDataProps) => void;
}


const ConfigPanel = ({
  configData,
  onChange
}: ConfigPanelProps) => {
  const { themeColor, borderColor, lineHeight, lineSpacing } = configData

  const setThemeColor = (newColor: string) => {
    onChange({ ...configData, themeColor: newColor })
  }

  const setBorderColor = (newColor: string) => {
    onChange({ ...configData, borderColor: newColor })
  }

  const setLineHeight = (newLineHeight: number) => {
    onChange({ ...configData, lineHeight: newLineHeight })
  }

  const setLineSpacing = (newLineSpacing: number) => {
    onChange({ ...configData, lineSpacing: newLineSpacing })
  }

  return (
    <div>
      <PanelHeader title="简历参数配置" desc="配置您简历的颜色和行距等样式" />
      <div className="text-sm">
        {/* 主题色选择 */}
        <div className="mt-4">
          <div className="mb-2">主题色</div>
          <div className="flex items-center">
            <ColorPicker defaultValue={'#4183FF'} value={themeColor} onChange={(value) => {
              setThemeColor(value.toHexString())
            }} />
            <Input
              className="flex-1 h-8 ml-2"
              type="text" placeholder="输入主题色" value={themeColor} />
          </div>
        </div>
        {/* 副色选择 */}
        <div className="mt-4">
          <div className="mb-2">副色</div>
          <div className="flex items-center">
            <ColorPicker defaultValue={'#4183FF'} value={borderColor} onChange={(value) => {
              setBorderColor(value.toHexString())
            }} />
            <Input
              className="h-8 ml-2 flex-1"
              type="text" placeholder="输入副色" value={borderColor} />
          </div>
        </div>
        {/* 行高设置 */}
        <div className="mt-4">
          <div className="mb-2">行高</div>
            <Slider
              min={3}
              max={7}
              value={lineHeight}
              onChange={setLineHeight}
              step={0.1}
            />
        </div>
        {/* 行距设置 */}
        <div className="mt-4">
          <div className="mb-2">行距</div>
            <Slider
              min={0}
              max={4}
              value={lineSpacing}
              onChange={setLineSpacing}
              step={0.1}
            />
        </div>
      </div>
    </div>
  )
}

export default ConfigPanel