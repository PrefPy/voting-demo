import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

import './LoadSpinner.css'

const LoadSpinner = props => {
  const { promiseInProgress } = usePromiseTracker()
  return(
    promiseInProgress && 
        <div className="LoadSpinner">
            <Loader type="ThreeDots" color="#9ef3ec" height="100" width="200"></Loader>
        </div>
  )
}

export default LoadSpinner