export function changeRootStyle(name: string, value: string) {
  document.documentElement.style.setProperty(name, value);
}

export function getValueByPath(obj: any, path: string) {
  return path
    .replace(/\[(\w+)\]/g, '.$1')
    .split('.')
    .reduce((acc, key) => acc?.[key], obj)
}

export function resolveValue(template: string, obj: any) {
  return template.replace(/\{\{(.+?)\}\}/g, (_, path) => {
    return getValueByPath(obj, path.trim()) ?? ''
  })
}
