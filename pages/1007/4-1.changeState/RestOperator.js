import React, { useState, useEffect } from 'react';

export default function RestOperator(props) {
  const [func1, setFunc1] = useState(() => {
    return function direction(...args) {
      let [start, ...remaining] = args;
      let [finish, ...stops] = remaining.reverse();
      console.log(`Drive through ${args.length} towns`);
      console.log(`Start in ${start}`);
      console.log(`The destination is ${finish}`);
      console.log(`Stopping ${stops.length} times in between`);
    };
  });

  useEffect(() => {
    // 在組件掛載後didMount調用函數
    func1("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");
  }, [func1]); // 依賴於 func1

  return (
    <>
      <h1>RestOperator</h1>
      <h2>了解其餘參數</h2>
      <h3>directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma")</h3>
      <p>console.log(`Stopping ${stops.length} times in between`);</p>
    </>
  );
}
// 此時func1=directionc函數