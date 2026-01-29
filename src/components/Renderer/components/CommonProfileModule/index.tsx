
interface OptionProps {
  photoPosition?: 'left' | 'right';
  valuePosition?: 'left' | 'center' | 'right';
  hasSchoolIcon?: boolean;
  hasPhoto?: boolean;
}

interface CommonProfileModuleProps {
  name?: string;
  schoolIcon?: string;
  photo?: string;
  value?: string[][];
  option: OptionProps;
}

const CommonProfileModule = ({
  name,
  schoolIcon,
  photo,
  value,
  option = {
    photoPosition: 'right',
    valuePosition: 'center',
    hasSchoolIcon: false,
    hasPhoto: true,
  }
}: CommonProfileModuleProps) => {

  const valuePositionClass = option.valuePosition === 'left' ? 'items-start' : (option.valuePosition === 'center' ? 'items-center' : 'items-end');

  const schoolIconElement = () => {
    if (option.valuePosition === 'center') {
      return (
        <div
          className="h-[13mm]"
          style={{
            width: 'var(--photo-width)',
          }}
        >
          {option.hasSchoolIcon && <img
            className="h-full max-w-none"
            src={schoolIcon} alt="校徽" />}
        </div>
      )
    } else if (option.hasSchoolIcon) {
      return (
        <div
          className="h-[13mm]"
          style={{
            width: 'var(--photo-width)',
          }}
        >
          <img
            className="h-full max-w-none"
            src={schoolIcon} alt="校徽" />
        </div>
      )
    }
  }

  const photoElement = () => {
    // value center时 需要校徽的div，不显示img
    if (option.valuePosition === 'center') {
      return (
        <div
          className="overflow-hidden"
          style={{
            width: 'var(--photo-width)',
            height: option.hasPhoto ? 'var(--photo-height)' : 'auto',
          }}
        >
          {
            option.hasPhoto && (
              photo
                ? <img className="w-full" src={photo} alt="照片" />
                : <div className="w-full h-full flex items-center justify-center text-white" style={{ backgroundColor: 'var(--theme-color)' }}>照片</div>
            )
          }
        </div>
      )
    } else if (option.hasPhoto) {
      return (
        <div
          className="overflow-hidden"
          style={{
            width: 'var(--photo-width)',
            height: 'var(--photo-height)',
          }}
        >
          {
            photo
              ? <img className="w-full" src={photo} alt="照片" />
              : <div className="w-full h-full flex items-center justify-center text-white" style={{ backgroundColor: 'var(--theme-color)' }}>照片</div>
          }
        </div>
      )
    }
  }

  return (
    <div
      className="mb-[3mm]"
    >
      {/* 顶部线 */}
      <div
        className="h-[5mm] w-full"
        style={{
          backgroundColor: 'var(--theme-color)'
        }}
      />
      {/* 个人信息区域 */}
      <div
        className={`pt-[8mm] px-[8mm] gap-[8mm] flex ${option.photoPosition === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
      >
        {/* 校徽 */}
        {schoolIconElement()}
        {/* 文字信息 */}
        <div
          className={`flex-1 flex flex-col ${valuePositionClass}`}
        >
          <div
            className="font-bold"
            style={{
              fontSize: 'var(--large-font-size)',
              lineHeight: 'var(--paper-line-height)',
              marginBottom: 'calc(var(--paper-line-spacing) + .2mm)',
            }}
          >
            {name}
          </div>
          {
            value?.map((item, index) => (
              <div
                className="a-reset"
                key={index}
                style={{
                  fontSize: 'var(--small-font-size)',
                  lineHeight: 'calc(var(--paper-line-height) - 1.2mm)',
                }}
                dangerouslySetInnerHTML={{ __html: item[0] }}
              />
            ))
          }
        </div>
        {/* 头像 */}
        {photoElement()}
      </div>

    </div>
  )
}

const CommonProfileModuleEditor = () => {
  return (<div>CommonProfileModuleEditor</div>)
}

export {
  CommonProfileModule,
  CommonProfileModuleEditor
};