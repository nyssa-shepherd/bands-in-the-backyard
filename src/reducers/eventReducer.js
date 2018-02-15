export const eventReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_EVENTS':
            return [...action.addEvents];
        default:
            return state;
    }
}