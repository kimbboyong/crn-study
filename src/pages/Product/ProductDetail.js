import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Detail, Text, Button } from './style/index';

const ProductDetail = () => {

    const param = useParams(null);

    const [producData, setProducData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://my-json-server.typicode.com/kimbboyong/crn-study/products/${param.id}`);
                setProducData(response.data);
            } catch (e) {
                setProducData(e);
            }
        }
        fetchData();
    }, [])

    console.log(producData);

    return (
        <Detail>
            <figure>
                <img src={producData?.img} alt="" />
            </figure>
            <Text>
                <div>
                    <strong>{producData?.title}</strong>
                    <span>₩ {producData?.price}원</span>
                </div>
                <Button>추가</Button>
            </Text>
        </Detail>
    )
}

export default ProductDetail