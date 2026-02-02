
interface BlockTitleProps {
  text: string;
  className?: string;
  iconClassName?: string;
}


const BlockTitle = ({
  text,
  className,
  iconClassName,
}: BlockTitleProps) => {

  return (
    <div
      className={`${className} text-base font-medium flex items-center gap-2`}
    >
      {
        iconClassName && <div className={`w-2 h-2 rounded-full ${iconClassName}`} />
      }
      {text}
    </div>
  )
}

export default BlockTitle