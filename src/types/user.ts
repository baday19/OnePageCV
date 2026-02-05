export interface Profile {
  name: string;
  phone: string;
  homepage: string;
  email: string;
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
  major: string;
  college: string;
  content: string;
}

export interface Work {
  company: string;
  position: string;
  start: string;
  end: string;
  city: string;
  department: string;
  content: string;
}

export interface Project {
  name: string;
  role: string;
  department: string;
  city: string;
  start: string;
  end: string;
  content: string;
}

export type Skill = string;

export interface UserInfoProps {
  profile: Profile;
  education: Education[];
  work: Work[];
  project: Project[];
  skill: string;
}
