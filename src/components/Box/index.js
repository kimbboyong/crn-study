import { GridTitle, Content, Result } from '../../style/StyledBox';

const Box = ({ title, item }) => {

    console.log(item);

    return (
        <li>
            <GridTitle>
                {title}
            </GridTitle>
            <Content>
                <figure>
                    <img src={item && item.img} alt="" />
                </figure>
                <Result>
                    win
                </Result>
            </Content>
        </li>
    )
}

export default Box;