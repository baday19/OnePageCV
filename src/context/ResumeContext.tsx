/* eslint-disable react-refresh/only-export-components */
// src/context/ResumeContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react'
import type { PaperConfig, BaseInfo, Experiences } from '@/types/resume'

interface ResumeContextType {
  paperConfig: PaperConfig
  setPaperConfig: (val: PaperConfig) => void
  baseInfo: BaseInfo
  setBaseInfo: (val: BaseInfo) => void
  experiences: Experiences
  setExperiences: (val: Experiences) => void
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined)

export function ResumeProvider({
  children,
  initialState
}: {
  children: ReactNode,
  initialState: { paperConfig: PaperConfig, baseInfo: BaseInfo, experiences: Experiences }
}) {
  const [paperConfig, setPaperConfig] = useState<PaperConfig>(initialState.paperConfig)
  const [baseInfo, setBaseInfo] = useState<BaseInfo>(initialState.baseInfo)
  const [experiences, setExperiences] = useState<Experiences>(initialState.experiences)

  return (
    <ResumeContext.Provider
      value={{
        paperConfig,
        baseInfo,
        experiences,
        setPaperConfig,
        setBaseInfo,
        setExperiences,
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
}

export function useResume() {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider')
  }
  return context
}
