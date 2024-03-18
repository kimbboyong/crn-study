import Button from '../Button';
import './style/style.css'

const Box = ({ fakeDate, result }) => {

    return (
        <>
            <div className="Wrapper">
                <h2 className="Title">가위바위보</h2>
                <ul className="Grid">
                    {fakeDate.map(item =>
                        <li key={item.id}>
                            <div className="gridTitle">
                                {item.title}
                            </div>
                            <div className="Content">
                                <figure>
                                    <img src="/images/rock.svg" alt="" />
                                </figure>

                                <div className="Result">
                                    {result}
                                </div>
                            </div>
                        </li>
                    )}
                </ul>

                <Button />
            </div>
        </>
    )
}

export default Box;