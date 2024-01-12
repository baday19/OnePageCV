import { Button, Input, Modal, Select } from "antd"
import { useState } from "react";
import { templates } from "../../templates_data";
const templatesArr = templates.map((item: any) => {
  return {
    value: item.id,
    label: item.name,
    data: item.data
  }
})

export const ToolBox = ({
  onStore,
  onImport,
}: {
  onStore: () => void;
  onImport: (cv: any) => void;
}) => {

  const [modalShow, setModalShow] = useState(false)
  const [cvContent, setCVContent] = useState('')
  const [currTemplate, setCurrTemplate] = useState(0)

  const handleChooseTemplate = (e: number) => {
    console.log(e)
    const templateData = templatesArr.find((item: any) => item.value == e)
    if (templateData) {
      onImport(templateData.data)
      setCurrTemplate(e)
    }
  }

  return (
    <div className="tool-box">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button size="small" type="primary" onClick={onStore}>保存</Button>
        <Button size="small" type="primary" onClick={() => setModalShow(true)} style={{ marginLeft: 15 }}>导入</Button>
      </div>
      <div>
        <span style={{ fontSize: 14, marginRight: 20 }}>当前模板:</span>
        <Select
          value={currTemplate}
          style={{ width: 180 }}
          onChange={handleChooseTemplate}
          options={templatesArr}
        />
      </div>
      <Modal
        title='导入'
        open={modalShow}
        cancelText='取消'
        okText='确定'
        onCancel={() => {
          setModalShow(false)
        }}
        onOk={() => {
          try {
            const cv = JSON.parse(cvContent)
            onImport(cv)
            setModalShow(false)
          } catch {
            alert('非法配置字符串')
          }
        }}>
        <Input.TextArea onChange={(e) => {
          setCVContent(e.target.value)
        }} placeholder="输入简历配置字符串（保存后生成的json）" />
      </Modal>
    </div>
  )
}