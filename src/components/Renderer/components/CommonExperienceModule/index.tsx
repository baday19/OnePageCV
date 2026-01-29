import CommonExperienceLine from "../CommonExperienceLine";

interface OptionProps {
  type: 0 | 1;
}

interface CommonExperienceModuleProps {
  title: string;
  option: OptionProps;
  value: string[][];
}

const CommonExperienceModule = ({ title, option = { type: 0 }, value }: CommonExperienceModuleProps) => {
  const { type } = option;

  const typeStyles = type === 0 ? {
    backgroundColor: 'var(--border-color)',
    borderLeft: '2mm solid var(--theme-color)',
    paddingLeft: '4mm'
  } : {
    borderBottom: '1px solid var(--theme-color)'
  };

  return (
    <div
      className="px-[8mm]"
      style={{ marginTop: 'calc(var(--paper-line-spacing) + 1mm)' }}
    >
      <div
        className="font-bold flex items-center"
        style={{
          fontSize: 'var(--medium-font-size)',
          height: 'calc(var(--paper-line-height) + 3mm)',
          color: 'var(--theme-color)',
          marginBottom: 'var(--paper-line-spacing)',
          ...typeStyles
        }}
      >{title}</div>
      {
        value.map((item: string[], index: number) => {
          return (
            <CommonExperienceLine key={index} value={item} />
          )
        })
      }
    </div>
  )
}

const CommonExperienceModuleEditor = ({
  title, 
  option, 
  value
}: CommonExperienceModuleProps) => {
  return (
    <div>{title}</div>
  )
}

export {
  CommonExperienceModule,
  CommonExperienceModuleEditor
};