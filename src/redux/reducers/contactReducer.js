const initialState = [
    {
        id: 0,
        name: 'Vincenzo Cassano',
        number: 766442234,
        email:
        'vincassano@gmail.com'
    },
    {
        id: 1,
        name: 'Hong Cha-Young',
        number: 770488856,
        email: 'honchayoung@gmail.com'
    },
];

const contactReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_CONTACT':
            return state = [ ...state, action.payload]

        case 'UPDATE_CONTACT':
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload: contact)

            state = updateState;

            return state;

        case 'DELETE_CONTACT':
            const filterContacts = state.filter(contact => contact.id !== action.payload && contact)

            state = filterContacts;
            return state;
        default:
        return state;
    }
}

export default contactReducer;