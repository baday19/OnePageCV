export function changeRootStyle(name: string, value: string) {
  document.documentElement.style.setProperty(name, value);
}