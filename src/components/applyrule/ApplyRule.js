import { Upload, Select, Button, Checkbox, Col, Modal, Typography } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { trackPromise } from 'react-promise-tracker'
import axios from 'axios'

import './ApplyRule.css'

const { Dragger } = Upload;
const { Option } = Select;

const apply_button = {
    type: 'primary',
    style: { width: "100%" },
}

const { Text } = Typography

const instruction_text = `line 1: number of candidates, m
line 2: number of agents in group 1, n1
line 3: ranking of agent 1 in group 1 (ranking is a permutation of [0,...,m-1]. e.g. for m=4, '''0 3 2 1''' is a ranking meaning 0>3>2>1
...
line n1+2: ranking of agent n1 in group 1
line n1+3: number of agents in group 2, n2
line n1+4: ranking of agent 1 in group 2
...
line n1+n2+3: ranking of agent n2 in group 2`

const preset_rules = ["Borda", "STV", "Copeland", "Maximin"]

const example_link = 'https://gist.githubusercontent.com/inwonakng/9a214e9380aa95d816da3526592c2023/raw/'

const ApplyRule = props => {
    // const [state.userinput,setUserInput] = useState({showinstruction:false})
    const [state, setstate] = useState({ showmodal:false, userinput: false, showinstruction: false })

    const setuserinput = newvals => {
        setstate({ ...state, userinput: { ...state.userinput, ...newvals } })
    }

    const showmodal = () => {
        setstate({...state,showmodal:true})
    }

    const handleclose = () => {
        setstate({...state,showmodal:false})
    }

    const uploader = {
        name: 'file',
        multiple: false,
        action: '',
        accept: '.txt, .csv',
        beforeUpload: file => {
            const reader = new FileReader()
            reader.onload = e => {
                const filetype = file.name.split('.')[1]
                // setstate({...state,userinput:{...state.userinput,type:filetype,raw_data:e.target.result}})
                setuserinput({ preference_profile: { type: filetype, raw_data: e.target.result } })
            }
            reader.readAsText(file);
            return false;
        }
    };

    const choose_learned = rulename => {
        const raw_data = props.learned_models.find(o => o.name === rulename).raw_data
        setuserinput({ chosen_learned_rules: { name: rulename, raw_data: raw_data } })
    }

    const choose_trad = names => {
        setuserinput({ chosen_trad_rules: names })
    }

    const showPopup = () => {
        if (state.userinput.chosen_learned_rules === undefined) {
            alert('Please choose a learned rule to apply!')
            return false
        }
        if (state.userinput.preference_profile === undefined) {
            alert('Please upload a preference profile!')
            return false
        }

        trackPromise(
            axios.post(`${props.settings.server}/apply_rule`, state.userinput).then(
                res => {
                    console.log('passing this')
                    console.log(res)
                    props.setPopupState({ showPopup: true, resultData: res.data })
                }
            )
        )
        // props.setPopupState({showPopup:true,data:"something something!"})
    }

    const triggerInstruction = () => {
        setuserinput({ showinstruction: !state.showinstruction })
    }

    const instructionOptions = {
        title: 'Input format instrtuction',
        footer: null,
        onCancel: triggerInstruction,
        visible: state.showinstruction
    }

    return (
        <>
            <>
                <Text style={{marginBottom:10}}>
                    Click this button to view the results of the displayed voting rules with your own data!
                </Text>
                <Button onClick={showmodal} >Apply Voting Rule</Button>
            </>
            <Modal visible={state.showmodal} onCancel={handleclose} footer={null}>
                <div className="upload-zone">
                    <h2>Import a preference profile</h2>
                    <div className="example">
                        An example file is available <a type="download" href={example_link} target="_blank" rel="noopener noreferrer">here</a>
                        <br></br>
                        For a description of the file format, click <a onClick={triggerInstruction} > here</a>
                        <Modal {...instructionOptions}>
                            <div style={{ whiteSpace: 'pre-line' }}>
                                {instruction_text}
                            </div>
                        </Modal>
                    </div>
                    <Dragger {...uploader}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Only supports csv or txt files
                        </p>
                    </Dragger>
                </div>
                <div className="apply-zone">
                    <h2>Choose a voting rule to apply</h2>
                    <div className="preset-rules">
                        <Checkbox.Group onChange={choose_trad} style={{ width: '100%' }}>
                            {preset_rules.map(rulename =>
                                // <CheckboxButton label={rulename} value="traditional" />
                                <Col>
                                    <Checkbox className="checkboxButton" value={rulename} key={rulename}>{rulename}</Checkbox>
                                </Col>
                            )}
                        </Checkbox.Group>
                    </div>
                    {/* <Select defaultValue="Choose from learned rules" className="choose-learned-rule" onSelect={choose_learned}>
                        {props.learned_models.map(rule => <Option value={rule.name} key={rule.name}>{rule.name}</Option>)}
                    </Select> */}
                    <Button className="apply-button" {...apply_button} onClick={showPopup} >Apply Voting Rules</Button>
                </div>
            </Modal>
        </>
    )
}

export default ApplyRule