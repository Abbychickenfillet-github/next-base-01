import React, { useState } from 'react';
import UserInfo from './UserInfo';
import Address from './Address';
import Payment from './Payment';

const RegistrationForm = () => {
  const [step, setStep] = useState(1); // 控制當前步驟
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
    paymentInfo: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>註冊流程</h2>
      {step === 1 && (
        <UserInfo
          userData={userData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Address
          userData={userData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Payment
          userData={userData}
          handleInputChange={handleInputChange}
          prevStep={prevStep}
        />
      )}
    </div>
  );
};

export default RegistrationForm;
