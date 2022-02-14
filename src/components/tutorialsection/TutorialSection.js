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
Voting is the most popular method of making a collective decision from individual (and often contradictory) preference of agents. Many different voting rules are developed for this purpose. Various axioms have been defined in classic social choice literature to measure goodness of a voting rule, such as Condorcet efficiency, monotonicity, anonymity etc [1]. On the other hand, in modern times new properties are also considered important for the decision-making domain such as group fairness, privacy etc. It has been shown that many of these properties are inherently incompatible with each other (e.g.,[2, 3, 4]), thus leading to a trade-off. We propose a machine learning-based method for designing new voting rules at different levels of trade-offs between these properties.<br/>
The notion of group fairness we use is group-imbalance based fairness [4] and calculates average-case fairness of a voting rule for two groups of different sizes. The notion of privacy we use is local differential privacy [5] and we show the performance of voting rules at different levels of privacy requirement.<br/>
                    <div className="references">
                        <b>References</b>
                        <br/>
[1] Felix Brandt, Vincent Conitzer, Ulle Endriss, J´erome Lang, and Ariel D Procaccia. Handbook of computational social choice. Cambridge University Press, 2016<br/>
[2] Gil Kalai. A Fourier-theoretic perspective on the Condorcet paradox and Arrow’s theorem. Advances in Applied Mathematics, 29(3):412—426, 2002.<br/>
[3] Ehud Friedgut, Gil Kalai, Nathan Keller, and Noam Nisan. A quantitative version of the gibbard–satterthwaite theorem for three alternatives. SIAM Journal on Computing, 40(3):934–952, 2011.<br/>
[4] Farhad Mohsin, Ao Liu, Pin-Yu Chen, Francesca Rossi, and Lirong Xia. Learning to Design Fair and Private Voting Rules.", AI For Social Good Workshop (AI4SG), 30th International Joint Conference on Artificial Intelligence (IJCAI-21), 2021.<br/>
[5] Alexandre Evfimievski, Johannes Gehrke, and Ramakrishnan Srikant. Limiting privacy breaches in privacy preserving data mining. In Proceedings of the twenty-second ACM SIGMOD-SIGACT-SIGART symposium on Principles of database systems, pages 211–222. ACM, 2003.<br/>
                    </div>
                </div>
                <Button onClick={toggleIntro} type="link">
                    {state.expandIntro ? 'Minimize introduction' : 'Expand introduction'}
                </Button>
                    
            </div>

            <div className={`intro-detail ${state.expandAbstract ? 'expanded' : 'collapsed'}`}>
                <Button onClick={toggleAbstract} type="link">
                    {state.expandAbstract ? 'Minimize instructions' : 'Expand full instructions'}
                </Button>
                <div 
                    // style={{display:state.expandAbstract ? 'block' : 'none'}} 
                    className="abstract-body">
The user must define the voting scenario with the number of candidates in the voting system and the size ratio between two pre-defined groups among the voters. The group ratio definition is necessary for the group fairness considerations.<br/>
{/* <br/> */}
Additionally, the user can define different requirement level for various properties.<br/>
{/* <br/> */}
Clicking "Check existing voting rules" will show average values of the different properties for traditional voting rules Copeland, Maximin and Borda.
After inputting different property requirements (can choose a subset of properties), clicking Generate Voting Rule will use our learning based method to design a voting rule that tries to satisfy the requirements. If no such voting rule can be designed (because of impossibility results), the best closest rule will be generated.<br/>
{/* <br/> */}
After new voting rules are generated, the user can apply the newly designed voting rule on any new voting profile.
                    {/* <div className="references">
                        <b>References:</b>
                        [1] Mohsin, F., Liu, A., Chen, P.Y., Rossi, F., and Xia, L. <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/12bb5i_T9TtOEgyOvQlSk5KmWu2JNdRAi/view?usp=sharing" >"Learning to Design Fair and Private Voting Rules."</a>, To be presented at the AI For Social Good Workshop (AI4SG), 30th International Joint Conference on Artificial Intelligence (IJCAI-21). 2021.
                    </div> */}
                </div>                
            </div>
            {/* <Button className="hidetutorial" type="link" onClick={setHideIntro}><CaretUpOutlined style={{fontSize:'200%'}}/></Button> */}
        </div>
    )
}

export default TutorialSection