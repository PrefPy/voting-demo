import { Form } from "antd"

import DescriptiveCheckbox from "../../components/DescriptiveCheckbox/DescriptiveCheckbox"
import fields from '../../fields.json'

const ExistingRules = ({data,updateData}) => {
  return(
    <>
      <Form
          data = {data}
          layout="horizontal"
          onValuesChange={updateData}
      >
        {
          fields.votingRules.map(rule =>
            <Form.Item
              // label={rule.label}
              name={rule.field}
              key={rule.field}
            >
              <DescriptiveCheckbox inp={rule}/>
            </Form.Item>
          )

        }

      </Form>
    </>
  )
}

export default ExistingRules