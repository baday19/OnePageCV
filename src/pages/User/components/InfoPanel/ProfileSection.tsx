import Card from "../Card";
import LabeledInput from "../LabeledInput";
import type { Profile } from "@/types/user";
import SectionContainer from "../Section";

interface ProfileProps {
  experience: Profile;
  editing: Profile;
  onChange: (value: Profile) => void;
}

const ProfilePanel = ({
  experience,
  editing,
  onChange
}: ProfileProps) => {

  const handleInitSection = () => {
    onChange(experience);
  };

  return (
    <SectionContainer title="基础信息" onInit={handleInitSection}>
      <Card title="个人基本信息">
        <div className="flex gap-3">
          <LabeledInput className="flex-1" label="姓名" value={editing.name} initValue={experience.name} onChange={(value) => {
            onChange({ ...editing, name: value });
          }} />
          <LabeledInput className="flex-1" label="电话" value={editing.phone} initValue={experience.phone} onChange={(value) => {
            onChange({ ...editing, phone: value });
          }} />
        </div>
        <div className="flex gap-3 mt-3">
          <LabeledInput className="flex-1" label="邮箱" value={editing.email} initValue={experience.email} onChange={(value) => {
            onChange({ ...editing, email: value });
          }} />
          <LabeledInput className="flex-1" label="主页链接" value={editing.homepage} initValue={experience.homepage} onChange={(value) => {
            onChange({ ...editing, homepage: value });
          }} />
        </div>
      </Card>
    </SectionContainer>
  );
};

export default ProfilePanel;