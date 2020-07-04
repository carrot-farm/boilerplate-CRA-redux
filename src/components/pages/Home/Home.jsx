import React from 'react';
import { useDispatch } from 'react-redux';

import { setNumber } from 'modules/common/commonActions';

// ===== 컴포넌트
function Home() {
  const dispatch = useDispatch();

  // # 이벤트 핸들러
  const handleClick = () => {
    console.log('> click: ');
    dispatch(setNumber(55));
  };

  return <div>
    <h1>Home</h1>
    <button onClick={handleClick}>버튼</button>
  </div>
}

export default Home;