import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../pages/Product/ProductDetail'

const PrivateRoute = ({ authenticate }) => {
    return (
        <>
            {
                authenticate ? <ProductDetail /> : <Navigate to="/login" />
            }
        </>
    )
}

export default PrivateRoute