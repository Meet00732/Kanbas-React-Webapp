import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
  const hostedServer = process.env.REACT_LAB_API;
  const API_BASE = `${hostedServer}`;
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={`${API_BASE}/a5/welcome`}
             className="list-group-item">
            Welcome
          </a>
        </div>
        <h2>Simple API Example</h2>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
      </div>
    );
  }
export default Assignment5;
  
  