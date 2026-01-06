import styles from './index.module.css'
import { Button, ColorPicker, InputNumber, Select, Switch, Input, Upload } from 'antd';
import EditCard from '@/components/EditCard';
import { useResume } from '@/context/ResumeContext';
import { DeleteTwoTone, DownSquareTwoTone, UploadOutlined, UpSquareTwoTone } from '@ant-design/icons';
import type { RcFile } from 'antd/es/upload';
import type { ExperienceContentItem } from '@/types/resume';
import { changeRootStyle, copyToClipboard, formatTime, ResumeStorage, type ResumeHistoryType } from '@/utils/utils';
import { useEffect, useState } from 'react';

const ConfigWriter = () => {
  const { paperConfig, setPaperConfig } = useResume()

  return (
    <EditCard title='简历配置' initExpand={false}>
      <div className={styles.config}>
        {/* <div className={styles.form_item}>
          <div className={styles.item_label}>预设模板</div>
          <Select
            value={0}
            style={{ width: 120 }}
            options={[
              { value: 0, label: '模板1' },
              { value: 1, label: '模板2' },
              { value: 2, label: '模板3' },
              { value: 3, label: '模板4' },
            ]}
          />
        </div> */}
        <div className={styles.form_item}>
          <div className={styles.item_label}>头部布局居中（关闭后居左）</div>
          <Switch checked={paperConfig?.mainInfoPosition} onChange={() => {
            setPaperConfig({ ...paperConfig, mainInfoPosition: !paperConfig.mainInfoPosition })
          }} />
        </div>
        <div className={styles.form_item}>
          <div className={styles.item_label}>显示顶部线条</div>
          <Switch checked={paperConfig.showHeaderLine} onChange={() => {
            setPaperConfig({ ...paperConfig, showHeaderLine: !paperConfig.showHeaderLine })
          }} />
        </div>
        <div className={styles.form_item}>
          <div className={styles.item_label}>是否包含照片</div>
          <Switch checked={paperConfig.hasPhoto} onChange={() => {
            setPaperConfig({ ...paperConfig, hasPhoto: !paperConfig.hasPhoto })
          }} />
        </div>
        <div className={styles.form_item}>
          <div className={styles.item_label}>标题样式</div>
          <Select
            value={paperConfig.titleType}
            style={{ width: 120 }}
            options={[
              { value: 0, label: '样式1' },
              { value: 1, label: '样式2' },
              // { value: 2, label: '样式3' },
              // { value: 3, label: '样式4' },
            ]}
            onChange={(e: number) => {
              setPaperConfig({ ...paperConfig, titleType: e })
            }}
          />
        </div>
        <div className={styles.form_item}>
          <div className="styles.item_label">行距</div>
          <InputNumber placeholder="行距" type="text"
            value={paperConfig.lineSpacing}
            step={0.1}
            min={0}
            max={4}
            onChange={(e) => {
              if (e) {
                setPaperConfig({ ...paperConfig, lineSpacing: e })
                // changeRootStyle("--paper-line-spacing", `${e}mm`)
              }
            }}
          />
        </div>
        <div className={styles.form_item}>
          <div className="styles.item_label">行高</div>
          <InputNumber placeholder="行高" type="text"
            value={paperConfig.lineHeight}
            step={0.1}
            min={3}
            max={7}
            onChange={(e) => {
              if (e) {
                setPaperConfig({ ...paperConfig, lineHeight: e })
                // changeRootStyle("--paper-line-height", `${e}mm`)
              }
            }}
          />
        </div>
        <div className={styles.form_item}>
          <div className="styles.item_label">主题色</div>
          <ColorPicker value={paperConfig.themeColor} onChange={(_, hex) => {
            setPaperConfig({ ...paperConfig, themeColor: hex })
            // changeRootStyle("--theme-color", hex)
          }} />
        </div>
        <div className={styles.form_item}>
          <div className="styles.item_label">副色</div>
          <ColorPicker value={paperConfig.borderColor} onChange={(_, hex) => {
            setPaperConfig({ ...paperConfig, borderColor: hex })
            // changeRootStyle("--border-color", hex)
          }} />
        </div>
      </div>
      <div className={styles.tips}>
        <div>注：</div>
        <ul>
          <li>导出时可通过<u>调整行高和行距</u>保证一页简历</li>
          <li><u>左侧简历支持直接编辑</u>，可通过ctrl+b等指令实现局部加粗</li>
          <li><u>输入框支持html</u>，如使用{'<b></b>, <u></u>, <a></a>'}可实现加粗,下划线,超链接。</li>
          <li>{'<b>Hello</b>: 你好'} 会渲染为 <b>Hello</b>: 你好</li>
          <li>{'<a href="https://github.com/baday19">github</a>'} 会渲染为 <a href="https://github.com/baday19">github</a></li>
        </ul>
      </div>
    </EditCard>
  )
}

