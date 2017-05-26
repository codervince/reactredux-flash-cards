//THIS IS A "PURE " REACT COMPONENT
import React from 'react'; //must IMPORT React

//JSX veiled function calls to reach functions
const App = (props) => {
        return (<div className='app'>
            {props.children}
            </div>);
        };
export default App;