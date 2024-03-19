import { Component } from 'react';
import { GridTitle, Content, Result, Tie, Win, Lose } from '../../style/StyledBox';

export default class Box extends Component {
    render() {
        let ResultComponent = Tie;
        if (this.props.result === 'win') {
            ResultComponent = Win;
        } else if (this.props.result === 'lose') {
            ResultComponent = Lose;
        }
        return (
            <ResultComponent>
                <GridTitle>
                    {this.props.title}
                </GridTitle>
                <Content>
                    <figure>
                        <img src={this.props.item && this.props.item.img} alt="" />
                    </figure>
                    <Result>
                        {this.props.result}
                    </Result>
                </Content>
            </ResultComponent>
        );
    }

}