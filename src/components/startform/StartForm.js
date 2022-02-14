import './StartForm.css';
import { Input, Form, Radio, Button, Row, Typography,Col,Tooltip } from 'antd';
import InputSlider from '../inputslider/InputSlider';
import { useState } from 'react';


const allinputs = [
    {
        type: 'Voting scenario',
        inputs:[{   
            field: 'no_candidates',  
            label: 'Number of Candidates',               
            info: 'Different number of candidates will lead to design of different voting rules',
            required:true,
            detail: {
                type: 'slider',
                min: 2,
                max: 4,
                step: 1
            }
        }, {
            field: 'group_ratio',
            label: 'Group Ratio',
            info: 'Group fairness is computed in terms of group sizes, please enter ratio between the sizes of two groups as (smaller group size)/(larger group size)',
            required:true,
            detail: {
                type: 'slider',
                min: 0.01,
                max: 1,
                step: 0.01
            }
        }]}, {
        type: 'Desired property levels',
        inputs:[{
            field: 'gr_fair_req',
            label: 'Group Fairness Requirement',
            info: 'Real number between 0~1. Average group-imbalance based fairness value. Calculated using average rank utility of both groups. Higher value means more fairness.',
            required:false,
            detail: {
                type: 'slider',
                min: 0.01,
                max: 1.00,
                step: 0.01
            }
        }, {
            field: 'conc_eff_req',
            label: 'Condorcet Efficiency Requirement',
            info: 'Real number between 0~1. Fraction of preference profiles where Condorcet winner is chosen if it exists. Higher value means more probability of choosing the Condorcet winner.',
            required: false,
            detail: {
                type: 'slider',
                min: 0.01,
                max: 1.00,
                step: 0.01
            }
        }, {
            field: 'consistency',
            label: 'Consistency Requirement',
            info: 'Real number between 0~1. Higher value means higher probability that the voting rule will satisfy the consistency property',
            required: false,
            detail: {
                type: 'slider',
                min: 0.01,
                max: 1.00,
                step: 0.01
            }
        },{
            field: 'monotonicity',
            label: 'Monotonicity Requirement',
            info: 'Real number between 0~1. Higher value means higher probability that the voting rule will satisfy the monotonicity property',
            required: false,
            detail: {
                type: 'slider',
                min: 0.01,
                max: 1.00,
                step: 0.01
            }
        },
        // {
        //     field: 'neutrality',
        //     label: 'Neutrality Requirement',
        //     info: 'Real number between 0~1. Higher value means higher probability that the voting rule will satisfy the neutrality property.',
        //     required: false,
        //     detail: {
        //         type: 'slider',
        //         min: 0.01,
        //         max: 1.00,
        //         step: 0.01
        //     }
        // }, 
        //  {
        //     field: 'privacy_req',
        //     label: 'Privacy Requirement',
        //     info: 'To design a locally differential private mechanism, noise is added to each voter’s vote. High privacy requirement causes higher noise, low privacy requirement causes lower noise.',
        //     required: false,
        //     detail:{
        //         type: 'radio',
        //         vals: ['low','mid','high']
        //     }
        // }
        // ,{
        //     field: 'sim_runtime',
        //     label: 'Learned rule accuracy',
        //     info: 'Determines the size of the synthetic dataset created to learn new rules. Low accuracy corresponds to smaller dataset and fast runtime. High accuracy corresponds to larger dataset and slower runtime.',
        //     required: false,
        //     detail: {
        //         type: 'radio',
        //         vals: ['short','mid','long']
        //     },
        // }
        ]}
]

const {Text,Title} = Typography

const StartForm = props => {
    const update = (value,field) => {
        if(value.target !== undefined)
            value = value.target.value
        
        props.setSimuInput({...props.simuInput, [field]:value})
        // console.log(props.simuInput)
    }

    const setTraditional = () => {
        props.setSimuInput({...props.simuInput, 'output-type':'traditional'})
    }

    const setLearnedRules = () => {
        props.setSimuInput({...props.simuInput, 'output-type':'learned'})
    }

    const makedom = inp => {  
        switch(inp.detail.type){
            case 'slider':
                return(
                    <InputSlider 
                        name={inp.field} 
                        min={inp.detail.min} 
                        max={inp.detail.max}
                        step={inp.detail.step}
                        onChange={v => update(v,inp.field)}/>
                )
            case 'radio':
                return(
                    <Radio.Group name={inp.field} onChange={v =>update(v,inp.field)}>
                        {inp.detail.vals.map(val=>(
                            <Radio.Button value={val} key={val}>{val}</Radio.Button>
                        ))}
                    </Radio.Group>
                )  
            default: return(null)
        }
    }
    
    return(
        <div className="StartForm">
            <Title level={3}>Designing Voting Rules</Title>
            <div className="instruction">
                Choose required property for new voting rules (<star>*</star> marked fields are required)
            </div>
            <Form
                layout="horizontal"
                initialValues={props.simuInput}
                labelCol={{span:12}}
                wrapperCol={{span:20}}
                style={{width:"90%"}}
                labelAlign="left"
                onFinish={props.onSubmit}
                >
                {
                    allinputs.map((group,i) => (
                        <div className="inputgroup">
                            <div className="title">{group.type}</div>
                            {group.inputs.map(inp=>
                                <Form.Item 
                                    label={inp.label} 
                                    name={inp.field} 
                                    key={inp.field}
                                    rules={inp.required ? [{required:true, message:'Please input a value!'}] : []}
                                    tooltip={inp.info}>
                                    {makedom(inp)}
                                </Form.Item>)}
                            {i === allinputs.length-1 ?
                            <Row type="flex" justify="center" align="middle" 
                            style={{marginBottom:10}}
                            >
                                <Tooltip
                                    placement='right'
                                    title='Check the outcome under traditional voting rules, such as Borda, Copeland and maximin'
                                >
                                    <Button 
                                        type="primary"
                                        htmlType="submit"
                                        onClick={setTraditional}>
                                            Check existing voting rules
                                    </Button>
                                </Tooltip>
                            </Row>
                            :
                                <></>
                            }
                        </div>
                    
                    ))
                }
                <Row type="flex" justify="center" align="middle" style={{marginBottom:10}}>
                    <Button type="primary" htmlType="submit" onClick={setLearnedRules}>Generate Voting Rule</Button>
                </Row>
            </Form>
        </div>
    )
}


export default StartForm