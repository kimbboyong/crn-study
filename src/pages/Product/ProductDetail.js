import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Detail, Text, Button } from './style/index';
import { productAction } from '../../redux/actions/productAction'
const ProductDetail = () => {

    const param = useParams(null);
    const dispath = useDispatch();
    const cardDetail = useSelector(state => state.product.cardDetail);

    useEffect(() => {
        const fetchData = async () => {
            dispath(productAction.getProductDetail(param))
        }
        fetchData();
    }, [])

    console.log(cardDetail);
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