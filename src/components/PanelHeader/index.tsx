interface PanelHeaderProps {
  title: string;
  desc: string;
  okIcon?: React.ComponentType<{ className?: string }>;
  okText?: string;
  cancelIcon?: React.ComponentType<{ className?: string }>;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
}

const PanelHeader = ({
  title,
  desc,
  okIcon: OkIcon,
  okText,
  cancelIcon: CancelIcon,
  cancelText,
  onCancel,
  onOk
}: PanelHeaderProps) => {
  return (
    <div
      className="flex items-center"
    >
      {/* 左边 */}
      <div>
        <div className="text-lg font-bold mb-2">
          {title}
        </div>
        <div className="text-sm text-gray-500">
          {desc}
        </div>
      </div>
      {/* 右边 */}
      <div
        className="flex ml-auto gap-2"
      >
        {
          cancelText && <div
            className="ml-auto"
          >
            <button onClick={onCancel} className="flex items-center cursor-pointer px-2 py-1.5 border border-gray-300 rounded-md text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors">
              {CancelIcon && <CancelIcon className="w-4 h-4 mr-2.5" />}
              <div>{cancelText}</div>
            </button>
          </div>
        }
        {
          okText && <div
            className="ml-auto"
          >
            <button onClick={onOk} className="flex items-center cursor-pointer px-2 py-1.5 border border-blue-500 rounded-md text-sm bg-blue-500 text-white hover:bg-blue-400 hover:border-blue-400 transition-colors">
              {OkIcon && <OkIcon className="w-4 h-4 mr-2.5" />}
              <div>{okText}</div>
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default PanelHeader;