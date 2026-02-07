import { NewspaperIcon } from "@heroicons/react/24/outline";

const Empty = () => {

  return (
    <div className="flex flex-col items-center gap-4 justify-center">
      <div className="rounded-full h-32 w-32 flex items-center justify-center bg-blue-100">
        <NewspaperIcon className="text-blue-600 w-1/2 h-1/2" />
      </div>
      <div className="font-bold text-2xl">开始创建您的简历</div>
      <div className="text-lg text-gray-600 text-center">点击上方的"创建简历"按钮<br />开始打造您的专业简历</div>
      <div className="bg-white rounded-lg p-6 shadow flex flex-col gap-3">
        {
          [{
            title: "创建简历",
            description: "点击创建按钮开始",
          }, {
            title: "编辑简历",
            description: "在左侧编辑您的简历信息",
          }, {
            title: "导出PDF",
            description: "保存并导出您的简历",
          }
          ].map((item, index) => {
            return <div className="flex gap-3">
              <div className="mt-1 rounded-full bg-blue-100 h-6 w-6 text-sm text-blue-600 font-bold flex items-center justify-center">{index + 1}</div>
              <div className="font-bold">
                <div>{item.title}</div>
                <div className="text-sm text-gray-600 font-normal">{item.description}</div>
              </div>
            </div>;
          })
        }
      </div>
    </div>
  );
};

export default Empty;