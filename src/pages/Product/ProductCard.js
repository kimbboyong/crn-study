import { styled } from "styled-components";

const List = styled.li`
  figure {
    margin-bottom: 15px;
    img {
      max-width: 100%;
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
    color: #333;
    font-weight: bold;
  }
`;

const ProductCard = ({ item }) => {
  return (
    <List>
      <figure>
        <img src={item?.img} alt="" />
      </figure>
      <strong>{item?.title}</strong>
      <span>{item?.price}</span>
      <em>{item?.new === true ? "신제품" : ""}</em>
    </List>
  );
};

export default ProductCard;
