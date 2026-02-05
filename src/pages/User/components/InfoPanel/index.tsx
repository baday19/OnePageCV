import type { UserInfoProps } from "@/types/user";
import Profile from "./ProfileSection";
import Education from "./EducationSection";
import Work from "./WorkSection";
import Project from "./ProjectSection";
import Skill from "./SkillSection";

interface InfoPanelProps {
  userInfo: UserInfoProps;
  editingUserInfo: UserInfoProps;
  onChangeEditingUserInfo: (editingUserInfo: UserInfoProps) => void;
}

const InfoPanel = ({
  userInfo,
  editingUserInfo,
  onChangeEditingUserInfo
}: InfoPanelProps) => {
  return (
    <div className="flex flex-col gap-6">
      <Profile experience={userInfo.profile} editing={editingUserInfo.profile} onChange={(profile) => {
        onChangeEditingUserInfo({
          ...editingUserInfo,
          profile
        });
      }} />
      <Education experiences={userInfo.education} editing={editingUserInfo.education} onChange={(education) => {
        onChangeEditingUserInfo({
          ...editingUserInfo,
          education
        });
      }} />
      <Work experiences={userInfo.work} editing={editingUserInfo.work} onChange={(work) => {
        onChangeEditingUserInfo({
          ...editingUserInfo,
          work
        });
      }} />
      <Project experiences={userInfo.project} editing={editingUserInfo.project} onChange={(project) => {
        onChangeEditingUserInfo({
          ...editingUserInfo,
          project
        });
      }} />
      <Skill experience={userInfo.skill} editing={editingUserInfo.skill} onChange={(skill) => {
        onChangeEditingUserInfo({
          ...editingUserInfo,
          skill
        });
      }} />
    </div>
  );
};

export default InfoPanel;