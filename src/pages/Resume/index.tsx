import "./index.less"
import Resume0 from '@/components/templates/Resume0'
import { Button, Modal, Input, ColorPicker } from "antd"
import { useState } from "react"

const defaultConfig = {
  themeColor: '#4183FF',
  borderColor: '#F7FAFF',
  lineHeight: 5.2,
  lineMargin: 1.4
}

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [color, setColor] = useState<string>(defaultConfig.themeColor)
  const [lineHeight, setLineHeight] = useState<number>(defaultConfig.lineHeight)
  const [lineMargin, setLineMargin] = useState<number>(defaultConfig.lineMargin)
  // const [color, setColor] = useState<string>(defaultConfig.themeColor)

  const exportPDF = () => {
    window.print()
  }

  const handleColorChange = (hex: string) => {
    setColor(hex)
    document.documentElement.style.setProperty(
      "--r-theme-color", hex
    )
  }

  const handleLineHeightChange = (value: number) => {
    setLineHeight(value)
    document.documentElement.style.setProperty(
      "--r-line-height", value + 'mm'
    )
  }

  const handleLineMarginChange = (value: number) => {
    setLineMargin(value)
    document.documentElement.style.setProperty(
      "--r-line-margin", value + 'mm'
    )
  }

  return (
    <div className="opcv-header">
      <div className="left-area">
        <div className="home">OnePageCV</div>
      </div>
      <div className="right-area">
        <Button type="primary" className="config" onClick={() => {
          setIsModalOpen(true)
        }}>配置</Button>
        <Button type="primary" className="more-templates">更多模板</Button>
        <Button type="primary" className="export" onClick={exportPDF}>导出</Button>
      </div>
      <Modal mask={false} title="配置" open={isModalOpen} onCancel={() => {
        setIsModalOpen(false)
      }} onOk={() => {
        handleColorChange(defaultConfig.themeColor)
        handleLineHeightChange(defaultConfig.lineHeight)
        handleLineMarginChange(defaultConfig.lineMargin)
      }}
        cancelText='关闭'
        okText='恢复默认'
      >
        <Input placeholder="行距" type="text" style={{ marginTop: 20 }}
          onChange={(e: any) => handleLineMarginChange(e.target.value)}
          value={lineMargin}
        />
        <Input placeholder="行高" type="text" style={{ marginTop: 20 }}
          onChange={(e: any) => handleLineHeightChange(e.target.value)}
          value={lineHeight}
        />
        <ColorPicker showText style={{ marginTop: 20 }} onChange={(e, hex) => handleColorChange(hex)} value={color} />
      </Modal>
    </div>
  )
}

const Index = () => {

  return (
    <div className="opcv-wrap">
      <Header />
      <Resume0 />
    </div>
  )
}

export default Index