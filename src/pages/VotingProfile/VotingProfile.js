import { Slider, InputNumber, Input, Form, Radio, Button, Row, Typography, Col, Tooltip } from 'antd';
import InputSlider from '../../components/inputslider/InputSlider';

const ProfileSettings = [{
  field: 'no_candidates',
  label: 'Number of Candidates',
  info: 'Different number of candidates will lead to design of different voting rules',
  required: true,
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
  required: true,
  detail: {
    type: 'slider',
    min: 0.01,
    max: 1,
    step: 0.01
  }
}]

const VotingProfile = ({formRef}) => {
  
  console.log('voting profile form created')
  // console.log(formRef)

  const val = Form.useWatch(['no_candidates'],formRef)

  return (
    <div
      style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        // alignItems:'middle'
      }}
    >
      <div
        style={{
          marginBottom:30
        }}
      >
        Something Somethign explain what this is

        <br/>
        VALUE:{JSON.stringify(val)}
      </div>
      <Form
        form={formRef}
        layout="horizontal"
        // initialValues={props.simuInput}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        // style={{ width: "90%" }}
        labelAlign="left"
        // onFinish={props.onSubmit}
      >
        {ProfileSettings.map(inp =>
          <Form.Item
            label={inp.label}
            name={inp.field}
            key={inp.field}
            rules={inp.required ? [{ required: true, message: 'Please input a value!' }] : []}
            tooltip={inp.info}>
            {/* <PriceIn */}
            <InputSlider inp={inp}/>
            {/* <Slider
              name={inp.field}
              min={inp.detail.min}
              max={inp.detail.max}
              step={inp.detail.step}
              value={val}
              // defaultValue={inp.detail.min}
              onChange={setVal}
            /> */}
          </Form.Item>
        )}
        {/* <Button
          type='primary'
        >
          Apply Settings
        </Button> */}
      </Form>
    </div>
    // <>DUDE</>
  )
}

export default VotingProfile