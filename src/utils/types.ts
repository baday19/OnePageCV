interface ConfigDataProps {
  themeColor: string;
  borderColor: string;
  lineHeight: number;
  lineSpacing: number;
}

const defaultConfigData: ConfigDataProps = {
  themeColor: '#4183FF',
  borderColor: '#f7faff',
  lineHeight: 5.4,
  lineSpacing: 1.2,
}

type CssNamedColor = 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'purple' | 'indigo' | 'pink'

export type { ConfigDataProps, CssNamedColor }
export { defaultConfigData }