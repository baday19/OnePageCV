// import type { MenuProps } from 'antd'
// import { Button, Modal, Input, ColorPicker, Slider, InputNumber, Dropdown } from "antd"
// import { useState } from "react"
import { Button } from 'antd'
import { useState } from 'react'

// const defaultConfig = {
//   themeColor: '#4183FF',
//   borderColor: '#F7FAFF',
//   lineHeight: 5.2,
//   lineMargin: 1.4
// }


export const Header = () => {

  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const [color, setColor] = useState<string>(defaultConfig.themeColor)
  // const [bColor, setBColor] = useState<string>(defaultConfig.borderColor)
  // const [lineHeight, setLineHeight] = useState<number>(defaultConfig.lineHeight)
  // const [lineMargin, setLineMargin] = useState<number>(defaultConfig.lineMargin)
  // const [color, setColor] = useState<string>(defaultConfig.themeColor)
  const [introShow, setIntroShow] = useState(true)

  const exportPDF = () => {
    window.print()
  }

  // const handleColorChange = (hex: string) => {
  //   setColor(hex)
  //   document.documentElement.style.setProperty(
  //     "--r-theme-color", hex
  //   )
  // }

  // const handleBColorChange = (hex: string) => {
  //   setBColor(hex)
  //   document.documentElement.style.setProperty(
  //     "--r-border-color", hex
  //   )
  // }

  // const handleLineHeightChange = (value: number) => {
  //   setLineHeight(value)
  //   document.documentElement.style.setProperty(
  //     "--r-line-height", value + 'mm'
  //   )
  // }

  // const handleLineMarginChange = (value: number) => {
  //   setLineMargin(value)
  //   document.documentElement.style.setProperty(
  //     "--r-line-margin", value + 'mm'
  //   )
  // }

  return (
    <div className="opcv-header">
      <div className="left-area">
        <div className="home">OnePageCV</div>
      </div>
      <div className="right-area">
        {/* <Button type="primary" className="config" onClick={() => {
          setIsModalOpen(true)
        }}>配置</Button> */}
        {/* <Button type="primary" className="more-templates">更多模板</Button> */}
        <Button type="primary" className="export" onClick={exportPDF} danger>使用说明</Button>
        <Button type="primary" className="export" onClick={exportPDF}>导出</Button>
      </div>
      {/* <Modal mask={false} title="配置" open={isModalOpen} onCancel={() => {
        setIsModalOpen(false)
      }} onOk={() => {
        handleColorChange(defaultConfig.themeColor)
        handleLineHeightChange(defaultConfig.lineHeight)
        handleLineMarginChange(defaultConfig.lineMargin)
        handleBColorChange(defaultConfig.borderColor)
      }}
        cancelText='关闭'
        okText='恢复默认'
      >
        <div className="opcv-config-modal">
          <div className="modal-item">
            <div className="modal-item-name">行距:</div>
            <InputNumber placeholder="行距" type="text"
              onChange={(e: any) => handleLineMarginChange(e)}
              value={lineMargin}
              step={0.1}
              min={0}
              max={4}
            />
          </div>
          <div className="modal-item">
            <div className="modal-item-name">行高:</div>
            <InputNumber placeholder="行高" type="text"
              onChange={(e: any) => handleLineHeightChange(e)}
              value={lineHeight}
              step={0.1}
              min={3}
              max={7}
            />
          </div>
          <div className="modal-item">
            <div className="modal-item-name">主题色:</div>
            <ColorPicker showText onChange={(e, hex) => handleColorChange(hex)} value={color} />
          </div>
          <div className="modal-item">
            <div className="modal-item-name">副色:</div>
            <ColorPicker showText onChange={(e, hex) => handleBColorChange(hex)} value={bColor} />
          </div>
        </div>
      </Modal> */}
    </div>
  )
}