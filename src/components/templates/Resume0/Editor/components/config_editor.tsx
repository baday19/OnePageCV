import { Switch, Select, InputNumber, ColorPicker, Button } from "antd";
import { configType } from "../../config";
import { useState } from "react";

interface ConfigEditorProps {
  config: configType
  onSubmit: (config: any) => void;
}

export const ConfigEditor = ({
  config,
  onSubmit,
}: ConfigEditorProps) => {

  const [isShow, setIsShow] = useState(false)

  return (
    <div className="general-info-editor">
      <div className="info-title" style={{marginBottom: 0}}>
        <div className="title-name">简历配置</div>
        <div className="btn-containers">
          <Button type="primary" size="small" onClick={()=>{
            setIsShow(!isShow)
          }}>
            {isShow?'收起':'展开'}
          </Button>
        </div>
      </div>
      {
        isShow && (
          <>
            <div className="info-form" style={{marginTop: 25}}>
              <div className="config-form-item">
                <div className="config">头部布局居中（关闭后居左）</div>
                <Switch checked={!config.isLeft} onChange={() => {
                  const tempConfig = { ...config, isLeft: !config.isLeft }
                  onSubmit(tempConfig)
                }} />
              </div>
              <div className="config-form-item">
                <div className="config">显示顶部线条</div>
                <Switch checked={config.isHeaderShow} onChange={() => {
                  const tempConfig = { ...config, isHeaderShow: !config.isHeaderShow }
                  onSubmit(tempConfig)
                }} />
              </div>
              <div className="config-form-item">
                <div className="config">是否包含照片</div>
                <Switch checked={config.hasPhoto} onChange={() => {
                  const tempConfig = { ...config, hasPhoto: !config.hasPhoto }
                  onSubmit(tempConfig)
                }} />
              </div>
              <div className="config-form-item">
                <div className="config">标题样式</div>
                <Select
                  value={config.titleType}
                  style={{ width: 120 }}
                  onChange={(e: number) => {
                    const tempConfig = { ...config, titleType: Number(e) }
                    onSubmit(tempConfig)
                  }}
                  options={[
                    { value: 0, label: '样式1' },
                    { value: 1, label: '样式2' },
                    { value: 2, label: '样式3' },
                    { value: 3, label: '样式4' },
                  ]}
                />
              </div>
              <div className="config-form-item">
                <div className="config">行距</div>
                <InputNumber placeholder="行距" type="text"
                  onChange={(e: any) => {
                    const tempConfig = { ...config, lineMargin: e }
                    onSubmit(tempConfig)
                  }}
                  value={config.lineMargin}
                  step={0.1}
                  min={0}
                  max={4}
                />
              </div>
              <div className="config-form-item">
                <div className="config">行高</div>
                <InputNumber placeholder="行高" type="text"
                  onChange={(e: any) => {
                    const tempConfig = { ...config, lineHeight: e }
                    onSubmit(tempConfig)
                  }}
                  value={config.lineHeight}
                  step={0.1}
                  min={3}
                  max={7}
                />
              </div>
              <div className="config-form-item">
                <div className="config">主题色</div>
                <ColorPicker onChange={(e, hex) => {
                  const tempConfig = { ...config, themeColor: hex }
                  onSubmit(tempConfig)
                }} value={config.themeColor} />
              </div>
              <div className="config-form-item">
                <div className="config">副色</div>
                <ColorPicker onChange={(e, hex) => {
                  const tempConfig = { ...config, borderColor: hex }
                  onSubmit(tempConfig)
                }} value={config.borderColor} />
              </div>
            </div>
            <div className="general-info-tips">
              <div>注：</div>
              <li>导出时可通过<u>调整行高和行距</u>保证一页简历</li>
              <li><u>左侧简历支持直接编辑</u>，可通过ctrl+b等指令实现局部加粗</li>
              <li><u>输入框支持html</u>，如使用{'<b></b>, <u></u>, <a></a>'}可实现加粗,下划线,超链接。</li>
              <li>{'<b>Hello</b>: 你好'} 会渲染为 <b>Hello</b>: 你好</li>
              <li>{'<a href="https://github.com/baday19">github</a>'} 会渲染为 <a href="https://github.com/baday19">github</a></li>
            </div></>
        )
      }
    </div>
  )
}