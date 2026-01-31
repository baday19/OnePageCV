import PanelHeader from "@/components/PanelHeader"
import Input from "@/components/Input";
import type { ConfigDataProps } from "@/utils/types";
import { ColorPicker, Select, Slider } from "antd"

interface ConfigPanelProps {
  configData: ConfigDataProps;
  onChange: (newConfig: ConfigDataProps) => void;
}

const presetColors = [
  {
    themeColor: '#AF032E',
    borderColor: '#FBF2F4'
  },
  {
    themeColor: '#EE8732',
    borderColor: '#FEF9F5'
  },
  {
    themeColor: '#4183FF',
    borderColor: '#F5F9FF'
  },
  {
    themeColor: '#9C5BDE',
    borderColor: '#FAF7FD'
  },
  {
    themeColor: '#6DB557',
    borderColor: '#F7FBF6'
  }
]

export const presetFonts = [
  {
    label: "微软雅黑",
    value: `"PingFang SC", "Microsoft YaHei", sans-serif`
  },
  {
    label: "宋体",
    value: `"Source Han Serif CN", "Source Han Serif SC", SimSun, STSong, sans-serif`
  },
  {
    label: "仿宋",
    value: `FangSong, STFangsong, sans-serif`
  },
  {
    label: "黑体",
    value: `SimHei, STHeiti, sans-serif`
  },
  {
    label: "楷体",
    value: `KaiTi, STKaiti, sans-serif`
  }
];


const ConfigPanel = ({
  configData,
  onChange
}: ConfigPanelProps) => {
  const { themeColor, borderColor, lineHeight, lineSpacing, fontFamily } = configData

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

  const setFontFamily = (newFont: string) => {
    onChange({ ...configData, fontFamily: newFont })
  }

  const handleChangePresetColor = (colors: { themeColor: string, borderColor: string }) => {
    onChange({ ...configData, themeColor: colors.themeColor, borderColor: colors.borderColor })
  }

  return (
    <div>
      <PanelHeader title="简历参数配置" desc="配置您简历的字体和颜色等样式" />
      <div className="text-sm">
        {/* 字体 */}
        <div className="mt-4">
          <div className="mb-2">字体</div>
          <div>
            <Select
              defaultValue={presetFonts[0].value}
              style={{ width: '100%' }}
              onChange={setFontFamily}
              options={presetFonts}
            />
          </div>
        </div>
        {/* 颜色选择 */}
        <div className="flex mt-4 gap-3">
          <div className="flex-1">
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
          <div className="flex-1">
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
        </div>
        {/* 预设颜色区 */}
        <div className="mt-2 rounded-md inline-flex p-1 bg-gray-100 gap-1">
          {
            presetColors.map((item, index) => (
              <div
                className="h-6 w-6 bg-black rounded-sm cursor-pointer hover:scale-105 transition-transform"
                style={{
                  backgroundColor: item.themeColor
                }}
                key={index}
                onClick={() => handleChangePresetColor(item)}
              />
            ))
          }
        </div>
        {/* 行设置 */}
        <div className="flex mt-4 gap-3">
          <div className="flex-1">
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
          <div className="flex-1">
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
    </div>
  )
}

export default ConfigPanel