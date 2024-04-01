const initialstate = {
    cardData: [],
    cardDetail: {},
}

function productReducer(state = initialstate, action) {
    let { type, payload } = action;

    switch (type) {
        case "GET_PRODUCT_SUCCESS":
            return { ...state, cardData: payload.response.data };
        case "GET_PRODUCT_DETAIL_SUCCESS":
            return { ...state, cardDetail: payload.response.data };
        default:
            return { ...state };
    }
}

export default productReducer; 