const Intro = () =>
  <>
    <div className="main-content">
      <h3><b>Introduction</b></h3>
      Voting is the most popular method of making a collective decision from individual (and often contradictory) preference of agents. Many different voting rules are developed for this purpose. Various axioms have been defined in classic social choice literature to measure goodness of a voting rule, such as Condorcet efficiency, monotonicity, anonymity etc [1]. On the other hand, in modern times new properties are also considered important for the decision-making domain such as group fairness, privacy etc. It has been shown that many of these properties are inherently incompatible with each other (e.g.,[2, 3, 4]), thus leading to a trade-off. We propose a machine learning-based method for designing new voting rules at different levels of trade-offs between these properties.<br />
      The notion of group fairness we use is group-imbalance based fairness [4] and calculates average-case fairness of a voting rule for two groups of different sizes. The notion of privacy we use is local differential privacy [5] and we show the performance of voting rules at different levels of privacy requirement.<br />

      <a className='vidlink' target='_blank' href='https://www.youtube.com/watch?v=7wMiABG3b84'>Link to video</a>
      <div className="references">
        <b>References</b>
        <br />
        [1] Felix Brandt, Vincent Conitzer, Ulle Endriss, J´erome Lang, and Ariel D Procaccia. Handbook of computational social choice. Cambridge University Press, 2016<br />
        [2] Gil Kalai. A Fourier-theoretic perspective on the Condorcet paradox and Arrow’s theorem. Advances in Applied Mathematics, 29(3):412—426, 2002.<br />
        [3] Ehud Friedgut, Gil Kalai, Nathan Keller, and Noam Nisan. A quantitative version of the gibbard–satterthwaite theorem for three alternatives. SIAM Journal on Computing, 40(3):934–952, 2011.<br />
        [4] Farhad Mohsin, Ao Liu, Pin-Yu Chen, Francesca Rossi, and Lirong Xia. Learning to Design Fair and Private Voting Rules.", AI For Social Good Workshop (AI4SG), 30th International Joint Conference on Artificial Intelligence (IJCAI-21), 2021.<br />
        [5] Alexandre Evfimievski, Johannes Gehrke, and Ramakrishnan Srikant. Limiting privacy breaches in privacy preserving data mining. In Proceedings of the twenty-second ACM SIGMOD-SIGACT-SIGART symposium on Principles of database systems, pages 211–222. ACM, 2003.<br />
      </div>
    </div>
  </>

export default Intro