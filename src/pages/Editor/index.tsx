import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import Menu from "./components/Menu"
import AddComponentPanel from "./components/AddComponentPanel"
import StructureEditor from "./components/StructureEditor"
import ConfigPanel from "./components/ConfigPanel"
import type { OutletContextProps } from "../Home"


const index = () => {
  const [activeMenu, setActiveMenu] = useState<number>(1);
  const { configData, setConfigData, resumeData, setResumeData } = useOutletContext<OutletContextProps>();
  const handleConfigChange = (newConfig: typeof configData) => {
    setConfigData(newConfig);
  }
  const handleResumeDataChange = (newSchema: typeof resumeData) => {
    console.log(newSchema);
  }

  return (
    <div>
      {/* 二级菜单 */}
      <Menu active={activeMenu} onChange={setActiveMenu} />
      {/* 操作区域 */}
      <div className="overflow-y-auto h-[calc(100vh-7.5rem)] p-4">
        <div className={activeMenu === 0 ? "block" : "hidden"}>
          <AddComponentPanel />
        </div>
        <div className={activeMenu === 1 ? "block" : "hidden"}>
          <StructureEditor resumeData={resumeData} onChange={handleResumeDataChange} />
        </div>
        <div className={activeMenu === 2 ? "block" : "hidden"}>
          <ConfigPanel configData={configData} onChange={handleConfigChange} />
        </div>
      </div>
    </div>
  )
}

export default index