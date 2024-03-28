import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import { styled } from 'styled-components';

const Title = styled.h2`
    text-align: center;
    color: #333;
    margin-bottom: 30px;
`


const Mypage = () => {
    const [userData, setUserData] = useState({
        userid: '',
        username: '',
        userpw: '',
    })
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            setUserData(userInfo);
        }
    }, []);

    const updateUser = (updatedUserData) => {
        setUserData(updatedUserData);
        localStorage.setItem('userInfo', JSON.stringify(updatedUserData));
    }

    const onSubmit = (formData) => {
        if (userData.userid === '' || userData.username === '' || userData.userpw === '') {
            alert('정보를 입력해주세요');
            return;
        }

        updateUser(formData);
        navigate('/')
        window.location.reload();
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }))
    }


    return (
        <>
            <Title>마이페이지</Title>
            <UserForm
                onSubmit={onSubmit}
                onChange={onChange}
                placeId={userData.userid}
                placeName={userData.username}
                placePw='새로운 비밀번호 입력해주세요.'
                updateUser={updateUser}
                nameId='userid'
                nameName='username'
                namePw="userpw"
                ButtonName='수정하기'
            />
        </>
    )
}

export default Mypage