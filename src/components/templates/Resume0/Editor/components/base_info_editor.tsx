import { useEffect, useState } from 'react'
import { UploadOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import {
  Button,
  Input,
  Upload,
} from 'antd';

export const BaseInfoEditor = ({
  onBaseInfoSubmit,
  baseInfo
}: {
  onBaseInfoSubmit: (e: any) => void;
  baseInfo: {
    name: string;
    infoList: string[];
    photo: string;
    schoolLogo: string
  }
}) => {

  const [username, setUsername] = useState(baseInfo.name)
  const [photo, setPhoto] = useState<any>(baseInfo.photo)
  const [schoolLogo, setSchoolLogo] = useState<any>(baseInfo.schoolLogo)
  const [infoList, setInfoList] = useState(baseInfo.infoList)

  useEffect(() => {
    submit()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, photo, schoolLogo, infoList])

  const addInfoLine = () => {
    const temp = [...infoList]
    temp.push('')
    setInfoList(temp)
  }

  const removeInfoLine = (idx: number) => {
    const temp = [...infoList]
    temp.splice(idx, 1)
    setInfoList(temp)
  }


  const uploadPhoto = (file: any) => {
    // URL.createObjectURL()
    setPhoto(URL.createObjectURL(file))
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   const base64Str = reader.result;
    //   setPhoto(base64Str)
    // };
    return false
  };

  const uploadSchoolLogo = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Str = reader.result;
      setSchoolLogo(base64Str)
    };
    return false
  };

  const submit = () => {
    const baseInfo = {
      name: username,
      infoList: infoList,
      photo: photo,
      schoolLogo: schoolLogo,
    }
    // console.log(baseInfo)
    onBaseInfoSubmit(baseInfo)
  }

  return (
    <div className="general-info-editor">
      <div className="info-title">
        <div className="title-name">基础信息</div>
        {/* <div className="store-btn">
            <Button size="small" type="primary" onClick={submit}>
              保存
            </Button>
          </div> */}
      </div>
      <div className="info-form">
        <div className="form-item">
          <div className="item-name">姓名:</div>
          <Input style={{ flex: '1' }} onChange={(e) => {
            setUsername(e.target.value)
          }} placeholder="输入姓名" value={username} />
        </div>
        <div className="form-item">
          <div className="item-name">照片:</div>
          <Upload name="file" beforeUpload={uploadPhoto} listType="picture" maxCount={1} onRemove={() => {
            setPhoto(null)
          }}>
            <Button icon={<UploadOutlined />}>点击上传</Button>
          </Upload>
        </div>
        <div className="form-item">
          <div className="item-name">校徽:</div>
          <Upload name="file" beforeUpload={uploadSchoolLogo} listType="picture" maxCount={1} onRemove={() => {
            setSchoolLogo(null)
          }}>
            <Button icon={<UploadOutlined />}>点击上传</Button>
          </Upload>
        </div>
        {
          infoList.map((item, index) => {
            return (
              <div className="form-item" key={index}>
                <div className="item-name">信息行:</div>
                <Input style={{ flex: '1' }} onChange={e => {
                  const value = e.target.value
                  const temp = [...infoList]
                  temp[index] = value
                  setInfoList(temp)
                }}
                  value={item}
                  placeholder="信息行" />
                <MinusCircleOutlined
                  style={{
                    marginLeft: '3mm'
                  }}
                  onClick={() => removeInfoLine(index)}
                />
              </div>
            )
          })
        }
        {
          infoList.length < 4 && <div className="form-item">
            <Button
              type="dashed"
              onClick={addInfoLine}
              style={{ width: '100%' }}
              icon={<PlusOutlined />}
            >
              添加信息行
            </Button>
          </div>
        }
        <div className="general-info-tips">
          <div className="tips-line">填写建议：</div>
          <div className="tips-line">信息行填写个人基本信息：如电话、邮箱、个人主页、求职状态等，如下：</div>
          <div className="tips-line">15966666666 | mail@zju.edu.cn</div>
          <div className="tips-line">github.com/baday19</div>
          <div className="tips-line">应届生 | 浙江 | web前端</div>
        </div>
      </div>
    </div>
  )
}