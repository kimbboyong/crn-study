import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";


const List = styled.li`
    cursor: pointer;
    figure {
        overflow: hidden;
        margin-bottom: 15px;
        img {
            max-width: 100%;
            transition: all .4s;
        }
    }

    strong,
    span {
        display: block;
        margin-bottom: 10px;
        color: #333;
    }
    em {
        display: block;
        color: #333
        font-weight: bold; 
    }

    &:hover figure img {
        transform: scale(1.1);
    }

`

const ProductCard = ({ item }) => {
    const navigate = useNavigate();

    const showDetail = () => {
        navigate(`/produc/${item.id}`);
    }

    return (
        <List onClick={showDetail}>
            <figure>
                <img src={item?.img} alt="" />
            </figure>
            <strong>{item?.title}</strong>
            <span>{item?.price}</span>
            <em>{item?.new === true ? '신제품' : ''}</em>
        </List>

    )
}

export default ProductCard;