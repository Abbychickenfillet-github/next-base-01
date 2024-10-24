import React from 'react';

const Address = ({ userData, handleInputChange, nextStep, prevStep }) => {
  return (
    <div>
      <h3>填寫地址</h3>
      <input
        type="text"
        name="address"
        placeholder="地址"
        value={userData.address}
        onChange={handleInputChange}
      />
      <button onClick={prevStep}>上一步</button>
      <button onClick={nextStep}>下一步</button>
    </div>
  );
};

export default Address;
