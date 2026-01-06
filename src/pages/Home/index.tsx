import { ResumeProvider } from '@/context/ResumeContext'
import styles from './index.module.css'
import Editor from './components/Editor'
import Preview from './components/Preview'
// import { getInitialResumeState } from '@/utils/utils'
import { defaultResume } from '@/types/resume'

const Index = () => {
  const initialState = defaultResume
  return (
    <ResumeProvider initialState={initialState}>
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
    </ResumeProvider>
  )
}

export default Index