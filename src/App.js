import { useState } from 'react';
import Footer from './components/footer/Footer.js'
import StartPage from './pages/startpage/StartPage.js';
// import { HashRouter as Router, Route, Switch } from "react-router-dom";

import 'antd/dist/antd.css';

const App = () => {
	const [state, setstate] = useState({server:'https://voting-demo-backend.herokuapp.com'})

	return (
		<div>
			{/* <Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path="/result" component={ResultPage} />
					<Route exact path="/" component={StartPage} />
				</Switch>
			</Router> */}
			<StartPage settings={state} setSettings={setstate}/>
			<Footer />
		</div>
	);
}

export const server = 'https://opra.cs.rpi.edu/polls/voting'

// for local debugging
// export const server = 'http://127.0.0.1:5001' 

// for heroku server
// export const server = 'https://voting-demo-backend.herokuapp.com'


export default App