
interface PanelHeaderProps {
  title: string;
  desc: string;
}

const PanelHeader = ({
  title,
  desc
}: PanelHeaderProps) => {
  return (
    <div>
      <div className="text-lg font-bold mb-2">
        {title}
      </div>
      <div className="text-sm text-gray-500">
        {desc}
      </div>
    </div>
  )
}

export default PanelHeader