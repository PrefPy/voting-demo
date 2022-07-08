import { Form } from "antd"

import DescriptiveCheckbox from "../../components/DescriptiveCheckbox/DescriptiveCheckbox"
import fields from '../../fields.json'

const VotingAxioms = ({data,updateData}) => {
  return(
    <>
      <Form
          data = {data}
          layout="horizontal"
          onValuesChange={updateData}
      >
        {
          fields.votingAxioms.map(axiom =>
            <Form.Item
              // label={rule.label}
              name={axiom.field}
              key={axiom.field}
            >
              <DescriptiveCheckbox inp={axiom}/>
            </Form.Item>
          )

        }

      </Form>
    </>
  )
}

export default VotingAxioms