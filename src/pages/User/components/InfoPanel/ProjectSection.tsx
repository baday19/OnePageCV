import Card from "../Card";
import LabeledInput from "../LabeledInput";
import type { Project } from "@/types/user";
import SectionContainer from "../Section";

interface ProjectSectionProps {
  experiences: Project[];
  editing: Project[];
  onChange: (value: Project[]) => void;
}

const ProjectSection = ({
  experiences,
  editing,
  onChange
}: ProjectSectionProps) => {

  const title = '项目经历';

  const handleAddSection = () => {
    onChange([...editing, {
      name: '',
      role: '',
      start: '',
      end: '',
      city: '',
      department: '',
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
                  <LabeledInput className="flex-1" label="项目名称" value={item.name} initValue={experiences[index]?.name} onChange={(value) => {
                    onChange([...editing.slice(0, index), { ...item, name: value }, ...editing.slice(index + 1)]);
                  }} />
                  <LabeledInput className="flex-1" label="角色" value={item.role} initValue={experiences[index]?.role} onChange={(value) => {
                    onChange([...editing.slice(0, index), { ...item, role: value }, ...editing.slice(index + 1)]);
                  }} />
                </div>
                <div className="flex gap-3 mt-3">
                  <LabeledInput className="flex-1" label="城市" value={item.city} initValue={experiences[index]?.city} onChange={(value) => {
                    onChange([...editing.slice(0, index), { ...item, city: value }, ...editing.slice(index + 1)]);
                  }} />
                  <LabeledInput className="flex-1" label="部门" value={item.department} initValue={experiences[index]?.department} onChange={(value) => {
                    onChange([...editing.slice(0, index), { ...item, department: value }, ...editing.slice(index + 1)]);
                  }} />
                </div>
                <div className="flex gap-3 mt-3">
                  <LabeledInput className="flex-1" label="开始时间" value={item.start} initValue={experiences[index]?.start} onChange={(value) => {
                    onChange([...editing.slice(0, index), { ...item, start: value }, ...editing.slice(index + 1)]);
                  }} />
                  <LabeledInput className="flex-1" label="结束时间" value={item.end} initValue={experiences[index]?.end} onChange={(value) => {
                    onChange([...editing.slice(0, index), { ...item, end: value }, ...editing.slice(index + 1)]);
                  }} />
                </div>
                <div className="flex gap-3 mt-3">
                  <LabeledInput type="rich" className="flex-1" label="项目描述" value={item.content} initValue={experiences[index]?.content} onChange={(value) => {
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

export default ProjectSection;