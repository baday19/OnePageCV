import Menu from "@/pages/Home/components/Menu";
import Preview from "@/pages/Home/components/Preview";
import PreviewHeader from "@/pages/Home/components/PreviewHeader";
import type { ResumeData } from "@/components/Renderer/core";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { defaultConfigData, type ConfigDataProps } from "@/types/config";
import { changeRootStyle } from "@/utils/utils";
import type { UserInfoProps } from "@/types/user";
import { getUserInfo } from "@/utils/user";

const defaultResume: ResumeData = {
  "id": 1770195230793,
  "children": [
    {
      "id": 1770195233655,
      "componentType": "commonProfileModule1",
      "props": {
        "name": "OnePageCV",
        "photo": "",
        "schoolIcon": "",
        "items": [
          {
            "type": "single",
            "value": [
              "19977883344 | dengle@zju.edu.cn"
            ]
          },
          {
            "type": "single",
            "value": [
              "<a href=\"https://github.com/baday19\" target=\"_blank\">homepage</a>"
            ]
          }
        ]
      }
    },
    {
      "id": 1770195235551,
      "componentType": "commonExperienceModule1",
      "props": {
        "title": "教育经历",
        "items": [
          {
            "type": "double",
            "value": [
              "<b>浙江大学</b>",
              "2023年09月 - 2025年04月"
            ]
          },
          {
            "type": "single",
            "value": [
              "软件工程 硕士"
            ]
          },
          {
            "type": "rich",
            "value": [
              "<p>荣誉奖项: 优秀毕业研究生、好罡创新创业奖学金、一等学业优秀奖助金、优秀研究生、五好研究生</p>"
            ]
          },
          {
            "type": "double",
            "value": [
              "<b>西北工业大学</b>",
              "2019年09月 - 2023年07月"
            ]
          },
          {
            "type": "single",
            "value": [
              "软件工程 本科"
            ]
          },
          {
            "type": "rich",
            "value": [
              "<p>荣誉奖项: 优秀毕业⽣、科为奖学⾦、⼀等奖学⾦、全国软件测试⼤赛⼆等奖、中国⼤学⽣计算机设计⼤赛省级⼀等奖</p>"
            ]
          }
        ]
      }
    }
  ],
  "metadata": {
    "default": {
      "profile": "commonProfileModule1",
      "experience": "commonExperienceModule1"
    }
  }
};



export interface OutletContextProps {
  configData: ConfigDataProps;
  setConfigData: (data: ConfigDataProps) => void;
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
  userInfo: UserInfoProps;
  setUserInfo: (data: UserInfoProps) => void;
}

const Home = () => {

  const [resumeData, setResumeData] = useState<ResumeData>(defaultResume);
  const [configData, setConfigData] = useState<ConfigDataProps>(defaultConfigData);
  const [userInfo, setUserInfo] = useState<UserInfoProps>(getUserInfo());

  // 记录正在使用的各种模块的样式
  useEffect(() => {
    changeRootStyle("--paper-line-spacing", `${configData.lineSpacing}mm`);
    changeRootStyle("--paper-line-height", `${configData.lineHeight}mm`);
    changeRootStyle("--theme-color", configData.themeColor);
    changeRootStyle("--border-color", configData.borderColor);
    changeRootStyle("--paper-font-family", configData.fontFamily);
  }, [configData]);


  const handleExport = () => {
    window.print();
  };

  const handleStore = () => {
    if (resumeData == null) return;
    console.log(resumeData);
  };

  const handleClear = () => {
    setResumeData(null);
  };

  return (
    <main className="print-reset flex h-screen">
      {/* 左边区域 */}
      <div className="print-hidden flex-1 border-r border-gray-300">
        <Menu />
        <Outlet context={{ configData, setConfigData, resumeData, setResumeData, userInfo, setUserInfo }} />
      </div>
      {/* 右边区域 */}
      <div className="print-reset flex-1 min-w-[220mm] bg-gray-100">
        <PreviewHeader onExport={handleExport} onStore={handleStore} onClear={handleClear} />
        <div className="print-reset h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="print-reset flex m-14 justify-center">
            <div className="print-reset shadow"
              style={{
                fontFamily: configData.fontFamily,
                transformOrigin: "top center",
                // transform: "scale(0.8)"
              }}
            >
              <Preview schema={resumeData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;