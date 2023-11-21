import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
  const hostedServer = process.env.REACT_APP_HOST_SERVER;
  const API_BASE = `${hostedServer}/a5`;
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={`${API_BASE}/welcome`}
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
  
  