import { Row,Col, Modal,Radio,Typography } from 'antd'
import { useState} from 'react'

import './adminsettings.css'

const { Text } = Typography

const AdminSettings = props => {
    // const [modalState,setModalState] = useState({visible:true})
    const [state,setstate] = useState({modalvisible:true,settings:props.settings})
    const onChange = (key,e) => {
        setstate({...state,settings:{...state.settings,[key]:e.target.value}})
    }

    const handleClose = () => {
        props.setSettings(state.settings)
        setstate({...state,modalvisible:false})
    }

    const serveroptions = [
                            {
                                label:'local',
                                value:'http://localhost:5001/'
                            },{
                                label:'opra',
                                value:'https://opra.cs.rpi.edu/polls/voting'
                            }
                        ]
                        
    
    return(
    <Modal title="Admin Settings" visible={state.modalvisible} onCancel={handleClose} footer={null}>
        <Row style={{ alignItems: "center" }}>
            <Col span={8}>
                <Text strong={true}>Choose a server</Text>
            </Col>
            <Col span={8}>
                <Radio.Group
                    options={serveroptions}
                    onChange={e=>onChange('server',e)}
                    value={state.settings.server}
                    optionType="button"
                    buttonStyle="solid"
                />
            </Col>
        </Row>
    </Modal>
    )
}

export default AdminSettings