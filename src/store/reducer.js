
const initState = 'light';

function reducer(state, action) {
    switch (action.type) {
        case 'dark':
        return 'dark';
        case 'light':
        return 'light';
        default:
        return state;
    }
}

export { initState}
export default reducer