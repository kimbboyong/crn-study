import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducer/productSlice';
import authenticateReducer from './reducer/authenticateReducer';

const store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productSlice,
    }
});

export default store;