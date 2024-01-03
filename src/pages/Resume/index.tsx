import { useLocation } from "react-router-dom";
import SchoolLogo from '@/assets/logo.jpg'
import "./index.less"
import { RContent, EditBox } from "@/components/templates/Resume0";
import { useState } from "react";

const Index = () => {

  const exportPDF = () => {
    window.print()
  }

  const handlePaperChange = (paper: any) => {
    setPaper(paper)
  }
  console.log(1)

  const [paper, setPaper] = useState([])

  return (
    <div className="resume-wrap">
      <div className="resume-header">
        <div className="left-area">
          <div className="home">home</div>
        </div>
        <div className="right-area">
          <div className="config">配置</div>
          <div className="more-templates">更多模板</div>
          <div className="export" onClick={exportPDF}>导出</div>
        </div>

      </div>
      <div className="resume-main">
        <div className="resume-container">
          <RContent paper={paper} />
        </div>
        <div className="edit-container">
          <div className="edit-box">
            <EditBox onPaperChange={handlePaperChange} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Index