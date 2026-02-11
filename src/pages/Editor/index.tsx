import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Menu from "../../components/SubMenu";
import TemplatePanel from "./components/TemplatePanel";
import StructureEditor from "./components/StructureEditor";
import ConfigPanel from "./components/ConfigPanel";
import type { OutletContextProps } from "../Home";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";


const Index = () => {

  const { configData, setConfigData, resumeData, setResumeData, userInfo, created } = useOutletContext<OutletContextProps>();
  const [activeMenu, setActiveMenu] = useState<string>("template");

  const handleConfigChange = (newConfig: typeof configData) => {
    setConfigData(newConfig);
  };

  const handleResumeDataChange = (newSchema: typeof resumeData) => {
    setResumeData(newSchema);
  };

  const components = [
    {
      key: 'template',
      label: '简历模板',
      component: <TemplatePanel resumeData={resumeData} onResumeChange={handleResumeDataChange} onConfigChange={handleConfigChange} />
    },
    {
      key: 'structure',
      label: '简历结构',
      component: <StructureEditor userInfo={userInfo} resumeData={resumeData} onChange={handleResumeDataChange} />
    },
    {
      key: 'config',
      label: '简历配置',
      component: <ConfigPanel configData={configData} onChange={handleConfigChange} />
    },
  ];

  return (
    <div>
      {
        created
          ? (<>
            {/* 二级菜单 */}
            <Menu items={components} active={activeMenu} onChange={setActiveMenu} />
            {/* 操作区域 */}
            <div className="overflow-y-auto h-[calc(100vh-7.5rem)] p-4">
              {
                components.map((item, index) => {
                  return (
                    <div key={index} className={activeMenu === item.key ? "block" : "hidden"}>
                      {item.component}
                    </div>
                  );
                })
              }
            </div>
          </>)
          : (
            <div className="mt-[3.5rem] flex flex-col justify-center items-center gap-3">
              <div
                className="rounded-full bg-gray-200 w-24 h-24 flex justify-center items-center mb-3"
              >
                <DocumentPlusIcon className="w-1/2 h-1/2 text-gray-400" />
              </div>
              <div className="text-gray-400 font-bold text-2xl">等待创建简历</div>
              <div className="text-gray-500">点击右侧的"创建简历"按钮开始编辑</div>
            </div>
          )
      }
    </div>
  );
};

export default Index;