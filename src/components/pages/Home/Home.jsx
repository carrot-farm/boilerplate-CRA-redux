import React from 'react';
import { useDispatch } from 'react-redux';

import { setNumber } from 'modules/common/commonActions';
import { login, logout } from 'modules/user/userActions';

// ===== 컴포넌트
function Home() {
  const dispatch = useDispatch();

  // # 이벤트 핸들러
  const handleClick = () => {
    dispatch(login({id: 'id', password: 'password'}));
    // dispatch(setNumber(55));
  };
  
  const handleLogoutClick = () => {
    dispatch(logout());
  }

  return <div>
    <h1>Home</h1>
    <button onClick={handleClick}>로그인</button>
    <button onClick={handleLogoutClick}>로그아웃</button>
  </div>
}

export default Home;