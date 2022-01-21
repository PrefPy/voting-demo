import './SimResult.css';
import 'antd/dist/antd.css';
import { Typography } from 'antd';

const { Text,Title } = Typography

const SimResult = props => {

	console.log(props.resultData)
	return (
		// <>Sike!</>
		<div className="voting-result">
			<table>
				<tbody>
					<tr className="theader">
						{props.resultData.tabledata.columns.map(col=><th key={col}>{col}</th>)}
					</tr>
					{ props.resultData.tabledata.rows.map(row=>(
						<tr key={ row[0] }>
							{
								row.map(box => <td key={row[0]+box}>{ box }</td>)	
							}
						</tr>
					))}
				</tbody>
			</table>
			<div className="remark">
				<Text strong={true}>Remark: </Text> 
				<div>
					{props.resultData.tabledata.remark.split('\n').map( l =>
						<p>{l}</p>
					)}					
				</div>
			</div>
		</div>
	);
}

export default SimResult