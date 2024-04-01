import axios from "axios";


function getProducts(getQuery) {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(`https://my-json-server.typicode.com/kimbboyong/crn-study/products?q=${getQuery}`);
            dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { response } });
        } catch (e) {
            console.log(e);
        }
    }
}

function getProductDetail(param) {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(`https://my-json-server.typicode.com/kimbboyong/crn-study/products/${param.id}`);
            dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: { response } })
        } catch (e) {
            console.log(e);
        }
    }
}

export const productAction = { getProducts, getProductDetail }