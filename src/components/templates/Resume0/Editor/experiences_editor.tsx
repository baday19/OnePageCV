import { useEffect, useState } from 'react'
import { UploadOutlined, PlusOutlined, MinusCircleOutlined, DownOutlined } from '@ant-design/icons';
import {
  Button,
  Input,
  Select,
  Switch
} from 'antd';

const LineItem = ({
  onRemove,
  onInput,
  info,
}: {
  onRemove: () => void;
  onInput: (e: any) => void;
  info: any;
}) => {

  const convertType = () => {
    if (info.value.length <= 1) {
      return info.value[0].type == 'li'? 2: 0
    } else {
      return 1
    }
  }

  const handleTypeChange = (e: any) => {
    const value = []
    value.push(info.value[0])
    value[0].type = 'div'
    if (e == 1) {
      value.push(info.value.length == 2 ? info.value[1] : { className: 'line-normal', value: '' })
    } else if (e == 2) {
      value[0].type = 'li'
    }
    const res = {
      className: 'line-two-sides',
      value: value,
    }
    onInput(res)
  }

  return (
    <div className="line-item">
      <Select
        value={convertType() + ''}
        style={{ width: 70 }}
        onChange={handleTypeChange}
        options={[
          { value: '0', label: '单列' },
          { value: '1', label: '双列' },
          { value: '2', label: '序列' },
        ]}
      />
      <Input value={info.value[0].value} style={{ flex: '1', marginLeft: 10 }} onChange={e => {
        const value = e.target.value
        const res = { ...info }
        res.value[0].value = value
        onInput(res)
        // setInput0(value)
      }}
        placeholder="信息行" />
      {
        convertType() == 1 && <Input value={info.value[1].value} style={{ flex: '1', marginLeft: 10 }} onChange={e => {
          // setInput1(value)
          const value = e.target.value
          const res = { ...info }
          res.value[1].value = value
          onInput(res)
        }}
          placeholder="信息行" />
      }
      <MinusCircleOutlined
        style={{
          marginLeft: '3mm'
        }}
        onClick={onRemove}
      />
    </div>
  )
}

const ExperienceEditor = ({
  experience,
  onSubmit,
  onDel
}: {
  experience: any;
  onSubmit: (e: any) => void | undefined;
  onDel: (e: any) => void | undefined;
}) => {
  const [title, setTitle] = useState(experience.title)
  const [isShow, setIsShow] = useState(experience.isShow)
  const [infoList, setInfoList] = useState(experience.data)

  useEffect(() => {
    setTitle(experience.title)
    setIsShow(experience.isShow)
    setInfoList(experience.data)
  }, [experience])

  const addInfoLine = () => {
    const temp = [...infoList]
    temp.push({
      className: 'line-two-sides',
      value: [{
        className: 'line-normal',
        value: ''
      }]
    })
    setInfoList(temp)
  }

  const removeInfoLine = (idx: number) => {
    const temp = [...infoList]
    temp.splice(idx, 1)
    setInfoList(temp)
  }



  const submit = () => {
    onSubmit({
      title,
      isShow,
      data: infoList
    })
  }

  return (
    <div className="base-info-editor">
      <div className="info-title">
        <div className="title-name">{title||'经历信息'}</div>
        <div className="btn-containers">
          <Switch checked={isShow} onChange={() => {
            onSubmit({
              title,
              isShow: !isShow,
              data: infoList
            })
            setIsShow(!isShow)
          }} />
          <Button size="small" type="primary" onClick={onDel} danger>
            删除
          </Button>
          <Button size="small" type="primary" onClick={submit}>
            保存
          </Button>
        </div>
      </div>
      <div className="info-form">
        <div className="form-item">
          <div className="item-name">标题:</div>
          <Input style={{ flex: '1' }} size='large' onChange={(e) => {
            setTitle(e.target.value)
          }} placeholder="输入标题" value={title} />
        </div>
        {
          infoList.map((item: any, index: any) => {
            return (
              <div key={index}>
                <LineItem onRemove={() => {
                  const temp = [...infoList]
                  temp.splice(index, 1)
                  setInfoList(temp)
                }}
                  onInput={(e) => {
                    const temp = [...infoList]
                    temp[index] = e
                    setInfoList(temp)
                  }}
                  info={item}
                />
              </div>
            )
          })
        }
        <div className="form-item">
          <Button
            type="dashed"
            onClick={addInfoLine}
            style={{ width: '100%' }}
            icon={<PlusOutlined />}
          >
            添加信息行
          </Button>
        </div>
        {/* <div className="base-info-tips">
          <div className="tips-line">填写建议：</div>
          <div className="tips-line">信息行填写个人基本信息：如电话、邮箱、个人主页、求职状态等，如下：</div>
          <div className="tips-line">15966666666 | mail@zju.edu.cn</div>
          <div className="tips-line">github.com/baday19</div>
          <div className="tips-line">应届生 | 浙江 | web前端</div>
        </div> */}
      </div>
    </div>
  )
}

interface ExperiencesEditorProps {
  onExperiencesSubmit: (e: any) => void;
  experiences: any[];
}
export const ExperiencesEditor = ({
  onExperiencesSubmit,
  experiences,
}: ExperiencesEditorProps) => {
  // const [experiencesList, setExperiencesList] = useState(experiences)
  const experiencesList = experiences

  return (
    <div className="experiences-editor">
      {
        experiencesList.map((item, index) => {
          return <div key={index}>
            <ExperienceEditor
              experience={item}
              onSubmit={(e) => {
                const temp = [...experiencesList]
                temp[index] = e
                // setExperiencesList(temp)
                onExperiencesSubmit(temp)
              }}
              onDel={() => {
                const temp = [...experiencesList]
                temp.splice(index, 1)
                // setExperiencesList(temp)
                onExperiencesSubmit(temp)
              }}
            />
          </div>
        })
      }
    </div>
  )
}