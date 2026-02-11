import type { ResumeSchema } from '@/components/Renderer/core';
import type { ConfigDataProps } from '@/types/config';


export interface TemplateProps {
  title: string;
  tags: string[];
  picture: string;
  resume: Omit<ResumeSchema, 'id'>;
  config: ConfigDataProps;
}

const templates: TemplateProps[] = Object.values(
  import.meta.glob('./template*.ts', {
    eager: true,
    import: 'default'
  })
);


export default templates;