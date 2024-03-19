import { GridTitle, Content, Result, Tie, Win, Lose } from '../../style/StyledBox';

const Box = ({ title, item, result }) => {
    let ResultComponent = Tie;
    if (result === 'win') {
        ResultComponent = Win;
    } else if (result === 'lose') {
        ResultComponent = Lose;
    }
    return (
        <ResultComponent>
            <GridTitle>
                {title}
            </GridTitle>
            <Content>
                <figure>
                    <img src={item && item.img} alt="" />
                </figure>
                <Result>
                    {result}
                </Result>
            </Content>
        </ResultComponent>
    );
}

export default Box;