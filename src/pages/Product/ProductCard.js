import { useNavigate } from "react-router-dom";
import { List } from "./style";




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