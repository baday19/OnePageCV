import { useState, type ReactNode, type CSSProperties } from 'react';
import styles from './index.module.css'
import { Button, Dropdown, type MenuProps } from 'antd';
import { EllipsisOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

interface EditCardProps {
  title?: string
  children?: ReactNode
  initExpand?: boolean
  showMore?: boolean
  style?: CSSProperties
  onMoveUp?: () => void       // 上移回调
  onMoveDown?: () => void     // 下移回调
  onDelete?: () => void        // 删除回调
}


const items = [
  {
    key: '1',
    label: '上移',
  },
  {
    key: '2',
    label: '下移',
  },
  {
    key: '3',
    label: '删除',
  },
];

export default function EditCard({
  title,
  children,
  initExpand = false,
  showMore = false,
  style = {},
  onMoveUp,
  onMoveDown,
  onDelete,
}: EditCardProps) {
  const [show, setShow] = useState(initExpand)

  const onMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === '1') {
      onMoveUp?.()
    } else if (e.key === '2') {
      onMoveDown?.()
    } else if (e.key === '3') {
      onDelete?.()
    }
  };

  return (
    <div className={styles.container} style={style}>
      <div className={styles.header}>
        <div className={styles.leftArea}>{title}</div>
        <div className={styles.rightArea}>
          {
            showMore && <div style={{
              marginRight: '8px'
            }}>
              <Dropdown menu={{ items, onClick: onMenuClick }} placement="bottomRight">
                <Button size='small'
                  icon={<EllipsisOutlined />}
                  variant="outlined"
                />
              </Dropdown>
            </div>
          }
          {/* 展开 or 收起 */}
          <div>
            <Button
              type={show ? 'primary' : 'default'}
              size='small'
              onClick={() => {
                setShow(!show)
              }}
              icon={show ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            />
          </div>

        </div>
      </div>
      {
        show && <div className={styles.body}>{children}</div>
      }
    </div>
  );
}
