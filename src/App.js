import { useState,useEffect } from 'react';
// import StartPage from './pages/startpage/StartPage.js';
// import { HashRouter as Router, Route, Switch } from "react-router-dom";

import 'antd/dist/antd.css';
import { Form, Layout, Tabs } from 'antd';

import Intro from './pages/Intro/Intro.js';
import VotingProfile from './pages/VotingProfile/VotingProfile.js';

const App = () => {
  const [state, setstate] = useState({
    server: 'https://voting-demo-backend.onrender.com',
    // curIdx: 0
  })

  const [votingProfileForm] = Form.useForm()
  const profileSetting = Form.useWatch(['no_candidates'],votingProfileForm)

  const steps = [
    ['Introduction', <Intro />],
    ['Voting Profile', <VotingProfile formRef={votingProfileForm} />],
    ['Existing Rules',<>value: {votingProfileForm.getFieldValue(['no_candidates', 'group_ratio'])} </>],
    ['Pick Axioms',],
    ['Learn New Rules',],
  ]

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
      <div>
        {/* value: {votingProfileForm.getFieldValue(['no_candidates', 'group_ratio'])} */}
        {/* value: {profileSetting} */}
      </div>
      <div
        style={{
          height: 800
        }}
      >
        <Tabs
          destroyInactiveTabPane={false}
        >
          {steps.map(([name,component],i)=>
            <Tabs.TabPane
              tab = {`${i+1}. ${name}`}
              key = {i}
              forceRender={true}
            >
              {component}
            </Tabs.TabPane>
          )}
        </Tabs>

      </div>
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