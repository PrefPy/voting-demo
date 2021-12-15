import { useState } from 'react'
import { Typography, Radio, Button } from 'antd'
import ApplyRule from '../applyrule/ApplyRule'

import SimResult from '../simresult/SimResult.js'

import './simuoutput.css'

const { Title, Text } = Typography

const names = {
    'Traditional Rules': 'traditional',
    'Learned Rules':'learned',
}

const SimuOutput = props => {
    const privacy_vals = props.output.map((o,i) => ({label:o.privacy,value:i}))

    const [state, setstate] = useState({privacy:0});

    const onPrivacyChange = e => {
        setstate({...state,privacy:e.target.value})
    }
    
    return(
        <div className="SimuOutput">
            <Title level={3}>Generation output</Title>
            <Title level={5}>
                {props.output ?
                    props.output.length > 1 ? 
                        "Values for different privacy values"
                        : 
                        "Values for traditional voting rules"
                    :''}
            </Title>
            {props.output && props.output.length === 1 ? 
            <Text>Adding more input will update the table with more results!</Text>:''}
            <div className="maincontent">
                <div className="choose-table">
                    {/* {props.output.length > 0 ?
                        <Radio.Group
                            options={Object.keys(names)}
                            onChange={onRuleChange}
                            value={state.ruledisplay}
                            optionType="button"
                            buttonStyle="solid"
                            />:''} */}
                    {privacy_vals.length > 1 ? 
                        <Radio.Group
                            options={privacy_vals}
                            onChange={onPrivacyChange}
                            value={state.privacy}
                            optionType="button"
                            buttonStyle="solid"
                            />:''}
                </div>
                { props.output.length > 0 ?
                    <>
                        <SimResult resultData={props.output[state.privacy]}/>
                        {privacy_vals.length > 1 ?
                            <ApplyRule leanred_models={props.learned_models} simuInput={props.simuInput} style={{marginTop:20}}/>
                        :''}
                    </>
                    : 
                    <div className="startmessage">
                        {`No input loaded yet.
                        Press the Generate Voting Rule button to reload the sample output!`}
                    </div>
                }
            </div>
            
        </div>  
    )
}

export default SimuOutput;