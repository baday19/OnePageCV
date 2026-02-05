import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import type { OutletContextProps } from "../Home";
import type { UserInfoProps } from "@/types/user";
import InfoPanel from "./components/InfoPanel";
import Menu from "@/components/SubMenu";


const Index = () => {
  const { userInfo, setUserInfo } = useOutletContext<OutletContextProps>();
  const [editingUserInfo, setEditingUserInfo] = useState<UserInfoProps>(userInfo);

  const [activeMenu, setActiveMenu] = useState('information');

  const handleSave = () => {
    setUserInfo(editingUserInfo);
    setUserInfo(editingUserInfo);
  };

  const components = [
    {
      key: 'information',
      label: '信息维护',
      component: <InfoPanel onSave={handleSave} userInfo={userInfo} editingUserInfo={editingUserInfo} onChangeEditingUserInfo={setEditingUserInfo} />,
    },
    {
      key: 'ai',
      label: '接口配置',
      component: <div>1</div>
    },
  ];


  return (
    <div>
      <Menu items={components} active={activeMenu} onChange={setActiveMenu} />
      {/* 操作区 */}
      <div className="p-4 overflow-y-auto h-[calc(100vh-7.5rem)]">
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
    </div>
  );
};

export default Index;