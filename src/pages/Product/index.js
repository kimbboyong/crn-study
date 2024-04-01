import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import { Wrapper } from './style/index'
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../redux/actions/productAction";

const Product = () => {

    const cardData = useSelector(state => state.product.cardData);
    const [query, setQuery] = useSearchParams();

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = () => {
            const getQuery = query.get("q") || '';
            dispatch(productAction.getProducts(getQuery));
        }
        fetchData();
    }, [query])
    return (
        <Wrapper>
            {
                cardData.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))
            }
        </Wrapper>
    )
}

export default Product;