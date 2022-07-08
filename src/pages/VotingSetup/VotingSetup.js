import { Slider, InputNumber, Input, Form, Radio, Button, Row, Typography, Col, Tooltip } from 'antd';

import InputSlider from '../../components/InputSlider/InputSlider';
import fields from '../../fields.json'

const VotingSetup = ({ data, updateData }) => {

  // console.log('voting profile form created')
  // console.log(formRef)

  // const val = Form.useWatch(['no_candidates'],formRef)


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems:'middle'
      }}
    >
      <Form
        // form={formRef}
        data={data}
        onValuesChange={updateData}
        initialValues={data}
        layout="horizontal"
        // initialValues={props.simuInput}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        // style={{ width: "90%" }}
        labelAlign="left"
      // onFinish={props.onSubmit}
      >
        <h4><b>Voting Profile</b></h4>
        
        {fields.profile.slider.map(inp =>
          <Form.Item
            label={inp.label}
            name={inp.field}
            key={inp.field}
            rules={inp.required ? [{ required: true, message: 'Please input a value!' }] : []}
            tooltip={inp.info}>
            <InputSlider inp={inp} />
          </Form.Item>
        )}
        

        <h4><b>Desired Properties</b></h4>
        {fields.requirements.slider.map(inp =>
          <Form.Item
            label={inp.label}
            name={inp.field}
            key={inp.field}
            rules={inp.required ? [{ required: true, message: 'Please input a value!' }] : []}
            tooltip={inp.info}>
            <InputSlider inp={inp} />
          </Form.Item>
        )}

        {fields.requirements.radio.map(inp => 
          <Form.Item
            label={inp.label}
            name={inp.field}
            key={inp.field}
            rules={inp.required ? [{ required: true, message: 'Please input a value!' }] : []}
            tooltip={inp.info}>
            <Radio.Group
              // defaultValue={inp.detail.start}
            >
              {inp.detail.vals.map(v => 
                <Radio key={v} value={v}>{v}</Radio>  
              )}
            </Radio.Group>
          </Form.Item>
        )}
      </Form>
    </div>
  )
}

export default VotingSetup