import { Switch, Select } from "antd";


interface ConfigEditorProps {
  isLeft?: boolean;
  isHeaderShow?: boolean;
  titleType?: number;
  hasPhoto: boolean;
  onSubmit: (config: any) => void;
}

export const ConfigEditor = ({
  isLeft,
  isHeaderShow,
  titleType = 0,
  hasPhoto,
  onSubmit,
}: ConfigEditorProps) => {

  return (
    <div className="base-info-editor">
      <div className="info-title">简历配置</div>
      <div className="info-form">
        <div className="config-form-item">
          <div className="config">头部布局居中（关闭后居左）</div>
          <Switch checked={!isLeft} onChange={() => {
            onSubmit({
              isLeft: !isLeft,
              isHeaderShow: isHeaderShow,
              titleType: titleType,
              hasPhoto: hasPhoto
            })
          }} />
        </div>
        <div className="config-form-item">
          <div className="config">显示顶部线条</div>
          <Switch checked={isHeaderShow} onChange={() => {
            onSubmit({
              isLeft: isLeft,
              isHeaderShow: !isHeaderShow,
              titleType: titleType,
              hasPhoto: hasPhoto
            })
          }} />
        </div>
        <div className="config-form-item">
          <div className="config">是否包含照片</div>
          <Switch checked={hasPhoto} onChange={() => {
            onSubmit({
              isLeft: isLeft,
              isHeaderShow: isHeaderShow,
              titleType: titleType,
              hasPhoto: !hasPhoto
            })
          }} />
        </div>
        <div className="config-form-item">
          <div className="config">标题样式</div>
          <Select
            value={titleType}
            style={{ width: 120 }}
            onChange={(e:number) => {
              console.log(e)
              onSubmit({
                isLeft: isLeft,
                isHeaderShow: isHeaderShow,
                titleType: Number(e),
                hasPhoto: hasPhoto
              })
            }}
            options={[
              { value: 0, label: '样式1' },
              { value: 1, label: '样式2' },
              { value: 2, label: '样式3' },
              { value: 3, label: '样式4' },
            ]}
          />
        </div>
      </div>
      <div className="base-info-tips">
        <div>注：</div>
        <li>导出时可通过页面顶部的配置<u>调整行高和行距</u></li>
        <li><u>左侧简历支持直接编辑</u>，可通过ctrl+b等指令实现局部加粗</li>
        <li><u>输入框支持html</u>，如使用{'<b></b>, <u></u>, <a></a>'}可实现加粗,下划线,超链接。</li>
        <li>{'<b>Hello</b>: 你好'} 会渲染为 <b>Hello</b>: 你好</li>
        <li>{'<a href="https://github.com/baday19">github</a>'} 会渲染为 <a href="https://github.com/baday19">github</a></li>
      </div>
    </div>
  )
}