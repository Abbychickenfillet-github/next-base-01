import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import styles from '@/styles/dashboard.module.scss'; // 假設你有一個樣式檔案

export default function FillExample() {
  return (
    <div className="container">
      <div className={styles.aside}>
        <div className={styles['aside-left']}>
          <img className={styles['small-pic']} src="" alt="profile-pic" />
          <h7>萊歐斯.托登</h7>
          <br />
          <h9>
            <i className="fa-solid fa-pen" /> 編輯個人簡介
          </h9>
        </div>
      </div>

      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3" fill>
        <Tab className="align-items-center" eventKey="home" title="Active">
          <div>
            <h4>Home Tab Content</h4>
            <p>這裡是首頁的內容。</p>
          </div>
        </Tab>
        <Tab eventKey="longer-tab" title="Loooonger NavLink">
          <div>
            <h4>Longer Tab Content</h4>
            <p>這是比較長的 NavLink 對應的內容。</p>
          </div>
        </Tab>
        <Tab eventKey="link" title="Link">
          <div>
            <h4>Link Tab Content</h4>
            <p>這裡是另一個連結對應的內容。</p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
