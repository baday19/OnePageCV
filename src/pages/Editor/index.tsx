import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Menu from "../../components/SubMenu";
import TemplatePanel from "./components/TemplatePanel";
import StructureEditor from "./components/StructureEditor";
import ConfigPanel from "./components/ConfigPanel";
import type { OutletContextProps } from "../Home";


const Index = () => {
  const [activeMenu, setActiveMenu] = useState<number>(1);
  const { configData, setConfigData, resumeData, setResumeData, userInfo } = useOutletContext<OutletContextProps>();
  
  
  const handleConfigChange = (newConfig: typeof configData) => {
    setConfigData(newConfig);
  };

  const handleResumeDataChange = (newSchema: typeof resumeData) => {
    setResumeData(newSchema);
  };


  const components = [
    {
      name: '简历模板',
      component: <TemplatePanel resumeData={resumeData} onChange={handleResumeDataChange} />
    },
    {
      name: '简历结构',
      component: <StructureEditor userInfo={userInfo} resumeData={resumeData} onChange={handleResumeDataChange} />
    },
    {
      name: '简历配置',
      component: <ConfigPanel configData={configData} onChange={handleConfigChange} />
    },
  ];

  return (
    <div>
      {/* 二级菜单 */}
      <Menu items={components.map(item => item.name)} active={activeMenu} onChange={setActiveMenu} />
      {/* 操作区域 */}
      <div className="overflow-y-auto h-[calc(100vh-7.5rem)] p-4">
        {
          components.map((item, index) => {
            return (
              <div key={index} className={activeMenu === index ? "block" : "hidden"}>
                {item.component}
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Index;