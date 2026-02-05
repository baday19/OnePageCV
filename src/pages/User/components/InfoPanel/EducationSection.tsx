import Card from "../Card";
import LabeledInput from "../LabeledInput";
import type { Education } from "@/types/user";
import SectionContainer from "../Section";

interface EducationProps {
  experiences: Education[];
  editing: Education[];
  onChange: (value: Education[]) => void;
}

const EducationSection = ({
  experiences,
  editing,
  onChange
}: EducationProps) => {
  const title = '教育经历';

  const handleAddSection = () => {
    onChange([...editing, {
      school: '',
      major: '',
      start: '',
      end: '',
      degree: '',
      college: '',
      content: '',
    }]);
  };

  const handleInitSection = () => {
    onChange([...experiences]);
  };

  const handleDeleteSection = (index: number) => {
    const newEditing = [...editing];
    newEditing.splice(index, 1);
    onChange(newEditing);
  };

  return (
    <SectionContainer title={title} onAdd={handleAddSection} onInit={handleInitSection}>
      {
        editing.length > 0 ?
          editing.map((item, index) => {
            return (
              <Card title={`${title} #${index + 1}`} showDelete onDelete={() => handleDeleteSection(index)} key={index}>
                <div className="flex gap-3">
                  <LabeledInput className="flex-1" label="学校名称" value={item.school} initValue={experiences[index]?.school} onChange={(value) => {
                    onChange([...editing.slice(0, index), { ...item, school: value }, ...editing.slice(index + 1)]);
                  }} />
                  <LabeledInput className="flex-1" label="学历" value={item.degree} initValue={experiences[index]?.degree} onChange={(value) => {
                    onChange([...editing.slice(0, index), { ...item, degree: value }, ...editing.slice(index + 1)]);
                  }} />
                </div>
                <div className="flex gap-3 mt-3">
                  <LabeledInput className="flex-1" label="学院" value={item.college} initValue={experiences[index]?.college} onChange={(value) => {
                    onChange([...editing.slice(0, index), { ...item, college: value }, ...editing.slice(index + 1)]);
                  }} />
                  <LabeledInput className="flex-1" label="专业" value={item.major} initValue={experiences[index]?.major} onChange={(value) => {
                    onChange([...editing.slice(0, index), { ...item, major: value }, ...editing.slice(index + 1)]);
                  }} />
                </div>
                <div className="flex gap-3 mt-3">
                  <LabeledInput className="flex-1" label="开始时间" value={item.start} initValue={experiences[index]?.start} onChange={(value) => {
                    onChange([...editing.slice(0, index), { ...item, start: value }, ...editing.slice(index + 1)]);
                  }} />
                  <LabeledInput className="flex-1" label="毕业时间" value={item.end} initValue={experiences[index]?.end} onChange={(value) => {
                    onChange([...editing.slice(0, index), { ...item, end: value }, ...editing.slice(index + 1)]);
                  }} />
                </div>
                <div className="flex gap-3 mt-3">
                  <LabeledInput type="rich" className="flex-1" label="获奖/成就/相关课程" value={item.content} initValue={experiences[index]?.content} onChange={(value) => {
                    onChange([...editing.slice(0, index), { ...item, content: value }, ...editing.slice(index + 1)]);
                  }} />
                </div>
              </Card>
            );
          }) : null
      }
    </SectionContainer>
  );
};

export default EducationSection;