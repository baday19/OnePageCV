export interface PaperConfig {
  mainInfoPosition: boolean;
  showHeaderLine: boolean;
  hasPhoto: boolean;
  titleType: number;
  // 行高
  lineHeight: number;
  lineSpacing: number;
  // 主题色
  themeColor: string;
  // 副色
  borderColor: string;
}

export interface BaseInfo {
  name: string
  photo: string
  schoolLogo?: string
  content?: string[]
}


export interface ExperienceContentItem {
  type: 'singleColumn' | 'doubleColumn' | 'sequence'
  value: string[]
}

export interface ExperienceItem {
  title: string
  content: ExperienceContentItem[]
}

export type Experiences = ExperienceItem[]

export interface Resume {
  version: number,
  paperConfig: PaperConfig,
  baseInfo: BaseInfo,
  experiences: Experiences
}

export const defaultResume: Resume = {
  version: 1,
  paperConfig: {
    mainInfoPosition: true,
    showHeaderLine: true,
    hasPhoto: true,
    titleType: 0,
    lineHeight: 5.3,
    lineSpacing: 1.0,
    themeColor: '#4183FF',
    borderColor: '#f7faff'
  },
  baseInfo: {
    name: 'Gooday',
    photo: '',
    schoolLogo: '',
    content: ['13212349876 | myname@zju.edu.cn', '<a href="https://github.com/baday19">github.com/baday19</a>']
  },
  experiences: [
    {
      title: '校园经历',
      content: [
        { type: 'doubleColumn', value: ['浙江大学', '2023年09月 - 2026年03月'] },
        { type: 'singleColumn', value: ['软件工程 硕士'] },
        { type: 'singleColumn', value: ['荣誉奖项: 好罡创新创业奖学金、一等学业优秀奖助金、优秀研究生、五好研究生'] },
        { type: 'doubleColumn', value: ['西北工业大学', '2019年09月 - 2023年07月'] },
        { type: 'singleColumn', value: ['软件工程 本科'] },
        { type: 'singleColumn', value: ['荣誉奖项: 优秀毕业⽣、科为奖学⾦、⼀等奖学⾦、全国软件测试⼤赛⼆等奖、中国⼤学⽣计算机设计⼤赛省级⼀等奖'] },
      ]
    },
    {
      title: '实习经历',
      content: [
        { type: 'doubleColumn', value: ['腾讯计算机系统有限公司', '2025年06月 - 2025年08月'] },
        { type: 'doubleColumn', value: ['云与智慧产业事业群-马赛克', '深圳'] },
        { type: 'sequence', value: ['为提⾼腾讯云产品马赛克马赛克的提及率和推荐率，参与马赛克马赛克系统设计。构建了⼀套从马赛克马赛克、马赛克马赛克到马赛克马赛克的⼯作流，平均提⾼了腾讯云产品在马赛克中*%的提及率和*%的推荐率。'] },
        { type: 'sequence', value: ['为提⾼模型⽣成的马赛克的质量，提出了⼀种基于多模型迭代反馈的⽣成优化⽅法。通过马赛克马赛克马赛克马赛克评分反馈来迭代⽣成，增强了马赛克的内容真实性、深度和推⼴能⼒，显著提升了⽣成内容的整体表现和效果。'] },
        { type: 'doubleColumn', value: ['蚂蚁科技集团股份有限公司', '2024年09月 - 2025年04月'] },
        { type: 'doubleColumn', value: ['平台技术事业群-马赛克', '杭州'] },
        { type: 'sequence', value: ['为解决马赛克马赛克在马赛克任务上存在适配性不⾜的问题，提出⼀种基于马赛克马赛克的⽅法，提升马赛克马赛克马赛克的准确性。相关成果已发表于马赛克马赛克领域顶刊并申请发明专利。'] },
        { type: 'sequence', value: ['为评估和优化马赛克中现有的马赛克马赛克修复⽅法的性能，设计了统⼀的性能评估⼿段，通过⾃动化收集与⼈⼯分析的⽅法构建⾼质量的马赛克马赛克测试数据集。'] },
      ]
    },
    {
      title: '科研经历',
      content: [
        { type: 'doubleColumn', value: ['NoCode-Bench: A Benchmark for Evaluating Natural Language-Driven Feature Addition', '2024年12⽉ - 2025年07⽉'] },
        { type: 'sequence', value: ['问题背景：现有benchmark主要评估⼤语⾔模型在软件开发中的错误修复任务，未涉及⽆代码开发场景或功能增加任务。'] },
        { type: 'sequence', value: ['研究内容：1）提出了专⻔设计⽤于评估⽆代码功能增强任务的NoCode-bench，填补了现有软件⼯程benchmark的重要空⽩;2）提供了⼀个系统的五阶段构建流程，确保基准测试的质量和可靠性，并提供了⼀个经过⼈⼯验证的⼦集，适⽤于有限资源下的轻量级评估; 3）对多个先进的⼤语⾔模型进⾏了全⾯评估，从定量和定性⻆度分析其性能，识别了影响模型表现的关键因素。'] },
        { type: 'sequence', value: ['相关成果：作为第⼀作者，相关论⽂xxx (CCF-A) 在投。'] },
        { type: 'doubleColumn', value: ['Enhancing Project-Specific Code Completion by Inferring Internal API Information', '2024年08⽉ - 2025年04⽉'] },
        { type: 'sequence', value: ['问题背景：现有的项⽬特定代码补全⽅法依赖语⾔模型和相似度匹配，难以准确理解项⽬内部复杂的API结构和上下⽂依赖。'] },
        { type: 'sequence', value: ['研究内容：1）提出了⼀种基于内部API推断的代码补全⽅法和框架，增强了代码补全模型的准确性; 2）构建了⼀个名为ProjBench的测试集，它包含了最新的⼤规模真实项⽬，并且通过静态分析⼿段尽可能对⻬了现实场景; 3）我们的⽅法在ProjBench和CrossCodeEval上的实验结果显⽰，代码和标识符精确匹配分别平均提⾼了22.72%和18.31%。'] },
        { type: 'sequence', value: ['相关成果：作为第⼀作者，相关论⽂发表在xxx (CCF-A)。'] },
      ]
    },
    {
      title: '专业技能',
      content: [
        { type: 'sequence', value: ['熟悉Python、JavaScript，了解Transformer结构，了解LLM微调和RAG'] },
        { type: 'sequence', value: ['熟悉Linux的使⽤，了解docker和nginx等⼯具的使⽤'] },
        { type: 'sequence', value: ['熟练使⽤Git⼯具，有丰富的团队协作开发经验'] },
        { type: 'sequence', value: ['掌握计算机基础知识，如计算机⽹络、计算机操作系统等'] },
      ]
    },
  ]
}