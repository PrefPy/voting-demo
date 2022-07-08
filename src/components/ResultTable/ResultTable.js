import './ResultTable.css';
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

const ResultTable = ({resultData, showRemark}) => {

	// console.log(resultData)
	return (
		resultData !== undefined ?
			<div className="voting-result">
				<table>
					<tbody>
						<tr className="theader">
							{resultData.tabledata.columns.map(col=><th key={uuid()}>{col}</th>)}
						</tr>
						{ resultData.tabledata.rows.map(row=>(
							<tr key={ row[0] }>
								{
									row.map(box => <td key={uuid()}>{ box }</td>)	
								}
							</tr>
						))}
					</tbody>
				</table>
				{
					showRemark !== undefined && !showRemark ?
					<></>
					:
					<div className="remark">
						<Text strong={true}>Remark: </Text> 
						<Text>
						{parseRemark(resultData.tabledata.remark)}
						</Text>
					</div>
				}
			</div>
		:<></>
	);
}

export default ResultTable