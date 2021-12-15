import { useState } from 'react';
import { Row, Col, Slider, InputNumber } from 'antd';

const InputSlider = props => {
    const [val,setVal] = useState(props.value)

    const update = v =>{
        props.onChange(v)
        setVal(v)
    }   
    return(
        <Row>
            <Col span={12}>
                <Slider 
                    name={props.name}
                    min={props.min} 
                    max={props.max} 
                    step={props.step} 
                    value={val} 
                    onChange={update}/>
            </Col>
            <Col span={5}>
                <InputNumber 
                    name={props.name}
                    min={props.min} 
                    max={props.max} 
                    step={props.step} 
                    value={val} 
                    onChange={update}/>
            </Col>
        </Row>
    )
}

export default InputSlider