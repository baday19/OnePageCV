import { NewspaperIcon } from "@heroicons/react/24/outline";

const Empty = ({
  step = 0,
}: {
  step?: number
}) => {

  return (
    <div className="flex flex-col items-center gap-4 justify-center">
      <div className="rounded-full h-32 w-32 flex items-center justify-center bg-blue-100">
        <NewspaperIcon className="text-blue-600 w-1/2 h-1/2" />
      </div>
      <div className="font-bold text-2xl">开始创建您的简历</div>
      <div className="text-lg text-gray-600 text-center">{step === 0 ? '点击上方的"创建简历"按钮' : '在左侧选择“模板”并编辑“结构”'}<br />开始打造您的专业简历</div>
      <div className="bg-white rounded-lg p-6 shadow flex flex-col gap-3">
        {
          [{
            title: "创建简历",
            description: <p>点击<u>创建</u>按钮完成简历创建</p>,
          }, {
            title: "选择模板",
            description: <p>在<u>模板</u>中使用预设或自定义</p>,
          }, {
            title: "编辑简历",
            description: <p>在<u>结构</u>中编辑您的简历信息</p>,
          }, {
            title: "导出PDF",
            description: <p><u>保存</u>并<u>导出</u>您的简历</p>,
          }
          ].map((item, index) => {
            return <div className="flex gap-3" key={index}>
              <div className={`mt-1 rounded-full ${index < step ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'} h-6 w-6 text-sm text-blue-600 font-bold flex items-center justify-center`}>{index + 1}</div>
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