import PanelHeader from "@/components/PanelHeader";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import type { OutletContextProps } from "../Home";
import type { UserInfoProps } from "@/types/user";
import RoundedMenu from "@/components/RoundedMenu";
import { logoPresets } from "@/components/EditorCard/preset";
import InfoPanel from "./components/InfoPanel";


const Index = () => {
  const [activeInfoType, setActiveInfoType] = useState('profile');
  const { userInfo, setUserInfo } = useOutletContext<OutletContextProps>();
  const [editingUserInfo, setEditingUserInfo] = useState<UserInfoProps>(userInfo);

  const infoTypeList = [
    {
      key: 'profile',
      label: '信息维护',
      icon: logoPresets.profile.icon,
      value: <InfoPanel userInfo={userInfo} editingUserInfo={editingUserInfo} onChangeEditingUserInfo={setEditingUserInfo} />,
    },
    {
      key: 'ai',
      label: '接口配置',
      icon: logoPresets.custom.icon,
      value: <div>1</div>
    }
  ];

  return (
    <div className="p-4 overflow-y-auto h-[calc(100vh-4rem)]">
      <PanelHeader title="个人信息库" desc="维护您的个人信息，便于快速创建和更新简历" buttonText="保存信息" />
      <RoundedMenu className="my-6" items={infoTypeList} active={activeInfoType} onChange={setActiveInfoType} />
      {
        infoTypeList.map((item, index) => {
          return <div key={index} className={`${activeInfoType === item.key ? 'block' : 'hidden'}`}>
            {item.value}
          </div>;
        })
      }
    </div>
  );
};

export default Index;