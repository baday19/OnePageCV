import { Button, Input, Modal } from "antd"
import { useRef, useState } from "react";


export const ToolBox = ({
  onStore,
  onImport,
}: {
  onStore: () => void;
  onImport: (cv:any) => void;
}) => {

  const [modalShow, setModalShow] = useState(false)
  const [cvContent, setCVContent] = useState('')

  const aTest = useRef(null)

  return (
    <div className="tool-box">
      <div>
        <Button size="small" type="primary" onClick={onStore}>保存</Button>
        <Button size="small" type="primary" onClick={()=>setModalShow(true)} style={{ marginLeft: 15 }}>导入</Button>
      </div>
      <Button size="small" type="primary">更多模板...</Button>
      <Modal
        title='导入'
        open={modalShow}
        cancelText='取消'
        okText='确定'
        onCancel={() => {
          setModalShow(false)
        }}
        onOk={() => {
          console.log(aTest)
          try {
            const cv = JSON.parse(cvContent)
            onImport(cv)
            setModalShow(false)
          } catch {
            alert('非法配置字符串')
          }
        }}>
        <Input.TextArea ref={aTest} onChange={(e)=>{
          setCVContent(e.target.value)
        }} placeholder="输入简历配置字符串（保存后生成的json）" />
      </Modal>
    </div>
  )
}