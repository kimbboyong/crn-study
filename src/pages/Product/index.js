import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

import { Wrapper } from './style/index'

const Product = () => {

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://my-json-server.typicode.com/kimbboyong/crn-study/products');
            setCardData(response.data);
        }

        fetchData();
    }, [])
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