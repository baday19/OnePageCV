const baseProfileModule = {
  componentType: "commonProfileModule",
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
    option: {
      hasSchoolIcon: true,
      hasPhoto: true,
      valuePosition: 'center',
      photoPosition: 'right'
    }
  },
}


const baseEducationModule = {
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
    option: {
      type: 0
    }
  }
}

const baseWrokModule = {
  componentType: "commonExperienceModule",
  props: {
    title: "实习经历",
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
    option: {
      type: 0
    }
  }
}


function applyVariant(base: any, variant: any) {
  return {
    ...base,
    props: {
      ...base.props,
      ...variant,
      option: {
        ...base.props.option,
        ...variant.option
      }
    }
  }
}
