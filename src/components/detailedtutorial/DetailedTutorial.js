import { Modal } from 'antd'

const DetailedTutorial = props => {
    const modalOptions = {
        title:'Introduction',
        footer:null,
        onCancel: () => {
            props.setShowPopup(false)
        },
        visible:props.showPopup
    }

    return(
        <Modal {...modalOptions}>
            Something Something
        </Modal>
    )
}

export default DetailedTutorial