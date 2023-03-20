
const intialState = {
    cardData: []
};

const cardItems = (state = intialState, action) => {
    switch (action.type) {
        case "ADDTOCART": return {
            ...state,
            cardData: [...state.cardData, action.payload],
        }
        case "REMOVETOCART":
            return Object.assign({}, state, {
                cardData: [...state.cardData.filter(item => item.id !== action.id)],
            });
        case "ORDERSUCCESS": return {
            ...state,
            cardData: []
        }
        default: return state;
    }
}

export default cardItems;

