import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Detail, Text, Button } from './style/index';
import { getSingleProducts } from '../../redux/reducer/productSlice';
const ProductDetail = () => {

    const param = useParams(null);
    const dispath = useDispatch();
    const cardDetail = useSelector(state => state.product.cardDetail);

    useEffect(() => {
        const fetchData = async () => {
            dispath(getSingleProducts(param));
        }
        fetchData();
    }, [dispath, param]);

    return (
        <Detail>
            <figure>
                <img src={cardDetail?.img} alt="" />
            </figure>
            <Text>
                <div>
                    <strong>{cardDetail?.title}</strong>
                    <span>₩ {cardDetail?.price}원</span>
                </div>
                <Button>추가</Button>
            </Text>
        </Detail>
    )
}

export default ProductDetail