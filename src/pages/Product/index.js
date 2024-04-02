import { useEffect } from "react";
import ProductCard from "./ProductCard";

import { Wrapper } from './style/index'
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducer/productSlice";
const Product = () => {

    const cardData = useSelector(state => state.product.cardData);
    const [query, setQuery] = useSearchParams();
    console.log(setQuery);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = () => {
            const getQuery = query.get("q") || '';
            dispatch(getProducts(getQuery));
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