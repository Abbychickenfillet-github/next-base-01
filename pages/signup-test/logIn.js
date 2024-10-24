import React, { useState, useEffect } from 'react'
import styles from '@/styles/LoginForm.module.scss'

export default function LogIn(props) {
  return (
    <>
      <div className={styles['gradient-bg']}>
        <div className={`${styles.blur} ${styles.white}`}>blur</div>
        {/* <div style=""></div> */}
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center gx-5">
            <div className={styles.left + ' col-sm-1 col-md-2'}>
              <h4 className={styles.white}>Welcome to</h4>
              <br />
              <h3 className={`${styles.white} ${styles['guru-laptop']}`}>
                GURU Laptop
              </h3>
            </div>
            <div className={`${styles.right} col-sm-12 col-md-4`}>
              <div className={`${styles.tabs} d-flex justify-content-between`}>
                <h5 className={`${styles.white} ${styles.hover}`}>Log in</h5>
                <h5 className={styles.white}>|</h5>
                <h5 className={`${styles.white} ${styles.hover}`}>Sign up</h5>
              </div>
              <div className="justify-content-center align-items-center">
                <form
                  className="mt-5 position-relative d-flex justify-content-center align-items-center"
                  action
                >
                  <div className="inputs position-relative">
                    <label htmlFor="email" className={styles.white}>
                      帳號(信箱)
                    </label>
                    <input
                      type="email"
                      className={`${styles['custom-input']} form-control`}
                      name="email"
                      focus
                    />
                    <label
                      htmlFor="inputPassword5"
                      className={`form-label ${styles.white} ${styles['custom-label']} mt-5`}
                    >
                      密碼
                    </label>
                    <input
                      type="password"
                      id="inputPassword5"
                      className={`form-control ${styles['custom-input']}`}
                      aria-describedby="passwordHelpBlock"
                      focus
                    />
                    <div
                      id="passwordHelpBlock"
                      className={`form-text ${styles.white} p-5`}
                    >
                      Your password must be 8-20 characters long, contain
                      letters and numbers, and must not contain spaces, special
                      characters, or emoji.
                    </div>
                    <button
                      className="btn btn-outline-success inline-auto position-absolute"
                      type="submit"
                    >
                      送出
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
