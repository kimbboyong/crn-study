import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserForm from '../../components/UserForm';

const Login = ({ setAuthenticate }) => {
    const navigate = useNavigate();

    const [users, setUsers] = useState({
        userid: '',
        username: '',
        userpw: '',
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setUsers({
            ...users,
            [name]: value
        });
    }

    const onSubmit = (formData) => {
        localStorage.setItem('userInfo', JSON.stringify(formData));
        setAuthenticate(true);
        navigate('/');
    }

    return (
        <UserForm
            onSubmit={onSubmit}
            onChange={onChange}
            placeId='아이디'
            placeName='닉네임'
            placePw='비밀번호'
            nameId='userid'
            nameName='username'
            namePw='userpw'
        />
    )
}

export default Login