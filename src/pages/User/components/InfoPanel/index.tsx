import type { UserInfoProps } from "@/types/user";
import Profile from "./ProfileSection";
import Education from "./EducationSection";
import Work from "./WorkSection";
import Project from "./ProjectSection";
import Skill from "./SkillSection";
import PanelHeader from "@/components/PanelHeader";
import RoundedMenu from "@/components/RoundedMenu";
import { useState } from "react";
import { ArchiveBoxArrowDownIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline";

interface InfoPanelProps {
  userInfo: UserInfoProps;
  editingUserInfo: UserInfoProps;
  onChangeEditingUserInfo: (editingUserInfo: UserInfoProps) => void;
  onSave: () => void;
}

const InfoPanel = ({
  userInfo,
  editingUserInfo,
  onChangeEditingUserInfo,
  onSave
}: InfoPanelProps) => {

  const [activeSection, setActiveSection] = useState('profile');

  const infoSectionList = [
    {
      key: 'profile',
      label: '基础信息',
      value: <Profile experience={userInfo.profile} editing={editingUserInfo.profile} onChange={(profile) => {
        onChangeEditingUserInfo({
          ...editingUserInfo,
          profile
        });
      }} />,
    },
    {
      key: 'education',
      label: '教育经历',
      value: <Education experiences={userInfo.education} editing={editingUserInfo.education} onChange={(education) => {
        onChangeEditingUserInfo({
          ...editingUserInfo,
          education
        });
      }} />,
    },
    {
      key: 'work',
      label: '工作经历',
      value: <Work experiences={userInfo.work} editing={editingUserInfo.work} onChange={(work) => {
        onChangeEditingUserInfo({
          ...editingUserInfo,
          work
        });
      }} />,
    },
    {
      key: 'project',
      label: '项目经历',
      value: <Project experiences={userInfo.project} editing={editingUserInfo.project} onChange={(project) => {
        onChangeEditingUserInfo({
          ...editingUserInfo,
          project
        });
      }} />
    },
    {
      key: 'skill',
      label: '专业技能',
      value: <Skill experience={userInfo.skill} editing={editingUserInfo.skill} onChange={(skill) => {
        onChangeEditingUserInfo({
          ...editingUserInfo,
          skill
        });
      }} />
    }
  ];

  return (
    <div>
      <PanelHeader title="个人信息库" desc="维护您的个人信息，便于快速创建和更新简历" okIcon={ArchiveBoxIcon} cancelIcon={ArchiveBoxArrowDownIcon} okText="保存信息" onOk={onSave} cancelText="智能导入" />
      <RoundedMenu className="my-6" items={infoSectionList} active={activeSection} onChange={setActiveSection} />
      <div className="flex flex-col gap-6">
        {
          infoSectionList.map((item, index) => {
            return <div key={index} className={`${activeSection === item.key ? 'block' : 'hidden'}`}>
              {item.value}
            </div>;
          })
        }
      </div>
    </div>

  );
};

export default InfoPanel;