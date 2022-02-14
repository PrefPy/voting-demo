import './SimResult.css';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { uuid } from 'uuidv4'

const { Text,Title } = Typography

const parseRemark = rawtext => {
	let lines = []
	for(let l of rawtext.split('\n')){
		lines.push(l)
		lines.push(<br/>)
	}
	return lines
}

const SimResult = props => {

	// console.log(props.resultData)
	return (
		// <>Sike!</>
		<div className="voting-result">
			<table>
				<tbody>
					<tr className="theader">
						{props.resultData.tabledata.columns.map(col=><th key={uuid()}>{col}</th>)}
					</tr>
					{ props.resultData.tabledata.rows.map(row=>(
						<tr key={ row[0] }>
							{
								row.map(box => <td key={uuid()}>{ box }</td>)	
							}
						</tr>
					))}
				</tbody>
			</table>
			{
				props.showRemark !== undefined && !props.showRemark ?
				<></>
				:
				<div className="remark">
					<Text strong={true}>Remark: </Text> 
					<Text>
					{parseRemark(props.resultData.tabledata.remark)}
					</Text>
				</div>
			}
		</div>
	);
}

export default SimResult