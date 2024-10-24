import React from 'react';

const Payment = ({ userData, handleInputChange, prevStep }) => {
  return (
    <div>
      <h3>填寫付款資訊</h3>
      <input
        type="text"
        name="paymentInfo"
        placeholder="付款資訊"
        value={userData.paymentInfo}
        onChange={handleInputChange}
      />
      <button onClick={prevStep}>上一步</button>
      <button type="submit">提交註冊</button>
    </div>
  );
};

export default Payment;
