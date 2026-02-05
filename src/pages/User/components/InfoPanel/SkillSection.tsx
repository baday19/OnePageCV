import Card from "../Card";
import LabeledInput from "../LabeledInput";
import type { Skill } from "@/types/user";
import SectionContainer from "../Section";

interface SkillSectionProps {
  experience: Skill;
  editing: Skill;
  onChange: (value: Skill) => void;
}

const SkillSection = ({
  experience,
  editing,
  onChange
}: SkillSectionProps) => {

  const title = '专业技能';

  const handleInitSection = () => {
    onChange(experience);
  };

  return (
    <SectionContainer title={title} onInit={handleInitSection}>
      <Card title={`${title}`}>
        <div className="flex gap-3">
          <LabeledInput type="rich" className="flex-1" label="技能描述" value={editing} initValue={experience} onChange={onChange} />
        </div>
      </Card>
    </SectionContainer>
  );
};

export default SkillSection;