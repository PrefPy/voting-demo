import { Modal } from 'antd'
import SimResult from '../simresult/SimResult'

const ApplyRuleResult = props => {

    const modalOptions = {
        title:'Result',
        footer:null,
        onCancel: () => {
            props.setPopupState({showPopup:false,data:''})
        },
        visible:props.popupState.showPopup
    }

    return(
        <Modal {...modalOptions}>
            {/* {props.popupState.data} */}
            <SimResult resultData={props.popupState.resultData} />
        </Modal>
    )
}

export default ApplyRuleResult