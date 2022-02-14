import { trackPromise } from 'react-promise-tracker'
import axios from 'axios'
import { useState } from 'react'
import { Upload, Select, Button, Checkbox, Col, Modal, Typography } from 'antd'

import SimResult from '../simresult/SimResult'

const {Text} = Typography

const ApplyRuleResult = props => {

    const [state,setstate] = useState({result:{},showModal:false})

    const modalOptions = {
        title:'Simluation Result',
        footer:null,
        onCancel: () => {
            // props.setPopupState({showPopup:false,data:''})
            setstate({...state,showModal:false})
        },
        width:1000,
        visible:state.showModal
    }

    const onApply = () => {
        // console.log(`sending ${JSON.stringify(props.learned_models)}`)
        // console.log(`${props.settings.server}/apply`)
        trackPromise(
                    axios.post(`${props.settings.server}/apply`,{
                                    learned_models:props.learned_models
                    }).then(res=>{
                        // console.log('got this in  return')
                        // console.log(res.data)
                        if(res.data !== undefined){
                            setstate({...state,result:res.data,showModal:true})
                        }else{
                            // console.log(res.data)
                            props.onError()
                        }

                        //     props.history.push({pathname:'/result',state:{resultData:res.data, simuInput:simuInput}})
                        // else
                        //     setSimuInput({...simuInput,showError:true})
                    })
                )
    }

    return(
        <>
            <>
                <Text style={{marginBottom:10}}>
                    Click this button to view the results of the displayed voting rules with your own data!
                </Text>
                <Button onClick={onApply} >Apply Voting Rules</Button>
            </>
            <Modal {...modalOptions}>
                {/* {props.popupState.data} */}
                <SimResult resultData={state.result} />
            </Modal>
        </>
    )
}

export default ApplyRuleResult