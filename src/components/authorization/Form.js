import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import Button from '../common/Button'

const Styled = {}

Styled.form = styled.div``

const message = {
  login: '로그인하기',
  register: '가입하기'
}

const Form = ({ type, form, onChange, onSubmit, error }) => {
  // console.log('components → authorization → [Form.js] → type: ', type)

  const text = message[type]
  // console.log('components → authorization → [Form.js] → text: ', text)

  return (
    <Styled.form>
      {/* <strong>{text}</strong> */}

      <form onSubmit={onSubmit}>
        <fieldset>
          <legend className="invisible">회원가입 양식</legend>

          {type === 'register' && (
            <div className="group_picture">
              <img src="/images/common/default_picture.png" alt="" className="image_picture" />

              {/* <div className="group_upload">
                <label htmlFor="picture" className="label_upload">
                  <span className="icon_global">프로필 사진 올리기</span>
                </label>

                <input type="file" name="picture" id="picture" className="textfield_upload" />
              </div> */}
            </div>
          )}

          <div className="group_field">
            <label htmlFor="id" className="label_common">
              아이디
            </label>

            <span className="box_field">
              <input
                type="text"
                name="id"
                id="id"
                className="textfield_common"
                autoComplete="id"
                placeholder="아이디를 입력해 주세요."
                onChange={onChange}
                value={form.id}
              />
            </span>
          </div>

          <div className="group_field">
            <label htmlFor="password" className="label_common">
              패스워드
            </label>

            <span className="box_field">
              <input
                type="password"
                name="password"
                id="password"
                className="textfield_common"
                autoComplete="password"
                placeholder="패스워드를 입력해 주세요."
                onChange={onChange}
                value={form.password}
              />
            </span>
          </div>

          {type === 'register' && (
            <>
              <div className="group_field">
                <label htmlFor="confirm" className="label_common">
                  패스워드 확인
                </label>

                <span className="box_field">
                  <input
                    type="password"
                    name="confirm"
                    id="confirm"
                    className="textfield_common"
                    autoComplete="password"
                    placeholder="패스워드를 한 번 더 입력해 주세요."
                    onChange={onChange}
                    value={form.confirm}
                  />
                </span>
              </div>

              <div className="group_field">
                <label htmlFor="name" className="label_common">
                  닉네임
                </label>

                <span className="box_field">
                  <input
                    type="text"
                    name="name"
                    className="textfield_common"
                    autoComplete="name"
                    placeholder="닉네임을 입력해 주세요."
                    onChange={onChange}
                    value={form.name}
                  />
                </span>
              </div>

              <div className="group_field">
                <label htmlFor="email" className="label_common">
                  이메일
                </label>

                <span className="box_field">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="textfield_common"
                    autoComplete="email"
                    placeholder="이메일을 입력해 주세요."
                    onChange={onChange}
                    value={form.email}
                  />
                </span>
              </div>
            </>
          )}

          {error && <p>{error}</p>}

          <div className="group_confirm group_half">
            <div className="outer_half">
              <div className="inner_half">
                <Link to="/" className="link_common1">
                  홈으로
                </Link>
              </div>

              <div className="inner_half">
                <button type="submit" className="button_global button_common">
                  {text}
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>

      {/* <div className="group_confirm group_half">
        <div className="outer_half">
          <div className="inner_half">
            <Link to="/" className="link_common1">
              홈으로
            </Link>
          </div>

          <div className="inner_half">
            {type === 'login' ? (
              <Link to="/beluga/member/register" className="link_common1">
                회원가입
              </Link>
            ) : (
              <Link to="/beluga/member/login" className="link_common1">
                로그인
              </Link>
            )}
          </div>
        </div>
      </div> */}
    </Styled.form>
  )
}

export default Form
