import { useState } from 'react';
import axios from 'axios'
import { trackPromise } from 'react-promise-tracker'
// import { server } from '../../App'
import { Modal } from 'antd'

import StartForm from '../../components/startform/StartForm'
import TutorialSection from '../../components/tutorialsection/TutorialSection'
import SimuOutput from '../../components/simuoutput/SimuOutput';
import AdminSettings from '../../components/adminsettings/adminsettings';

import './StartPage.css';

const resultData = {
    'privacy': 'mid',
    'tabledata':{
        'columns': ['Voting Rule','Condorcet Efficiency','Group Fairness'],
        'rows': {
            'traditional': [
                ['Copeland',    '1.00',     0.93],
                ['Maximin',     '1.00',     0.82],
                ['Borda',       0.92,     0.87],
            ],
            'learned': [
                ['LVR1',        0.87,     0.98 ],
                ['LVR2',        0.82,     0.93 ],
            ],
        },
        'remark': 'Mid privacy results.\n and a newline'
    }
}

const learned_models = [
        {name: 'LVR1',
        type:'xgboost',
        xgboost_idx:''},
        {name: 'LVR2',
        type:'xgboost',
        xgboost_idx:''}
]

const StartPage = props => {
    const [state,setState] = useState({showError:false,result:[],learned_models:[],outputType:'traditional'})

    const setOutputType = val =>{
        setState({...state,outputType:val})
    }

    const setSimuInput = data => {
        setState({...state,simuInput:data})
    }

    const onError = () => {
        setState({...state,showError:true})
    }


    const onSubmit = () => {
        // console.log(`sending ${JSON.stringify(state.simuInput)}`)
        // console.log(`${props.settings.server}/run_sim`)
        
        trackPromise(
                    axios.post(`${props.settings.server}/run_sim`,state.simuInput).then(res=>{
                        // console.log('got this in  return')
                        // console.log(res.data.display)
                        if(res.data.display !== undefined){
                            setState({...state,result:res.data.display,learned_models:res.data.learned_models})
                        }else{
                            // console.log(res.data)
                            onError()
                        }

                        //     props.history.push({pathname:'/result',state:{resultData:res.data, simuInput:simuInput}})
                        // else
                        //     setSimuInput({...simuInput,showError:true})
                    })
                )
    }

    const errorModalOptions = {
        title:'Message',
        footer:null,
        onCancel: () => {
            setState({...state,showError:false})
        },
        visible:state.showError
    }

    return(
        <div className="StartPage">
            {/* <AdminSettings settings={props.settings} setSettings={props.setSettings} /> */}
            <TutorialSection />
            <div className="simulation-area">
                <StartForm onSubmit={onSubmit} simuInput={state.simuInput} setSimuInput={setSimuInput} setOutputType={setOutputType}/>
                <SimuOutput simuInput={state.simuInput} output={state.result} learned_models={state.learned_models} onError={onError} settings={props.settings}/>
            </div>
            <Modal {...errorModalOptions}>
                Something bad happened! Check server logs
            </Modal>
        </div>
    )
}

export default StartPage
