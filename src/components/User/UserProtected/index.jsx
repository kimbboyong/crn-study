import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../../firebase";

const UserProtected = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false); // 인증 상태 확인 완료 시 로딩 상태 변경
    });

    // 컴포넌트 언마운트 시 리스너 해제
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // 또는 로딩 인디케이터 컴포넌트
  }
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default UserProtected;
