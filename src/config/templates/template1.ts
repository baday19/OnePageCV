import type { TemplateProps } from ".";
import Picture from '@/assets/images/template_1.png'

const template: TemplateProps = {
  "title": "研究生算法简历",
  "tags": ['研究生', '算法'],
  "picture": Picture,
  "resume": {
    "children": [
      {
        "id": 1770736997381,
        "componentType": "commonProfileModule0",
        "props": {
          "name": "OnePageCV",
          "photo": "",
          "items": [
            {
              "type": "single",
              "value": [
                "19977883344 | dengle@zju.edu.cn"
              ]
            },
            {
              "type": "single",
              "value": [
                "<a href=\"https://github.com/baday19\" target=\"_blank\">homepage</a>"
              ]
            }
          ]
        }
      },
      {
        "id": 1770737016945,
        "componentType": "commonExperienceModule0",
        "props": {
          "title": "教育经历",
          "items": [
            {
              "type": "double",
              "value": [
                "<b>浙江大学</b>",
                "2023年09月 - 2025年04月"
              ]
            },
            {
              "type": "single",
              "value": [
                "软件工程 硕士"
              ]
            },
            {
              "type": "rich",
              "value": [
                "<p>荣誉奖项: 优秀毕业研究生、好罡创新创业奖学金、一等学业优秀奖助金、优秀研究生、五好研究生</p>"
              ]
            },
            {
              "type": "double",
              "value": [
                "<b>西北工业大学</b>",
                "2019年09月 - 2023年07月"
              ]
            },
            {
              "type": "single",
              "value": [
                "软件工程 本科"
              ]
            },
            {
              "type": "rich",
              "value": [
                "<p>荣誉奖项: 优秀毕业⽣、科为奖学⾦、⼀等奖学⾦、全国软件测试⼤赛⼆等奖、中国⼤学⽣计算机设计⼤赛省级⼀等奖</p>"
              ]
            }
          ]
        }
      },
      {
        "id": 1770737020720,
        "componentType": "commonExperienceModule0",
        "props": {
          "title": "工作经历",
          "items": [
            {
              "type": "double",
              "value": [
                "<b>XX计算机系统有限公司</b>",
                "2025年06月 - 2025年08月"
              ]
            },
            {
              "type": "double",
              "value": [
                "<b>XXX产业事业群-XX部门</b>",
                "大模型应用"
              ]
            },
            {
              "type": "rich",
              "value": [
                "<ul><li>为提高XX产品在AI生成答案中的提及率和推荐率，参与XX(GEO)系统设计。构建了一套从偏好平台探索、偏好内容分析到文章生成的工作流，平均提高XX产品在AI回答中19%的提及率和13%的推荐率。</li><li>简短介绍公司与自己负责的任务，分条罗列在什么项目中，通过某些动作或技能达到可量化的结果。</li></ul>"
              ]
            },
            {
              "type": "double",
              "value": [
                "<b>XX科技集团股份有限公司</b>",
                "2024年09月 - 2025年04月"
              ]
            },
            {
              "type": "double",
              "value": [
                "<b>XXX产业事业群-XX部门</b>",
                "学术研究"
              ]
            },
            {
              "type": "rich",
              "value": [
                "<ul><li>为解决通用代码补全在项目特定任务上存在适配性不足的问题，提出一种基于项目内APl推断的方法，提升项目特定代码补全任务的准确性。相关成果已发表于国际软件工程领域顶刊并申请发明专利。</li><li>简短介绍公司与自己负责的任务，分条罗列在什么项目中，通过某些动作或技能达到可量化的结果。</li></ul>"
              ]
            }
          ]
        }
      },
      {
        "id": 1770737045627,
        "componentType": "commonExperienceModule0",
        "props": {
          "title": "科研经历",
          "items": [
            {
              "type": "double",
              "value": [
                "<b>Enhancing Project-Specific Code Completion by Inferring Internal APl Information</b>",
                "2024年08月 - 2025年04月"
              ]
            },
            {
              "type": "rich",
              "value": [
                "<p><strong>问题背景：</strong>现有的项目特定代码补全方法依赖语言模型和相似度匹配，难以准确理解项目内部复杂的API结构和上下文依赖。</p><p><strong>研究内容：</strong>:1)提出了一种基于内部API推断的代码补全方法和框架，增强了代码补全模型的准确性;2)构建了一个名为ProjBench的测试集，它包含了最新的大规模真实项目，并且通过静态分析手段尽可能对齐了现实场景;3)我们的方法在ProjBench和CrossCodeEval上的实验结果显示，代码和标识符精确匹配分别平均提高了XX%和XX%。</p><p><strong>相关成果：</strong>作为第一作者，相关论文发表在TSE(CCF-A)。</p>"
              ]
            },
            {
              "type": "double",
              "value": [
                "<b>论文名称或项目名称</b>",
                "YYYY年MM月-YYYY年MM月"
              ]
            },
            {
              "type": "rich",
              "value": [
                "<p><strong>问题背景</strong>：概述当前技术中的挑战，指出现有方法的局限性及其无法有效解决的具体问题。可以包括为什么这个问题重要，解决它会带来什么好处。</p><p><strong>研究内容</strong>：阐明你提出的创新方法、框架或技术，如何解决上述问题。包括研究的核心方法、创新点、技术细节，以及如何进行验证（如实验设计、数据集等）。</p><p><strong>相关成果</strong>：总结研究的实验结果，展示方法的有效性和优势，量化提升效果（如提高精度、效率等），并指出这些成果的实际应用或学术价值，如论文发表、行业应用、工具开发等。</p>"
              ]
            }
          ]
        }
      },
      {
        "id": 1770737049442,
        "componentType": "commonExperienceModule0",
        "props": {
          "title": "专业技能",
          "items": [
            {
              "type": "rich",
              "value": [
                "<ul><li>熟悉Python以及Pytorch框架，对常用API有深入了解，并在项目中熟练使用；了解机器学习相关算法，如决策树、随机森林等。</li><li>熟悉RL，对PPO、DQN等算法有深入理解，并灵活运用到项目实践中。</li><li>熟悉P-tuning、LoRA等参数高效微调方法，了解Qwen、Deepseek等常见开源模型，熟悉RLHF、DPO等偏好对齐方法。</li><li>了解RAG、Agent等LLM应用技术，了解DeepSpeed、Megatron分布式训练框架。</li></ul>"
              ]
            }
          ]
        }
      }
    ],
    "metadata": {
      "default": {
        "experience": "commonExperienceModule0",
        "profile": "commonProfileModule0"
      }
    }
  },
  "config": {
    "themeColor": "#4183FF",
    "borderColor": "#f7faff",
    "lineHeight": 5.2,
    "lineSpacing": 1,
    "fontFamily": "\"PingFang SC\", \"Microsoft YaHei\", sans-serif"
  }
};

export default template;