import React from 'react'
import { styled } from 'styled-components';

const Form = styled.form`
    position: absolute;
    bottom: 0;
    right:20px;

`

const Input = styled.input`
    display: inline-block;
    font-size: 16px;
    color: #333;
    padding: 5px 10px;
    border: 0;
    border-bottom: 1px solid #ccc;
    &:placeholder {
        color: #ccc;
    }
`


const Search = () => {
    return (
        <Form>
            <Input type="text" placeholder='검색' />
        </Form>
    )
}

export default Search