

interface CommonExperienceLineProps {
  value: string[];
}

const CommonExperienceLine = ({ value }: CommonExperienceLineProps) => {
  return (
    <div
      className="flex justify-between"
      style={{
        marginBottom: 'var(--paper-line-spacing)',
        lineHeight: `var(--paper-line-height)`,
      }}
    >
      {
        value.map((line, index) => {
          return (
            <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
          )
        })
      }
    </div>
  )
}

export default CommonExperienceLine;