const InfoWriter = () => {
  const { baseInfo, setBaseInfo } = useResume()
  return (
    <EditCard title='基础信息' initExpand={false}>
      <div className={styles.form_item}>
        <div className={styles.item_label}>姓名:</div>
        <Input className={styles.input} onChange={(e) => {
          setBaseInfo({ ...baseInfo, name: e.target.value })
        }} placeholder="输入姓名" value={baseInfo.name} />
      </div>
      <div className={styles.form_item}>
        <div className={styles.item_label}>照片:</div>
        <Upload name="file" beforeUpload={(file: RcFile) => {
          const fileData = URL.createObjectURL(file)
          setBaseInfo({ ...baseInfo, photo: fileData })
          return false
        }} listType="picture" maxCount={1} onRemove={() => {
          setBaseInfo({ ...baseInfo, photo: '' })
        }}>
          {!baseInfo.photo && <Button icon={<UploadOutlined />}>点击上传</Button>}
        </Upload>
      </div>
      <div className={styles.form_item}>
        <div className={styles.item_label}>校徽:</div>
        <Upload name="file" beforeUpload={(file: RcFile) => {
          const fileData = URL.createObjectURL(file)
          setBaseInfo({ ...baseInfo, schoolLogo: fileData })
          return false
        }} listType="picture" maxCount={1} onRemove={() => {
          setBaseInfo({ ...baseInfo, schoolLogo: '' })
        }}>
          {!baseInfo.schoolLogo && <Button icon={<UploadOutlined />}>点击上传</Button>}
        </Upload>
      </div>
      {
        baseInfo.content?.map((item, index) => {
          return (
            <div className={styles.form_item}>
              <div className={styles.item_label}>信息行:</div>
              <Input className={styles.input} onChange={(e) => {
                const newContent = [...(baseInfo.content || [])];
                newContent[index] = e.target.value;
                setBaseInfo({ ...baseInfo, content: newContent })
              }} placeholder="输入信息" value={item} />
              <div className={styles.btn_area}>
                <UpSquareTwoTone className={styles.btn}
                  onClick={() => {
                    if (index === 0) return; // 第一行不能上移
                    const newContent = [...(baseInfo.content || [])];
                    [newContent[index - 1], newContent[index]] = [
                      newContent[index],
                      newContent[index - 1],
                    ];
                    setBaseInfo({ ...baseInfo, content: newContent });
                  }}
                />
                <DownSquareTwoTone className={styles.btn}
                  onClick={() => {
                    if (!baseInfo.content || index === baseInfo.content.length - 1) return; // 最后一行不能下移
                    const newContent = [...baseInfo.content];
                    [newContent[index], newContent[index + 1]] = [
                      newContent[index + 1],
                      newContent[index],
                    ];
                    setBaseInfo({ ...baseInfo, content: newContent });
                  }}
                />
                <DeleteTwoTone className={styles.btn} twoToneColor={'#FF4D4F'}
                  onClick={() => {
                    if (!baseInfo.content) return;
                    const newContent = baseInfo.content.filter(
                      (_, i) => i !== index
                    );
                    setBaseInfo({ ...baseInfo, content: newContent });
                  }}
                />
              </div>
            </div>
          )
        })
      }
      <div className={styles.form_item}>
        <Button style={{
          width: '100%'
        }} onClick={() => {
          const newContent = [...(baseInfo.content || []), '']
          setBaseInfo({ ...baseInfo, content: newContent })
        }}>
          添加信息行
        </Button>
      </div>
    </EditCard>
  )
}

