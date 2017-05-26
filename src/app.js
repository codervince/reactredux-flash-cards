import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux'; 




import * as reducers from './reducers';
import App from './components/App';
import Sidebar from './components/Sidebar';

//version with import from reducers.js
//these are from redux
const store = createStore(combineReducers(reducers));


//new version for top-level reducers
// const store = Redux.createStore(Redux.combineReducers({
//     cards: cards, //cards function,
//     decks: decks,
//     addingDeck: addingDeck

// }));
//equivalent to:
// const store = Redux.createStore(function(state, action) {
//     //state previous state
//     //this function is the reducer
//     return {
//         cards: cards(state.cards, action),
//         decks: decks(state.decks, action)
//     };

// });

//watch store
// store.subscribe(() => {
//     console.log(store.getState());
// });

// //send store an action!
// store.dispatch({
//     type: 'ADD_CARD',
//     data: {
//         front: 'front',
//         back: 'back'
//     }
// })
/*<div className='app'>
        <h1> Hello React</h1>
        </div>);*/
// const App = React.createClass
// bablefy converts jsx into React function calls
//React Components how do they work?



//what is this run function?
function run(){
    let state = store.getState();
    console.log(state);
    ReactDOM.render((
        <Provider store={store}>
        <App>
        <Sidebar />
        </App>
        </Provider>    
        ) , document.getElementById('root'))
}

run();
store.subscribe(run);

//good way to debug functions - call in console! ACTIONS dispatched to store
window.show = () => store.dispatch(showAddDeck());
window.hide = () => store.dispatch(hideAddDeck());
window.add = () => store.dispatch(addDeck(new Date().toString()));