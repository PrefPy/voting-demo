import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons'

const IconTooltip = props => {
    return(
        <Tooltip title={props.text} placement="topRight">
            <QuestionCircleOutlined />
        </Tooltip>
    )
}

export default IconTooltip