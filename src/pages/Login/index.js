import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import { styled } from 'styled-components';

const Title = styled.h2`
    text-align: center;
    color: #333;
    margin-bottom: 30px;
`

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
        if (users.userid === '' || users.username === '' || users.userpw === '') {
            alert('정보를 입력해주세요');
            return;
        }
        localStorage.setItem('userInfo', JSON.stringify(formData));
        setAuthenticate(true);
        navigate('/');
    }

    return (

        <>

            <Title>로그인</Title>
            <UserForm
                onSubmit={onSubmit}
                onChange={onChange}
                placeId='아이디'
                placeName='닉네임'
                placePw='비밀번호'
                nameId='userid'
                nameName='username'
                namePw='userpw'
                ButtonName='로그인'
            />
        </>
    )
}

export default Login