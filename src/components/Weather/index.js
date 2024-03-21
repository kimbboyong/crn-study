
import styled from 'styled-components';

const Wrapper = styled.div`
    
`
const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const Title = styled.strong`
    font-size: 20px;
    color: #fff;
`
const WeatherImg = styled.figure`
    position: relative;
    img {
        max-width:100%;
    }

    &.imgAnimation {
    animation: motion 0.5s linear 0s infinite alternate; margin-top: 0;
        @keyframes motion {
            0% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(10px);
            }
        }
    }
`

const Temp = styled.span`
    font-size: 18px;
    color: #fff;
`


const Weather = ({ title, temp, img, imgAnimation, strong, span }) => {
    return (
        <Wrapper>
            <Item>
                <Title style={strong}>
                    {title}
                </Title>
                <WeatherImg className={imgAnimation}>
                    <img src={`https://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
                </WeatherImg>
                <Temp style={span}>
                    {temp}°
                </Temp>
            </Item>
        </Wrapper>
    )
}

export default Weather;