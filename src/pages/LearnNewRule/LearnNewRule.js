import { trackPromise } from 'react-promise-tracker'
import { useState } from 'react'
import axios from 'axios'
import { Button, Modal } from 'antd'

import { server } from '../../App'
import ResultTable from '../../components/ResultTable/ResultTable'

// example_input = {   'no_candidates':    4,
// 'group_ratio':      0.33, 
// 'gr_fair_req':      0.80,
// 'conc_eff_req':     0.95,
// 'privacy_req':      'low',
// 'sim_runtime':      'mid',
// 'is_sample':        'true',
// 'output_type':      'learned'
// }


const LearnNewRule = ({data}) => {

  const [state,setState] = useState({showError:false})

  const onError = () => {
    setState({...state,showError:true})
  }

  const onSubmit = input => {
    trackPromise(
      axios.post(`${server}/run_sim`,input).then(res=>{
          console.log('got this in  return')
          console.log(res.data.display)
          if(res.data.display !== undefined){
              setState({...state,result:res.data.display[0],learned_models:res.data.learned_models})
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
  console.log('learn rules here')
  console.log(data)
  console.log(state)

  return(
    <>
      {JSON.stringify(data)}
      <Button
        type='primary'
        onClick = {() => onSubmit(data.setup)}
      >
        Learn voting rules
      </Button>


      <ResultTable resultData = {state.result}/>



      <Modal
        title='Message'
        footer={null}
        onCancel= {() => {
            setState({...state,showError:false})
        }}
        visible = {state.showError}
      >

      </Modal>

    </>
  )
}

export default LearnNewRule