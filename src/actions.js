//ACTIONS ARE OBJECTS

//ADD_DECK
//SHOW_ADD_DECK
// HIDE_ADD_DECK

//ACTIONS must return an object
export const addDeck = name => ({
type: 'ADD_DECK', data: name
});
export const showAddDeck = () => ({
type: 'SHOW_ADD_DECK'
});
export const hideAddDeck = () => ({
type: 'HIDE_ADD_DECK'
});
