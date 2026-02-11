import Menu from "@/pages/Home/components/Menu";
import Preview from "@/pages/Home/components/Preview";
import PreviewHeader from "@/pages/Home/components/PreviewHeader";
import type { ResumeData, ResumeSchema } from "@/components/Renderer/core";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { defaultConfigData, type ConfigDataProps } from "@/types/config";
import { changeRootStyle } from "@/utils/utils";
import type { UserInfoProps } from "@/types/user";
import { getUserInfo } from "@/api/user";
import { getResumeList, updateResume, type ResumeStorage } from "@/api/resume";
import Empty from "./components/Empty";
import { message } from "antd";

export interface OutletContextProps {
  configData: ConfigDataProps;
  setConfigData: (data: ConfigDataProps) => void;
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
  userInfo: UserInfoProps;
  setUserInfo: (data: UserInfoProps) => void;
  resumeList: ResumeStorage[];
  setResumeList: (data: ResumeStorage[]) => void;
  updateResumeState: (data: ResumeStorage) => void;
  created: boolean;
}

const Home = () => {

  // 简历编辑涉及的数据, 0代表未创建简历
  const [resumeId, setResumeId] = useState<number>(0);
  const [resumeName, setResumeName] = useState<string>("");
  const [resumeData, setResumeData] = useState<ResumeSchema | null>(null);
  const [configData, setConfigData] = useState<ConfigDataProps>(defaultConfigData);

  const [userInfo, setUserInfo] = useState<UserInfoProps>(getUserInfo());
  const [resumeList, setResumeList] = useState<ResumeStorage[]>(getResumeList());

  const hasResume = resumeId !== 0;
  const step = resumeId === 0 ? 0 : (resumeData === null ? 1 : (resumeData.children.length === 0 ? 2 : 3));

  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();


  // 记录正在使用的各种模块的样式
  useEffect(() => {
    changeRootStyle("--paper-line-spacing", `${configData.lineSpacing}mm`);
    changeRootStyle("--paper-line-height", `${configData.lineHeight}mm`);
    changeRootStyle("--theme-color", configData.themeColor);
    changeRootStyle("--border-color", configData.borderColor);
    changeRootStyle("--paper-font-family", configData.fontFamily);
  }, [configData]);

  const updateResumeState = (resume: ResumeStorage) => {
    setResumeId(resume.id);
    setResumeName(resume.name);
    setResumeData(resume.resume);
    setConfigData(resume.config);
  };

  const handleCreateResume = () => {
    setResumeId(Date.now());
    setResumeName("未命名简历");
    setResumeData(null);
    setConfigData(defaultConfigData);
    navigate("/editor");
  };

  const handleResumeNameChange = (name: string) => {
    setResumeName(name);
  };

  const handleExport = () => {
    window.print();
  };

  const handleStore = () => {
    if (resumeData == null) {
      message.error("请先编辑简历", 1);
      return;
    };
    const storedResume: ResumeStorage = {
      id: resumeId,
      name: resumeName,
      updateTime: Date.now(),
      resume: resumeData,
      config: configData,
    };
    console.log(storedResume);
    setResumeList(updateResume(storedResume));
    messageApi.success("保存成功", 1);
  };

  const handleClear = () => {
    setResumeId(0);
    setResumeName("");
    setResumeData(null);
  };

  return (
    <main className="print-reset flex h-screen">
      {contextHolder}
      {/* 左边区域 */}
      <div className="print-hidden flex-1 border-r border-gray-300">
        <Menu />
        <Outlet context={{ configData, setConfigData, resumeData, setResumeData, userInfo, setUserInfo, resumeList, setResumeList, updateResumeState, created: hasResume }} />
      </div>
      {/* 右边区域 */}
      <div className="print-reset flex-1 min-w-[220mm] bg-gray-100">
        <PreviewHeader
          active={hasResume}
          onCreate={handleCreateResume}
          title={resumeName}
          onTitleChange={handleResumeNameChange}
          onExport={handleExport}
          onStore={handleStore}
          onClear={handleClear}
        />
        <div className="print-reset h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="print-reset flex m-14 justify-center">
            {
              (step === 3)
                ? (
                  <div className="print-reset shadow"
                    style={{
                      fontFamily: configData.fontFamily,
                      transformOrigin: "top center",
                    }}
                  >
                    <Preview schema={resumeData as ResumeSchema} />
                  </div>
                )
                : <Empty step={step} />
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;