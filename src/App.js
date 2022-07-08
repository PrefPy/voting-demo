import { useState,useEffect, useRef } from 'react';
// import StartPage from './pages/startpage/StartPage.js';
// import { HashRouter as Router, Route, Switch } from "react-router-dom";

import 'antd/dist/antd.css';
import { Button, Form, Layout, Steps, Tabs, Row, Col } from 'antd';

import fields from './fields.json'
import Intro from './pages/Intro/Intro.js';
import VotingSetup from './pages/VotingSetup/VotingSetup.js';
import ExistingRules from './pages/ExistingRules/ExistingRules.js';
import VotingAxioms from './pages/VotingAxioms/VotingAxioms.js';
import LearnNewRule from './pages/LearnNewRule/LearnNewRule.js';
import ApplyRule from './pages/ApplyRule/ApplyRule';

export const server = 'http://127.0.0.1:5001'
// export const server = 'https://voting-demo-backend.onrender.com'

const App = () => {
  // const [state, setstate] = useState({
  //   server: ,
  //   // curIdx: 0
  // })
  const [curStep,setCurStep] = useState(0)
  // required input but also prefilled
  const [setupData,setSetupData] = useState(
    fields.profile.slider.concat(
      fields.requirements.slider
    ).concat(
      fields.requirements.radio
    ).filter(e => e.required).map(i =>
      ({key:i.field, value:i.detail.start})
    ).reduce((a,item) => (a[item.key] = item.value, a), {})
  )
  const [ruleData,setRuleData] = useState({})
  const [axiomData,setAxiomData] = useState({})

  const stepContent = [
    {
      title: 'Introduction',
      content: <Intro />
    },{
      title: 'Setup',
      content: <VotingSetup data={setupData} updateData={data => setSetupData({...setupData,...data})} />
    },{
      title: 'Existing Voting Rules',
      content: <ExistingRules data={ruleData} updateData = {data => setRuleData({...ruleData,...data})} />
    },{
      title: 'Voting Axioms',
      content: <VotingAxioms data={axiomData} updateData={data => setAxiomData({...axiomData,...data})}/>
    },{
      title: 'Learn New Rules',
      content: <LearnNewRule data={{setup:setupData,rules:ruleData,axioms:axiomData}}/>
    },{
      title: 'Apply Learned Rules',
      content: <ApplyRule />
    }

  ]



  // const [votingProfileForm] = Form.useForm()
  // const no_candidates = Form.useWatch('no_candidates',votingProfileForm)
  // const group_ratio = Form.useWatch('group_ratio',votingProfileForm)

  // const [existingRulesForm] = Form.useForm()
  // const use_rule_1 = Form.useWatch('rule1',existingRulesForm)


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        // margin: '10px 20px',
        maxWidth: 2000,
        maxHeight: 1200,
        margin: 'auto',
        padding: '2% 5%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // border:'1px solid red'
      }}
    >
      <div
        style={{
          height: 800
        }}
      >
        <Steps
          current = {curStep}
        >
          {stepContent.map(c => 
            <Steps.Step key={c.title} title={c.title}/>
          )}
        </Steps>
        <div
          style={{
            margin:10,
            height:'80%'
          }}
        >
          {stepContent.map((c,i) => 
            <div 
            key={c.title}
            hidden = {i!==curStep}
            >
              {c.content}
            </div>
          )}

        </div>

        <Row>
          <Col>
            <Button
              // type='primary'
              onClick={() => {setCurStep(curStep - 1); window.scroll({top:0,left:0,behavior:'smooth'})}}
              disabled = {curStep === 0}
            >
              Prev
            </Button>
          </Col>
          <Col offset={2}>
            <Button
              type='primary'
              onClick = {() => {setCurStep(curStep + 1); window.scroll({top:0,left:0,behavior:'smooth'})}}
              disabled = {curStep === stepContent.length -1}
            >
              Next
            </Button>
          </Col>
        </Row>

      </div>


      {/* Footer Zone */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'middle',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            margin: '0px 20px'
          }}
        >
          Built by: Prof. <a target="_blank" href="http://cs.rpi.edu/~xial" rel="noopener noreferrer">Lirong Xia</a>'s Group
        </div>
        <div
          style={{
            margin: '0px 20px'
          }}
        >
          <a target="_blank" href="https://icons8.com/icon/KwJ_oShFEoN7/elections" rel="noopener noreferrer">Elections</a> icon by <a target="_blank" href="https://icons8.com" rel="noopener noreferrer">Icons8</a>
        </div>
      </div>
    </div>
  );
}

// export const server = 'https://opra.cs.rpi.edu/polls/voting'

// for local debugging
// export const server = 'http://127.0.0.1:5001' 

// for heroku server
// export const server = 'https://voting-demo-backend.herokuapp.com'

export default App