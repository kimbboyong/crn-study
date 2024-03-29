import React from 'react'
import { styled } from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
const Form = styled.form`
    position: absolute;
    bottom: 0;
    right:20px;
    .icon {
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
    }
    @media screen and (max-width: 1080px) {
        position: relative;
        bottom: auto;
        right: auto;
        width:100%;
        display:flex;
        justify-content: center;
    }
`

const Input = styled.input`
    display: inline-block;
    font-size: 16px;
    color: #333;
    padding: 5px 10px 5px 30px;
    border: 0;
    border-bottom: 1px solid #ccc;
    &:placeholder {
        color: #ccc;
    }
    @media screen and (max-width: 1080px) {
        width: 100%;
    }
`


const Search = () => {

    const navigate = useNavigate();
    const onKeyPress = (e) => {
        const { value } = e.target;

        if (e.code === 'Enter') {
            navigate(`?q=${value}`);
        }
    }

    return (
        <Form onSubmit={(e) => { e.preventDefault() }}>
            <FontAwesomeIcon className='icon' icon={faSearch} />
            <Input type="text" placeholder='검색' onKeyPress={onKeyPress} />
        </Form>
    )
}

export default Search