const ExperiencesWriter = () => {
  const { experiences, setExperiences } = useResume()

  const handleLineMoveUp = (experienceIndex: number, index: number) => {
    if (index === 0) return
    const newExperiences = [...experiences]
    const newContent = [...newExperiences[experienceIndex].content]

    const temp = newContent[index]
    newContent[index] = newContent[index - 1]
    newContent[index - 1] = temp
    newExperiences[experienceIndex].content = newContent
    setExperiences(newExperiences)
  }

  const handleLineMoveDown = (experienceIndex: number, index: number) => {
    if (index === experiences[experienceIndex].content.length - 1) return
    const newExperiences = [...experiences]
    const newContent = [...newExperiences[experienceIndex].content]

    const temp = newContent[index]
    newContent[index] = newContent[index + 1]
    newContent[index + 1] = temp
    newExperiences[experienceIndex].content = newContent
    setExperiences(newExperiences)
  }

  const handleLineDelete = (experienceIndex: number, index: number) => {
    const newExperiences = [...experiences]
    const newContent = [...newExperiences[experienceIndex].content]
    newContent.splice(index, 1)
    newExperiences[experienceIndex].content = newContent
    setExperiences(newExperiences)
  }

  const handleExperienceMoveUp = (experienceIndex: number) => {
    if (experienceIndex === 0) return
    const newExperiences = [...experiences]
    const temp = newExperiences[experienceIndex]
    newExperiences[experienceIndex] = newExperiences[experienceIndex - 1]
    newExperiences[experienceIndex - 1] = temp
    setExperiences(newExperiences)
  }

  const handleExperienceMoveDown = (experienceIndex: number) => {
    if (experienceIndex === experiences.length - 1) return
    const newExperiences = [...experiences]
    const temp = newExperiences[experienceIndex]
    newExperiences[experienceIndex] = newExperiences[experienceIndex + 1]
    newExperiences[experienceIndex + 1] = temp
    setExperiences(newExperiences)
  }

  const handleExperienceDelete = (experienceIndex: number) => {
    const newExperiences = [...experiences]
    newExperiences.splice(experienceIndex, 1)
    setExperiences(newExperiences)
  }

  return (
    <>
      {experiences.map((experience, experienceIndex) => {
        return (
          <EditCard
            title={experience.title}
            showMore
            initExpand
            onMoveUp={() => handleExperienceMoveUp(experienceIndex)}
            onMoveDown={() => handleExperienceMoveDown(experienceIndex)}
            onDelete={() => handleExperienceDelete(experienceIndex)}
          >
            <div className={styles.form_item}>
              <div className={styles.item_label}>标题:</div>
              <Input
                className={styles.input}
                value={experience.title}
                onChange={(e) => {
                  const newExperiences = [...experiences]
                  newExperiences[experienceIndex] = { ...experience, title: e.target.value }
                  setExperiences(newExperiences)
                }}
                placeholder='输入信息'
              />
            </div>
            {
              experience.content.map((item, index) => (
                <ExperienceLine info={item} onChange={(info) => {
                  const newExperiences = [...experiences]
                  newExperiences[experienceIndex].content[index] = info
                  setExperiences(newExperiences)
                }}
                  onMoveUp={() => handleLineMoveUp(experienceIndex, index)}
                  onMoveDown={() => handleLineMoveDown(experienceIndex, index)}
                  onDelete={() => handleLineDelete(experienceIndex, index)}
                />
              ))
            }
            <div className={styles.form_item}>
              <Button style={{
                width: '100%'
              }} onClick={() => {
                const newExperiences = [...experiences]
                newExperiences[experienceIndex].content.push({
                  type: 'singleColumn',
                  value: [''],
                })
                setExperiences(newExperiences)
              }}>
                添加信息行
              </Button>
            </div>
          </EditCard>
        )
      })}
      <Button size="large" type="primary" style={{ width: '100%', marginTop: '15px' }}
        onClick={() => {
          const newExperiences = [...experiences]
          newExperiences.push({
            title: '新增经历',
            content: []
          })
          setExperiences(newExperiences)
        }}
      >添加经历</Button>
    </>
  )
}

