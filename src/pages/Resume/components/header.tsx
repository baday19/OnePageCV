import { Button, Modal } from 'antd'
import { useState } from 'react'


export const Header = () => {

  const [introShow, setIntroShow] = useState(true)

  const exportPDF = () => {
    window.print()
  }


  return (
    <div className="opcv-header">
      <div className="left-area">
        <div className="home">OnePageCV</div>
      </div>
      <div className="right-area">
        <Button type="primary" className="export" onClick={() => setIntroShow(true)} danger>使用说明</Button>
        <Button type="primary" className="export" onClick={exportPDF}>导出</Button>
      </div>
      <Modal
        title='使用说明'
        open={introShow}
        onCancel={() => setIntroShow(false)}
        footer={[<Button type='primary' onClick={() => setIntroShow(false)}>知道啦</Button>]}
      >
        <div style={{ color: '#FF4D4F' }}>为保证您的正常使用，请务必阅读以下事项（遇到问题时再看也行）：</div>
        <div style={{marginTop: 20}}>
          推荐使用流程：
          <ul>
            <li>在右侧编辑区[当前模板]里选择合适的模板</li>
            <li>通过调整[简历配置]里的样式及颜色等进行定制化</li>
            <li>完成个人信息及经历的填写</li>
            <li>
              适当调整[简历配置]里的行高及行距实现一页简历
            </li>
            <li>点击页面右上角的[导出]，完成简历导出</li>
            <li>导出时的设置：A4，无边距，默认缩放，勾选背景图形</li>
          </ul>
        </div>
        <div style={{marginTop: 20}}>
          进阶使用：
          <ul>
            <li>完成简历编写后，可以点击[保存]备份您的信息，若下次需要修改时，可直接将该信息在[导入]中输入</li>
            <li>在完成信息填写后，若简历需要微调，可直接在左侧简历处编辑，支持ctrl+b(加粗)、ctrl+i(斜体)等快捷键。</li>
            <li>右侧信息编辑区的输入框支持html，可使用a、b、u等标签</li>
          </ul>
        </div>
        <div style={{marginTop: 20}}>后续可在页面右上角点击[使用说明]再次打开该提示</div>
        <div style={{marginTop: 20}}>任何问题请联系我：1556330234@qq.com</div>
      </Modal>
    </div>
  )
}