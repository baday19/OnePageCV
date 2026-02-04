import type { NodeSchema, NodeType } from "@/components/Renderer/core";

export interface StyleProps {
  title: string;
  componentType: NodeType;
  picture: string;
}

export const profileStyleList: StyleProps[] = [
  {
    title: '校徽-信息-照片',
    componentType: 'commonProfileModule0',
    picture: 'https://files.wondercv.com/APP/cv_editor/cdnImage/profile_show_attr_name/0.png',
  },
  {
    title: '信息',
    componentType: 'commonProfileModule1',
    picture: 'https://files.wondercv.com/APP/cv_editor/cdnImage/profile_show_attr_name/0.png',
  },
  {
    title: '信息-照片',
    componentType: 'commonProfileModule2',
    picture: 'https://files.wondercv.com/APP/cv_editor/cdnImage/profile_show_attr_name/0.png',
  },
  {
    title: '照片-信息',
    componentType: 'commonProfileModule3',
    picture: 'https://files.wondercv.com/APP/cv_editor/cdnImage/profile_show_attr_name/0.png',
  },
  {
    title: '校徽-信息-照片(无强调线)',
    componentType: 'commonProfileModule4',
    picture: 'https://files.wondercv.com/APP/cv_editor/cdnImage/profile_show_attr_name/0.png',
  },
  {
    title: '信息(无强调线)',
    componentType: 'commonProfileModule5',
    picture: 'https://files.wondercv.com/APP/cv_editor/cdnImage/profile_show_attr_name/0.png',
  },
  {
    title: '信息-照片(无强调线)',
    componentType: 'commonProfileModule6',
    picture: 'https://files.wondercv.com/APP/cv_editor/cdnImage/profile_show_attr_name/0.png',
  },
  {
    title: '照片-信息(无强调线)',
    componentType: 'commonProfileModule7',
    picture: 'https://files.wondercv.com/APP/cv_editor/cdnImage/profile_show_attr_name/0.png',
  }
]


export const experienceStyleList: StyleProps[] = [
  {
    title: '简约',
    componentType: 'commonExperienceModule0',
    picture: 'https://files.wondercv.com/APP/cv_editor/cdnImage/module_format/default-stereo.png',
  },
  {
    title: '简约1',
    componentType: 'commonExperienceModule1',
    picture: 'https://files.wondercv.com/APP/cv_editor/cdnImage/module_format/default-stereo.png',
  },
]

export type ModuleType = 'work' | 'project' | 'education' | 'skill' | 'profile' | 'custom'

const baseStyles: Record<ModuleType, Omit<NodeSchema, 'id'>> = {
  profile: {
    componentType: "commonProfileModule0",
    props: {
      name: "{{name || OnePageCV}}",
      photo: '',
      schoolIcon: '',
      items: [
        {
          type: 'single',
          value: ['{{phone || 19977883344}} | {{email || onepagecv@zju.edu.cn}}']
        },
        {
          type: 'single',
          value: ['<a href="{{homepage || github.com/baday19}}">{{homepage || github.com/baday19}}</a>']
        }
      ],
    },
  },
  education: {
    componentType: "commonExperienceModule",
    props: {
      title: "校园经历",
      items: [
        {
          type: 'double',
          value: ['<b>{{education[0].school || 快乐大学}}</b>', '{{education[0].start || 2023.09}} - {{education[0].end || 2026.03}}']
        },
        {
          type: 'single',
          value: ['{{education[0].major}} {{education[0].college}} {{education[0].degree}}']
        },
        {
          type: 'double',
          value: ['<b>{{education[1].school || 开心大学}}</b>', '{{education[1].start || 2019.09}} - {{education[1].end || 2023.07}}']
        },
        {
          type: 'single',
          value: ['{{education[1].major}} {{education[1].college}} {{education[1].degree}}']
        }
      ],
    }
  },
  work: {
    componentType: "commonExperienceModule0",
    props: {
      title: "工作经历",
      items: [
        {
          type: 'double',
          value: ['<b>{{work[0].school || 快乐大学}}</b>', '{{education[0].start || 2023.09}} - {{education[0].end || 2026.03}}']
        },
        {
          type: 'single',
          value: ['{{education[0].major}} {{education[0].college}} {{education[0].degree}}']
        },
        {
          type: 'double',
          value: ['<b>{{education[1].school || 开心大学}}</b>', '{{education[1].start || 2019.09}} - {{education[1].end || 2023.07}}']
        },
        {
          type: 'single',
          value: ['{{education[1].major}} {{education[1].college}} {{education[1].degree}}']
        }
      ],
    }
  },
  'project': {},
  'skill': {},
  'custom': {},
};


const applyVariant = (base: any, variant: any) => {
  return {
    ...base,
    ...variant,
    props: {
      ...base.props,
      ...variant.props,
    }
  }
}

export const getComponent = (module: ModuleType, componentType: NodeType) => {
  return applyVariant(baseStyles[module], {componentType, id: Date.now().toString()});
}