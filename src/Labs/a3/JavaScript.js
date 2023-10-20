import VariablesAndConstants from "./VariableAndConstant";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ParaenthesisAndParameters from "./FunctionParenthesisAndParameters";
import ImpliedReturn from "./ImpliedReturn";
import WorkingWithArrays from "./WorkingWithArrays";
import JSonStringify from "./JsonStringify";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function JavaScript() {
    console.log("Hello World!");
    return (
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <ParaenthesisAndParameters/>
            <WorkingWithArrays/>
            <JSonStringify/>
            <TemplateLiterals/>
            <House/>
            <Spread/>
            <Destructing/>
            <FunctionDestructing/>
        </div>
    )
}

export default JavaScript;