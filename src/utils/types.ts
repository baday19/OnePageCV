interface ConfigDataProps {
  themeColor: string;
  borderColor: string;
  lineHeight: number;
  lineSpacing: number;
  fontFamily: string;
}

const defaultConfigData: ConfigDataProps = {
  themeColor: '#4183FF',
  borderColor: '#f7faff',
  lineHeight: 5.4,
  lineSpacing: 1.2,
  fontFamily: `"PingFang SC", "Microsoft YaHei", sans-serif`
}

type CssNamedColor = 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'purple' | 'indigo' | 'pink'

export type { ConfigDataProps, CssNamedColor }
export { defaultConfigData }