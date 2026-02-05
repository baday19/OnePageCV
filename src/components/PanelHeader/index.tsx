interface PanelHeaderProps {
  title: string;
  desc: string;
  buttonIcon?: React.ComponentType<{className?: string}>;
  buttonText?: string;
}

const PanelHeader = ({
  title,
  desc,
  buttonIcon: ButtonIcon,
  buttonText,
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
      {
        buttonText && <div
          className="ml-auto"
        >
          <button onClick={() => { }} className="flex items-center cursor-pointer px-2 py-1 border border-blue-500 rounded-md text-sm bg-blue-500 text-white hover:bg-blue-400 hover:border-blue-400 transition-colors">
            {ButtonIcon && <ButtonIcon className="w-4 h-4 mr-2.5" />}
            <div>{buttonText}</div>
          </button>
        </div>
      }
    </div>
  );
};

export default PanelHeader;