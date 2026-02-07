import PanelHeader from "@/components/PanelHeader";
import { useOutletContext } from "react-router-dom";
import type { OutletContextProps } from "../Home";
import ResumeCard from "./components/ResumeCard";
import { removeResume } from "@/api/resume";

const Index = () => {
  const { resumeList, setResumeList, updateResumeState } = useOutletContext<OutletContextProps>();

  const handleDeleteResume = (idx: number) => {
    const removedId = resumeList[idx].id;
    setResumeList(removeResume(removedId));
  };

  const handleEditResume = (idx: number) => {
    const resume = resumeList[idx];
    // 应用到数据上
    updateResumeState(resume);
  };

  return (
    <div className="overflow-y-auto h-[calc(100vh-4rem)] p-4">
      <PanelHeader title="我的简历" desc={`管理您的所有简历，共 ${resumeList.length} 份`} />
      {/* 简历列表 */}
      <div className="mt-4">
        {
          resumeList
            .sort((a, b) => b.updateTime - a.updateTime)
            .map((item, index) => {
              return (
                <ResumeCard key={item.id} name={item.name} updateTime={item.updateTime} onEdit={() => handleEditResume(index)} onDelete={() => handleDeleteResume(index)} />
              );
            })
        }
      </div>

    </div>
  );
};

export default Index;