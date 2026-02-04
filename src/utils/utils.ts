import type { ModuleType } from "@/pages/Editor/template";
import type { UserInfoProps } from "@/types/user";

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
  return template.replace(/\{\{(.+?)\}\}/g, (_, expression) => {
    const [path, defaultValue] = expression.split('||').map((s: string) => s.trim())
    const value = getValueByPath(obj, path)
    return (value !== undefined && value !== null) ? value : (defaultValue ?? '')
  })
}


export function buildPresetPropsByUserInfo(moduleType: ModuleType, userInfo: UserInfoProps) {
  if (moduleType === 'profile') {
    const { name, phone, email, homepage } = userInfo.profile
    const data = {
      name: name,
      photo: '',
      schoolIcon: '',
      items: [
        {
          type: 'single',
          value: [`${phone} | ${email}`]
        },
        {
          type: 'single',
          value: [`<a href="${homepage}" target="_blank">${homepage}</a>`]
        }
      ],
    };
    return data;
  } else if (moduleType === 'education') {
    const education = userInfo.education;
    const items = education.flatMap((item) => {
      return [
        {
          type: 'double',
          value: [`<b>${item.school}</b>`, `${item.start} - ${item.end}`]
        },
        {
          type: 'single',
          value: [`${item.major} ${item.degree}`]
        },
        {
          type: 'rich',
          value: [item.content]
        },
      ]
    })
    return {
      title: '教育经历',
      items: items
    };
  } else if (moduleType === 'work') {
    const work = userInfo.work;
    const items = work.flatMap((item) => {
      return [
        {
          type: 'double',
          value: [`<b>${item.company}</b>`, `${item.start} - ${item.end}`]
        },
        {
          type: 'double',
          value: [`<b>${item.department}</b>`, `${item.position}`]
        },
        {
          type: 'rich',
          value: [item.content]
        }
      ]
    })
    return {
      title: '工作经历',
      items: items
    }
  } else if (moduleType === 'project') {
    const project = userInfo.project;
    const items = project.flatMap((item) => {
      return [
        {
          type: 'double',
          value: [`<b>${item.name}</b>`, `${item.start} - ${item.end}`]
        },
        {
          type: 'double',
          value: [`${item.role} ${item.department}`, `${item.city}`]
        },
        {
          type: 'rich',
          value: [item.content]
        }
      ]
    })
    return {
      title: '项目经历',
      items: items
    }
  } else if (moduleType === 'skill') {
    const skill = userInfo.skill;
    return {
      title: '专业技能',
      items: [
        {
          type: 'rich',
          value: [skill]
        }
      ]
    }
  } else {
    return {
      title: '自定义',
      items: []
    }
  }
}