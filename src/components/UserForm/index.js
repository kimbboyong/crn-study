import React from 'react'
import { Button, Form, InputBox } from './style/index'

const UserForm = ({
    onSubmit,
    onChange,
    placeId,
    placeName,
    placePw,
    nameId,
    nameName,
    namePw,
    ButtonName
}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            [nameId]: e.target[nameId].value,
            [nameName]: e.target[nameName].value,
            [namePw]: e.target[namePw].value,
        };

        onSubmit(formData);
    };

    return (

        <Form onSubmit={handleSubmit}>
            <InputBox
                type="text"
                name={nameId}
                placeholder={placeId}
                autoComplete='true'
                onChange={onChange}
            />
            <InputBox
                type="text"
                name={nameName}
                placeholder={placeName}
                autoComplete='true'
                onChange={onChange}
                maxLength="6"
            />
            <InputBox
                type="password"
                name={namePw}
                autoComplete="off"
                placeholder={placePw}
                onChange={onChange}
            />
            <Button type="submit">{ButtonName}</Button>
        </Form>
    )
}

export default UserForm