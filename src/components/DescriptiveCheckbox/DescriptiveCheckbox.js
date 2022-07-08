import { useState } from 'react';
import { Row, Col } from 'antd';
import { blue } from '@ant-design/colors';
const defaultStyle = {
	border: `1px solid #bfbfbf`,
	padding: '5px 7px',
	borderRadius: 3,
	cursor: 'pointer'
}

const checkedStyle = {
	...defaultStyle,
	backgroundColor: blue[3]
}

const unCheckedStyle = {
	...defaultStyle,
	backgroundColor: '#f0f0f0'
}

const DescriptiveCheckbox = ({inp,onChange}) => {
	const [checked, setChecked] = useState(0)

	// this was hard to figure out. 
	// Having the component have onChange makes antd form work with it
	const onSelect = v => {
		// console.log(v.target.checked)
		setChecked(Number(!checked));
		onChange?.(Number(!checked))
	}

	return (
		<Row
			onClick={onSelect}
			style={checked ? checkedStyle : unCheckedStyle}
		>
			<Col span={6}>
				<b>{inp.label}</b>
			</Col>
			<Col span={18}>
				{inp.desc}
			</Col>
		</Row>
	)
}

export default DescriptiveCheckbox