import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

import { Wrapper } from './style/index'
import { useSearchParams } from "react-router-dom";

const Product = () => {

    const [cardData, setCardData] = useState([]);
    const [query, setQuery] = useSearchParams();


    useEffect(() => {
        const fetchData = async () => {
            const getQuery = query.get("q") || '';
            try {
                const response = await axios.get(`https://my-json-server.typicode.com/kimbboyong/crn-study/products?q=${getQuery}`);
                setCardData(response.data);
            } catch (e) {
                console.log(e);
            }

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