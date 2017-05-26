import React from 'react';
import ReactDOM from 'react-dom';
import {connect } from 'react-redux';
import {addDeck, showAddDeck, hideAddDeck} from '../actions';
/* 

            decks={state.decks} 
            addingDeck={state.addingDeck} 


            addDeck={name=> store.dispatch(addDeck(name))}
            showAddDeck={()=> store.dispatch(showAddDeck())}
            hideAddDeck={()=> store.dispatch(hideAddDeck())}
*/

const mapStateToProps  = (state) => {
    return {

            decks: state.decks,
            addingDeck: state.addingDeck 
    };
};

const mapDispatchToProps = (dispatch)  => {
    return {
            addDec: name=> dispatch(addDeck(name)),
            showAddDeck: ()=> dispatch(showAddDeck()),
            hideAddDeck: () => dispatch(hideAddDeck())
    }
}

//react createClass deprecated!
// this is a presentational component
const Sidebar = React.createClass({
    //lifecycle methods
    componentDidUpdate(){
        //every time sidebar rerendered
        //focus on text box
        var el =  ReactDOM.findDOMNode(this.refs.add);
        if (el) el.focus();

    },
    render() {
        let props = this.props;

        return(<div className='sidebar'>
            <h2> All Decks </h2>
            <button onClick={e => this.props.showAddDeck() }>

                New Deck 
                </button>
            <ul>
            {props.decks.map((deck, i) => 
            <li key={i}> {deck.name} </li>
            )}
            </ul>
            { props.addingDeck && <input ref='add' onKeyPress={this.createDeck} />}
            </div>);
    },
    createDeck(evt){
        if(evt.which !==13) return; //return
        var name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addDeck(name);
        this.props.hideAddDeck();
    }
});

//exports new Container component
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);