import type { Resume } from "@/types/resume";

export function copyToClipboard(text: string) {
  const textarea = document.createElement("textarea"); //创建临时的textarea元素
  textarea.value = text; //设置要复制的内容为指定的文本
  document.body.appendChild(textarea); //添加到页面上
  textarea.select(); //选中文本区域
  try {
    const successful = document.execCommand('copy'); //执行复制命令
    const msg = successful ? '成功' : '失败';
    console.log('已复制到剪贴板', msg);
  } catch (err) {
    console.error('无法复制到剪贴板', err);
  } finally {
    document.body.removeChild(textarea); //移除临时的textarea元素
  }
}

export function changeRootStyle(name: string, value: string) {
  document.documentElement.style.setProperty(name, value);
}

export type ResumeHistoryType = Resume & { timestamp: number }

export const ResumeStorage = (() => {
  const KEY = "resume"
  const MAX_LENGTH = 5

  function safeParse(value: string) {
    try {
      const parsed = JSON.parse(value)
      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  }

  function getQueue() {
    const raw = localStorage.getItem(KEY)
    return raw ? safeParse(raw) : []
  }

  function setQueue(list: ResumeHistoryType[]) {
    localStorage.setItem(KEY, JSON.stringify(list))
  }

  function add(item: Resume) {
    const queue = getQueue()

    queue.push({ ...item, timestamp: Date.now() })

    if (queue.length > MAX_LENGTH) {
      queue.shift()
    }

    setQueue(queue)
    return queue
  }

  function clear() {
    localStorage.removeItem(KEY)
  }

  return {
    get: getQueue,
    add,
    clear
  }
})()


export function formatTime(timestamp:number) {
  const date = new Date(timestamp)

  const Y = date.getFullYear()
  const M = String(date.getMonth() + 1).padStart(2, "0")
  const D = String(date.getDate()).padStart(2, "0")
  const h = String(date.getHours()).padStart(2, "0")
  const m = String(date.getMinutes()).padStart(2, "0")
  const s = String(date.getSeconds()).padStart(2, "0")

  return `${Y}-${M}-${D} ${h}:${m}:${s}`
}
