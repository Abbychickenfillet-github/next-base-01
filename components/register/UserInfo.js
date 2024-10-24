import React from 'react';

const UserInfo = ({ userData, handleInputChange, nextStep }) => {
  return (
    <div>
      <h3>填寫個人資訊</h3>
      <input
        type="text"
        name="name"
        placeholder="姓名"
        value={userData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="電子郵件"
        value={userData.email}
        onChange={handleInputChange}
      />
      <button onClick={nextStep}>下一步</button>
    </div>
  );
};

export default UserInfo;
