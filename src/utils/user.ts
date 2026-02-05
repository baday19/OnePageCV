import type { UserInfoProps } from "@/types/user";

const defaultUserInfo: UserInfoProps = {
  profile: {
    name: 'OnePageCV',
    phone: '19977883344',
    email: 'dengle@zju.edu.cn',
    homepage: 'https://github.com/baday19',
  },
  education: [
    {
      school: '浙江大学',
      start: '2023年09月',
      end: '2025年04月',
      major: '软件工程',
      degree: '硕士',
      college: '软件学院',
      content: '<p>荣誉奖项: 优秀毕业研究生、好罡创新创业奖学金、一等学业优秀奖助金、优秀研究生、五好研究生</p>'
    },
    {
      school: '西北工业大学',
      start: '2019年09月',
      end: '2023年07月',
      major: '软件工程',
      degree: '本科',
      college: '软件学院',
      content: '<p>荣誉奖项: 优秀毕业⽣、科为奖学⾦、⼀等奖学⾦、全国软件测试⼤赛⼆等奖、中国⼤学⽣计算机设计⼤赛省级⼀等奖</p>'
    }
  ],
  work: [
    {
      company: 'XX计算机系统有限公司',
      start: '2025年06月',
      end: '2025年08月',
      city: '深圳',
      department: 'XXX产业事业群-XX部门',
      position: '大模型应用',
      content: '<p>简短介绍公司与自己负责的任务，分条罗列在什么项目中，通过某些动作或技能达到可量化的结果。</p>'
    },
    {
      company: 'XX科技集团股份有限公司',
      start: '2024年09月',
      end: '2025年04月',
      city: '杭州',
      department: 'XXX产业事业群-XX部门',
      position: '学术研究',
      content: '<p>简短介绍公司与自己负责的任务，分条罗列在什么项目中，通过某些动作或技能达到可量化的结果</p>'
    }
  ],
  project: [
    {
      name: 'XX项目',
      role: '算法工程师',
      department: '',
      city: '杭州',
      start: '2024年09月',
      end: '2025年04月',
      content: '<p>简短介绍公司与自己负责的任务，分条罗列在什么项目中，通过某些动作或技能达到可量化的结果</p>'
    }
  ],
  skill: "<ul><li>技能1</li><li>技能2</li></ul>"
};

const getUserInfo = () => {
  // 从localStorage中获取用户信息，如果没有则返回默认信息
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? JSON.parse(userInfo) : defaultUserInfo;
};

const setUserInfo = (userInfo: UserInfoProps) => {
  // 将用户信息保存到localStorage中
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

export {
  getUserInfo,
  setUserInfo
};