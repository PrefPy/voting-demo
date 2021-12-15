import './ResultPage.css'
import ApplyRule from '../../components/applyrule/ApplyRule';
import SimResult from '../../components/simresult/SimResult';
import ApplyRuleResult from '../../components/applyruleresult/ApplyRuleResult';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';
import { useState } from 'react';

const ResultPage = props => {
    const [ popupState,setPopupState ] = useState({showPopup:false,resultData:''})

    return(
        <div>
            { props.location.state !== undefined ? 
                <div>
                    <Button className="goback-button" onClick={()=>props.history.push({pathname:'/',state:props.location.state.simuInput})}>
                        Go back to simulation</Button>
                    <div className="ResultPage">
                        <SimResult resultData={props.location.state.resultData}/>
                        <ApplyRule resultData={props.location.state.resultData} simuInput={props.location.state.simuInput} setPopupState={ setPopupState }/>
                        <ApplyRuleResult popupState={popupState} setPopupState={setPopupState} />
                    </div>
                </div>
            :
                <Redirect to="/" />
            }
        </div>
    )
}

export default ResultPage