const ExperienceLine = ({
  info,
  onMoveUp,
  onMoveDown,
  onDelete,
  onChange
}: {
  info: ExperienceContentItem,
  onMoveUp: () => void,
  onMoveDown: () => void,
  onDelete: () => void,
  onChange: (info: ExperienceContentItem) => void
}) => {

  const type2Number = { 'singleColumn': 0, 'doubleColumn': 1, 'sequence': 2 }
  const number2Type = ['singleColumn', 'doubleColumn', 'sequence'] as const

  return (
    <div className={styles.form_item}>
      <Select
        value={type2Number[info.type]}
        className={styles.item_label}
        options={[
          { value: 0, label: '单列' },
          { value: 1, label: '双列' },
          { value: 2, label: '序列' },
        ]}
        onChange={(e) => {
          const newInfo: ExperienceContentItem = { ...info, type: number2Type[e] }
          onChange(newInfo)
        }}
      />
      <Input className={styles.input} value={info.value[0]} onChange={(e) => {
        const newInfo = { ...info }
        newInfo.value[0] = e.target.value
        onChange(newInfo)
      }} />
      {info.type === 'doubleColumn' &&
        <Input style={{
          marginLeft: '8px'
        }} className={styles.input} value={info.value[1]} onChange={(e) => {
          const newInfo = { ...info }
          if (newInfo.value.length < 2) {
            newInfo.value.push('')
          }
          newInfo.value[1] = e.target.value
          onChange(newInfo)
        }} />
      }
      <div className={styles.btn_area}>
        <UpSquareTwoTone className={styles.btn}
          onClick={onMoveUp}
        />
        <DownSquareTwoTone className={styles.btn}
          onClick={onMoveDown}
        />
        <DeleteTwoTone className={styles.btn} twoToneColor={'#FF4D4F'}
          onClick={onDelete}
        />
      </div>
    </div>
  )
}

const Writer = () => {
  const { paperConfig, baseInfo, experiences, setPaperConfig, setBaseInfo, setExperiences } = useResume()

  const [history, setHistory] = useState<ResumeHistoryType[]>(ResumeStorage.get())

  useEffect(() => {
    if (!paperConfig) return
    changeRootStyle("--paper-line-spacing", `${paperConfig.lineSpacing}mm`)
    changeRootStyle("--paper-line-height", `${paperConfig.lineHeight}mm`)
    changeRootStyle("--theme-color", paperConfig.themeColor)
    changeRootStyle("--border-color", paperConfig.borderColor)
  }, [paperConfig])

  const handleStore = () => {
    const data = {
      version: 1,
      paperConfig,
      baseInfo,
      experiences
    }
    copyToClipboard(JSON.stringify(data))
    // 保存到本地缓存
    setHistory(ResumeStorage.add(data))
    alert('已同时保存至剪切板（用于导入），请及时备份')
  }

  const handleImport = (item: ResumeHistoryType) => {
    const { paperConfig, baseInfo, experiences } = item
    setPaperConfig(paperConfig)
    setBaseInfo(baseInfo)
    setExperiences(experiences)
  }

  const handleExport = () => {
    window.print()
  }

  return (
    <div>
      <div className={styles.toolbar}>
        <div className={styles.btns}>
          <div className={styles.left_area}>
            <Button type="primary" size="middle" onClick={handleStore}>保存</Button>
          </div>
          <div className={styles.right_area}>
            <Button onClick={handleExport}>导出</Button>
          </div>
        </div>
        {
          history.length != 0 && <div className={styles.histories}>
            {
              [...history].reverse().map((item) => {
                return <Button
                  onClick={() => handleImport(item)}
                  className={styles.history_item} style={{
                    width: '100%'
                  }}>保存于 {formatTime(item.timestamp)} 的简历</Button>
              })
            }
          </div>
        }
      </div>
      <ConfigWriter />
      <InfoWriter />
      <ExperiencesWriter />

    </div>
  )
}

export default Writer