import { useState } from 'react';
import { Row, Col, Slider, InputNumber } from 'antd';

const InputSlider = ({inp,onChange}) => {
	const [number, setNumber] = useState(inp.detail.min)

	// this was hard to figure out. 
	// Having the component have onChange makes antd form work with it
	const onNumChange = v => {
		setNumber(v);
		onChange?.(v)
	}

	return (
		<Row>
			<Col span={12}>
				<Slider
					name={inp.field}
					min={inp.detail.min}
					max={inp.detail.max}
					step={inp.detail.step}
					value={ number}
					// defaultValue={inp.detail.min}
					onChange={onNumChange}
				/>
			</Col>
			<Col span={4} offset={8}>
				<InputNumber
					name={inp.field}
					min={inp.detail.min}
					max={inp.detail.max}
					step={inp.detail.step}
					value={number}
					// defaultValue={inp.detail.min}
					onChange={onNumChange}
				/>
			</Col>
		</Row>
		// <Row>
		// 	<Col span={12}>
		// 		<Slider
		// 			name={props.name}
		// 			min={props.min}
		// 			max={props.max}
		// 			step={props.step}
		// 			value={val}
		// 			onChange={update} />
		// 	</Col>
		// 	<Col span={5}>
		// 		<InputNumber
		// 			name={props.name}
		// 			min={props.min}
		// 			max={props.max}
		// 			step={props.step}
		// 			value={val}
		// 			onChange={update} />
		// 	</Col>
		// </Row>
	)
}

export default InputSlider