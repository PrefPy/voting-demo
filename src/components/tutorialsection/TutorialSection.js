import './TutorialSection.css'
import { Button } from 'antd'
import { useState } from 'react'

const TutorialSection = () => {
    const [state,setState] = useState({expandAbstract:false,expandIntro:true})

    const toggleAbstract = () =>{setState({...state,expandAbstract:!state.expandAbstract})}
    const toggleIntro = () => {setState({...state,expandIntro:!state.expandIntro})}

    return(
        <div className='TutorialSection'>
            <div className={`intro-body ${state.expandIntro ? 'expanded' : 'collapsed'}`}>
                <h1 style={{textAlign:'center'}}><b>MLVR</b> - Machine Learning based design of Voting Rules</h1>
                <div className="main-content">
                    <h3><b>Introduction</b></h3>
                    This demo demonstrates our framework to find voting rules that match the given constraints using machine learning. 
                    We showcase a number of axioms that are both traditional and new that our framework can satisfy, such as traditional condorcet efficiency, consistency requirement, and some new axioms such as group fairness.  
                </div>
                <Button onClick={toggleIntro} type="link">
                    {state.expandIntro ? 'Minimize introduction' : 'Expand introduction'}
                </Button>
                    
            </div>

            <div className={`intro-detail ${state.expandAbstract ? 'expanded' : 'collapsed'}`}>
                <Button onClick={toggleAbstract} type="link">
                    {state.expandAbstract ? 'Minimize abstract' : 'Expand full abstract'}
                </Button>
                <div 
                    // style={{display:state.expandAbstract ? 'block' : 'none'}} 
                    className="abstract-body">
                    We define a novel notion of group imbalance-based fairness in voting, and see that traditional voting rules are efficient yet unfair in average [1]. Furthermore, fully fair rules would be highly inefficient. Our goal is to be able to design new voting rules with varying levels of fairness and efficiency. We are considering group-imbalance based fairness for two groups and Condorcet efficiency as an efficiency measure. Additionally, we can choose the level of privacy (in terms of local differential privacy) that is required. Once we define the number of candidates, the ratio between group sizes and fairness, efficiency and privacy requirements, a data driven framework will design new voting rules to satisfy the requirements. It will also show a comparison with popular existing voting rules.
                    <div className="references">
                        <b>References:</b>
                        [1] Mohsin, F., Liu, A., Chen, P.Y., Rossi, F., and Xia, L. <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/12bb5i_T9TtOEgyOvQlSk5KmWu2JNdRAi/view?usp=sharing" >"Learning to Design Fair and Private Voting Rules."</a>, To be presented at the AI For Social Good Workshop (AI4SG), 30th International Joint Conference on Artificial Intelligence (IJCAI-21). 2021.
                    </div>
                </div>                
            </div>
            {/* <Button className="hidetutorial" type="link" onClick={setHideIntro}><CaretUpOutlined style={{fontSize:'200%'}}/></Button> */}
        </div>
    )
}

export default TutorialSection